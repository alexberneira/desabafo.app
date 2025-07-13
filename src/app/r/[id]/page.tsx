'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { DatabaseService } from '@/lib/database';
import { formatarData } from '@/utils';
import { Desabafo, Resposta } from '@/types/database';

export default function RespostasPage() {
  const params = useParams();
  const router = useRouter();
  const [desabafo, setDesabafo] = useState<Desabafo | null>(null);
  const [respostas, setRespostas] = useState<Resposta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const codigo = params.id as string;
        const desabafoData = await DatabaseService.buscarDesabafoPorCodigo(codigo);
        
        if (desabafoData) {
          setDesabafo(desabafoData);
          const respostasData = await DatabaseService.buscarRespostasPorDesabafo(desabafoData.id);
          setRespostas(respostasData);
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    carregarDados();
  }, [params.id]);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Card className="text-center fade-in">
          <div className="py-12">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-6 animate-spin"></div>
            <p className="text-gray-600 text-lg">Carregando...</p>
          </div>
        </Card>
      </div>
    );
  }

  if (!desabafo) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Card className="text-center fade-in">
          <div className="py-12">
            <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Desabafo não encontrado
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              O link que você acessou não existe ou foi removido.
            </p>
            <Button onClick={() => router.push('/')} size="lg">
              Voltar ao início
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Button
          onClick={() => router.push('/')}
          variant="secondary"
          className="mb-8"
          size="lg"
        >
          ← Voltar ao início
        </Button>
        
        {/* Desabafo Original */}
        <Card variant="accent" className="mb-8 slide-up">
          <div className="mb-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Seu desabafo:
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-3">
                  &ldquo;{desabafo.texto}&rdquo;
                </p>
                <p className="text-sm text-gray-500">
                  {formatarData(desabafo.dataCriacao)}
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Respostas da Comunidade */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            Respostas da comunidade
          </h3>
          
          {respostas.length === 0 ? (
            <Card className="text-center slide-up">
              <div className="py-12">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Ainda não há respostas
                </h4>
                <p className="text-gray-600 text-lg">
                  Volte em breve 🙏
                  <br />
                    Nossa comunidade está aqui para te apoiar.
                </p>
              </div>
            </Card>
          ) : (
            <div className="space-y-6">
              {respostas.map((resposta: Resposta) => (
                <Card key={resposta.id} className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200/30 slide-up">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg leading-relaxed mb-3">
                        {resposta.texto}
                      </p>
                      <p className="text-sm text-gray-500">
                        {formatarData(resposta.dataCriacao)}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center slide-up">
          <div className="glass-card bg-gradient-to-r from-white/80 to-white/60 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Compartilhe este link
            </h3>
            <p className="text-gray-600 mb-6">
              Para que outras pessoas possam te ajudar:
            </p>
            <div className="glass-card bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200/30 rounded-xl p-4 mb-6">
              <p className="font-mono text-sm gradient-text break-all">
                desabafo.app/r/{desabafo.codigo}
              </p>
            </div>
            
            <Button
              onClick={() => router.push('/responder')}
              variant="secondary"
              size="lg"
            >
              Quero ajudar outras pessoas
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 