'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import Card from '@/components/Card';
import { DatabaseService } from '@/lib/database';
import { formatarData } from '@/utils';
import { Desabafo } from '@/types/database';

export default function ResponderPage() {
  const [desabafos, setDesabafos] = useState<Desabafo[]>([]);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [enviando, setEnviando] = useState<Record<string, boolean>>({});
  const [enviados, setEnviados] = useState<Record<string, boolean>>({});
  const [carregando, setCarregando] = useState(true);
  const [contagemRespostas, setContagemRespostas] = useState<Record<string, number>>({});
  const [filtro, setFiltro] = useState<'todos' | 'semResposta' | 'respondidos'>('todos');
  const router = useRouter();

  useEffect(() => {
    const carregarDesabafos = async () => {
      try {
        const desabafosData = await DatabaseService.buscarDesabafosParaResponder();
        setDesabafos(desabafosData);
        
        // Carregar contagem de respostas para cada desabafo
        const contagens: Record<string, number> = {};
        for (const desabafo of desabafosData) {
          try {
            const count = await DatabaseService.contarRespostasPorDesabafo(desabafo.id);
            contagens[desabafo.id] = count;
          } catch (error) {
            console.error(`Erro ao contar respostas para desabafo ${desabafo.id}:`, error);
            contagens[desabafo.id] = 0;
          }
        }
        setContagemRespostas(contagens);
      } catch (error) {
        console.error('Erro ao carregar desabafos:', error);
      } finally {
        setCarregando(false);
      }
    };

    carregarDesabafos();
  }, []);

  const handleEnviarResposta = async (desabafoId: string) => {
    const resposta = respostas[desabafoId];
    if (!resposta?.trim()) return;

    setEnviando(prev => ({ ...prev, [desabafoId]: true }));

    try {
      await DatabaseService.criarResposta(desabafoId, resposta);
      setEnviados(prev => ({ ...prev, [desabafoId]: true }));
      setRespostas(prev => ({ ...prev, [desabafoId]: '' }));
      
      // Atualizar contagem de respostas
      setContagemRespostas(prev => ({
        ...prev,
        [desabafoId]: (prev[desabafoId] || 0) + 1
      }));
    } catch (error) {
      console.error('Erro ao enviar resposta:', error);
      alert('Erro ao enviar resposta. Tente novamente.');
    } finally {
      setEnviando(prev => ({ ...prev, [desabafoId]: false }));
    }
  };

  const handleNovaResposta = (desabafoId: string) => {
    setEnviados(prev => ({ ...prev, [desabafoId]: false }));
    setRespostas(prev => ({ ...prev, [desabafoId]: '' }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 lg:py-12">
      {/* Header Section */}
      <div className="text-center mb-8 lg:mb-12 fade-in">
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl floating-animation">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
          Responder desabafos
        </h1>
        <p className="text-lg lg:text-xl text-white/90">
          Ajude outras pessoas com palavras de apoio e empatia.
        </p>
      </div>

      {carregando ? (
        <Card className="text-center fade-in">
          <div className="py-12">
            <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando desabafos...</p>
          </div>
        </Card>
      ) : desabafos.length === 0 ? (
        <Card className="text-center fade-in">
          <div className="py-12">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Nenhum desabafo para responder
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              No momento não há desabafos que precisem de resposta.
              <br />
              Volte em breve para ajudar outras pessoas!
            </p>
            <Button onClick={() => router.push('/')} size="lg">
              Voltar ao início
            </Button>
          </div>
        </Card>
      ) : (
        <>
          {/* Filtros */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${filtro === 'todos' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50'}`}
              onClick={() => setFiltro('todos')}
            >
              Todos
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${filtro === 'semResposta' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50'}`}
              onClick={() => setFiltro('semResposta')}
            >
              Sem resposta
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${filtro === 'respondidos' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50'}`}
              onClick={() => setFiltro('respondidos')}
            >
              Respondidos
            </button>
          </div>

          {/* Lista filtrada */}
          <div className="space-y-6 lg:space-y-8">
            {desabafos
              .filter(desabafo => {
                if (filtro === 'todos') return true;
                if (filtro === 'semResposta') return (contagemRespostas[desabafo.id] || 0) === 0;
                if (filtro === 'respondidos') return (contagemRespostas[desabafo.id] || 0) > 0;
                return true;
              })
              .map((desabafo: Desabafo) => (
                <Card key={desabafo.id} variant="accent" className={`slide-up`}>
                  {/* Desabafo */}
                  <div className="mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 text-lg leading-relaxed mb-3">
                          &ldquo;{desabafo.texto}&rdquo;
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500">
                            {formatarData(desabafo.dataCriacao)}
                          </p>
                          {contagemRespostas[desabafo.id] > 0 && (
                            <button
                              onClick={() => router.push(`/r/${desabafo.codigo}`)}
                              className="text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center space-x-1 opacity-70 hover:opacity-100"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                              <span>{contagemRespostas[desabafo.id]} resposta{contagemRespostas[desabafo.id] !== 1 ? 's' : ''}</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {enviados[desabafo.id] ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 success-checkmark">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-green-600 font-semibold text-lg mb-4">
                        Resposta enviada com sucesso!
                      </p>
                      <p className="text-gray-600 mb-6">
                        Sua mensagem de apoio foi enviada. Obrigado por fazer a diferença! 💙
                      </p>
                      <Button
                        onClick={() => handleNovaResposta(desabafo.id)}
                        variant="secondary"
                        size="lg"
                      >
                        Enviar outra resposta
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-lg font-semibold text-gray-800 mb-3">
                          Sua resposta de apoio:
                        </label>
                        <Textarea
                          value={respostas[desabafo.id] || ''}
                          onChange={(value) => setRespostas(prev => ({ ...prev, [desabafo.id]: value }))}
                          placeholder="Escreva uma mensagem de apoio e empatia... Seja gentil, compreensivo e ofereça palavras que possam trazer conforto e esperança."
                          rows={6}
                        />
                      </div>
                      <Button
                        onClick={() => handleEnviarResposta(desabafo.id)}
                        disabled={!respostas[desabafo.id]?.trim() || enviando[desabafo.id]}
                        className="w-full heartbeat"
                        size="lg"
                      >
                        {enviando[desabafo.id] ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                            <span>Enviando...</span>
                          </div>
                        ) : (
                          'Enviar resposta de apoio'
                        )}
                      </Button>
                    </div>
                  )}
                </Card>
              ))}
          </div>
        </>
      )}
    </div>
  );
} 