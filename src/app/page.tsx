'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import Checkbox from '@/components/Checkbox';
import Card from '@/components/Card';
import { DatabaseService } from '@/lib/database';

export default function HomePage() {
  const [texto, setTexto] = useState('');
  const [querResposta, setQuerResposta] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [codigo, setCodigo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!texto.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      const desabafo = await DatabaseService.criarDesabafo(texto, querResposta);
      setCodigo(desabafo.codigo);
      setEnviado(true);
    } catch (error) {
      console.error('Erro ao enviar desabafo:', error);
      alert('Erro ao enviar desabafo. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNovoDesabafo = () => {
    setTexto('');
    setQuerResposta(false);
    setEnviado(false);
    setCodigo('');
  };

  if (enviado) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Card className="text-center fade-in">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 success-checkmark">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Seu desabafo foi enviado!
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Acesse o link abaixo para ver as respostas quando elas chegarem:
            </p>
            <div className="glass-card bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200/30 rounded-xl p-6 mb-8">
              <p className="text-sm text-gray-600 mb-3">Link para acompanhar:</p>
              <p className="font-mono text-lg gradient-text break-all">
                desabafo.app/r/{codigo}
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={() => router.push(`/r/${codigo}`)}
              className="w-full pulse-glow"
              size="lg"
            >
              Ver respostas agora
            </Button>
            <Button 
              onClick={handleNovoDesabafo}
              variant="secondary"
              className="w-full"
              size="lg"
            >
              Fazer novo desabafo
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 lg:py-8">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-end">
        {/* Hero Section */}
        <div className="text-center lg:text-left fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-2xl floating-animation">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 drop-shadow-lg">
            Desabafe de forma anônima
          </h1>
          <p className="text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed mb-6 lg:mb-8">
            Compartilhe o que está sentindo sem se identificar. 
            Nossa comunidade está aqui para te acolher.
          </p>
          
          {/* Call to Action */}
          <div className="glass-card bg-gradient-to-r from-white/80 to-white/60 rounded-2xl p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Quer ajudar outras pessoas?
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Seja parte da nossa comunidade acolhedora
            </p>
            <Button
              onClick={() => router.push('/responder')}
              variant="secondary"
              size="md"
              className="w-full"
            >
              Ver desabafos para responder
            </Button>
          </div>
        </div>

        {/* Form Section */}
        <div className="slide-up">
          <Card variant="accent">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  O que você está sentindo hoje?
                </label>
                <Textarea
                  value={texto}
                  onChange={setTexto}
                  placeholder="Conte-nos o que está passando pela sua cabeça... Sinta-se à vontade para compartilhar seus pensamentos, medos, alegrias ou qualquer coisa que queira desabafar."
                  rows={6}
                />
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200/30">
                <Checkbox
                  checked={querResposta}
                  onChange={setQuerResposta}
                  label="Quero receber uma resposta da comunidade"
                />
                <p className="text-sm text-gray-600 mt-2 ml-7">
                  Marque esta opção se deseja receber mensagens de apoio de outras pessoas
                </p>
              </div>

              <Button
                type="submit"
                disabled={!texto.trim() || isSubmitting}
                className="w-full heartbeat"
                size="lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Enviando...</span>
                  </div>
                ) : (
                  'Enviar meu desabafo'
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
