'use client';

import { useState, useEffect } from 'react';
import Modal from './Modal';
import { DatabaseService } from '@/lib/database';
import { supabase } from '@/lib/supabase';
import { formatarData } from '@/utils';
import { Desabafo, Resposta } from '@/types/database';

interface DesabafoModalProps {
  isOpen: boolean;
  onClose: () => void;
  desabafoId: string;
}

export default function DesabafoModal({ isOpen, onClose, desabafoId }: DesabafoModalProps) {
  const [desabafo, setDesabafo] = useState<Desabafo | null>(null);
  const [respostas, setRespostas] = useState<Resposta[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && desabafoId) {
      carregarDados();
    }
  }, [isOpen, desabafoId]);

  const carregarDados = async () => {
    setLoading(true);
    try {
      // Buscar desabafo por ID (usando o ID diretamente)
      const { data, error } = await supabase
        .from('desabafos')
        .select('*')
        .eq('id', desabafoId)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          setDesabafo(null);
          return;
        }
        throw new Error(`Erro ao buscar desabafo: ${error.message}`);
      }

      const desabafoData = {
        id: data.id,
        texto: data.texto,
        querResposta: data.quer_resposta,
        dataCriacao: data.data_criacao,
        codigo: data.codigo
      };

      setDesabafo(desabafoData);
      // Buscar respostas
      const respostasData = await DatabaseService.buscarRespostasPorDesabafo(desabafoData.id);
      setRespostas(respostasData);
    } catch (error) {
      console.error('Erro ao carregar dados do modal:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      title="Detalhes do desabafo"
    >
      <div className="p-0">
        {loading ? (
          <div className="p-8 text-center bg-gradient-to-br from-blue-50 to-white">
            <div className="w-12 h-12 border-3 border-blue-600 border-t-transparent rounded-full mx-auto mb-6 animate-spin shadow-lg"></div>
            <p className="text-gray-700 font-medium">Carregando detalhes...</p>
          </div>
        ) : desabafo ? (
          <div className="space-y-0">
            {/* Desabafo */}
            <div className="p-6 border-b border-gray-50 bg-gradient-to-br from-white to-gray-50/30">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="font-bold text-gray-900 text-lg">Anônimo</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500 font-medium">{formatarData(desabafo.dataCriacao)}</span>
                  </div>
                  <p className="text-gray-800 leading-relaxed mb-4 text-lg">
                    &ldquo;{desabafo.texto}&rdquo;
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center space-x-1 text-blue-600 font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>{respostas.length} resposta{respostas.length !== 1 ? 's' : ''}</span>
                    </span>
                    {desabafo.querResposta && (
                      <span className="flex items-center space-x-1 text-purple-600 font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>Quer resposta</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

                        {/* Respostas */}
            {respostas.length > 0 ? (
              <div className="divide-y divide-gray-50">
                {respostas.map((resposta) => (
                  <div key={resposta.id} className="p-6 bg-white">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="font-semibold text-gray-900">
                            Membro da Comunidade
                          </span>
                          <span className="text-gray-300">•</span>
                          <span className="text-sm text-gray-500 font-medium">{formatarData(resposta.dataCriacao)}</span>
                        </div>
                        <p className="text-gray-800 leading-relaxed text-base">
                          &ldquo;{resposta.texto}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-gradient-to-br from-gray-50 to-white">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Nenhuma resposta ainda</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {desabafo.querResposta 
                    ? 'Seja o primeiro a responder com palavras de apoio e empatia.'
                    : 'Este desabafo não solicitou respostas da comunidade.'
                  }
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="p-8 text-center bg-gradient-to-br from-red-50 to-white">
            <div className="w-20 h-20 bg-gradient-to-br from-red-200 to-red-300 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Desabafo não encontrado</h3>
            <p className="text-sm text-gray-500">Este desabafo pode ter sido removido ou não existe.</p>
          </div>
        )}
      </div>
    </Modal>
  );
} 