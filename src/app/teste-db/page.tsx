'use client';

import { useState } from 'react';
import { DatabaseService } from '@/lib/database';
import { Desabafo, Resposta } from '@/types/database';

export default function TesteDBPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [desabafos, setDesabafos] = useState<Desabafo[]>([]);
  const [respostas, setRespostas] = useState<Resposta[]>([]);
  const [codigoTeste, setCodigoTeste] = useState('');

  const testCreateDesabafo = async () => {
    setLoading(true);
    setMessage('');
    
    try {
      const texto = `Este é um desabafo de teste ${Date.now()} para verificar a inserção no banco de dados.`;
      const querResposta = true;
      
      const resultado = await DatabaseService.criarDesabafo(texto, querResposta);
      setMessage(`✅ Desabafo criado com sucesso! ID: ${resultado.id}, Código: ${resultado.codigo}`);
      await loadDesabafos();
    } catch (error) {
      setMessage(`❌ Erro ao criar desabafo: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const testCreateResposta = async () => {
    if (desabafos.length === 0) {
      setMessage('❌ Nenhum desabafo disponível para responder');
      return;
    }

    setLoading(true);
    setMessage('');
    
    try {
      const desabafoId = desabafos[0].id;
      const texto = 'Esta é uma resposta de teste para verificar a inserção no banco de dados.';
      
      const resultado = await DatabaseService.criarResposta(desabafoId, texto);
      setMessage(`✅ Resposta criada com sucesso! ID: ${resultado.id}`);
      await loadRespostas(desabafoId);
    } catch (error) {
      setMessage(`❌ Erro ao criar resposta: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const loadDesabafos = async () => {
    setLoading(true);
    try {
      const resultado = await DatabaseService.buscarDesabafosParaResponder();
      setDesabafos(resultado);
      setMessage(`📋 Carregados ${resultado.length} desabafos`);
    } catch (error) {
      setMessage(`❌ Erro ao carregar desabafos: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const loadRespostas = async (desabafoId?: string) => {
    if (!desabafoId && desabafos.length === 0) {
      setMessage('❌ Nenhum desabafo disponível para carregar respostas');
      return;
    }

    setLoading(true);
    try {
      const id = desabafoId || desabafos[0].id;
      const resultado = await DatabaseService.buscarRespostasPorDesabafo(id);
      setRespostas(resultado);
      setMessage(`📋 Carregadas ${resultado.length} respostas para o desabafo ${id}`);
    } catch (error) {
      setMessage(`❌ Erro ao carregar respostas: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const testGetDesabafoWithRespostas = async () => {
    if (desabafos.length === 0) {
      setMessage('❌ Nenhum desabafo disponível para testar');
      return;
    }

    setLoading(true);
    setMessage('');
    
    try {
      const desabafoId = desabafos[0].id;
      const desabafo = await DatabaseService.buscarDesabafoPorCodigo(desabafos[0].codigo);
      const respostas = await DatabaseService.buscarRespostasPorDesabafo(desabafoId);
      
      if (desabafo) {
        setMessage(`✅ Desabafo carregado com ${respostas.length} respostas`);
      } else {
        setMessage('❌ Desabafo não encontrado');
      }
    } catch (error) {
      setMessage(`❌ Erro ao carregar desabafo com respostas: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const testBuscarPorCodigo = async () => {
    if (!codigoTeste.trim()) {
      setMessage('❌ Digite um código para testar');
      return;
    }

    setLoading(true);
    setMessage('');
    
    try {
      const desabafo = await DatabaseService.buscarDesabafoPorCodigo(codigoTeste.trim());
      
      if (desabafo) {
        setMessage(`✅ Desabafo encontrado! ID: ${desabafo.id}, Texto: ${desabafo.texto.substring(0, 50)}...`);
        const respostas = await DatabaseService.buscarRespostasPorDesabafo(desabafo.id);
        setMessage(prev => `${prev} Respostas: ${respostas.length}`);
      } else {
        setMessage('❌ Desabafo não encontrado com este código');
      }
    } catch (error) {
      setMessage(`❌ Erro ao buscar por código: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const clearMessage = () => {
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            🧪 Teste do Banco de Dados
          </h1>
          
          {/* Mensagens */}
          {message && (
            <div className="mb-6 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-white">{message}</p>
              <button 
                onClick={clearMessage}
                className="mt-2 text-sm text-blue-300 hover:text-blue-200"
              >
                Limpar mensagem
              </button>
            </div>
          )}

          {/* Botões de Teste */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <button
              onClick={testCreateDesabafo}
              disabled={loading}
              className="p-4 rounded-lg bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-medium transition-colors"
            >
              ➕ Criar Desabafo
            </button>
            
            <button
              onClick={testCreateResposta}
              disabled={loading}
              className="p-4 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-medium transition-colors"
            >
              💬 Criar Resposta
            </button>
            
            <button
              onClick={loadDesabafos}
              disabled={loading}
              className="p-4 rounded-lg bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white font-medium transition-colors"
            >
              📋 Carregar Desabafos
            </button>
            
            <button
              onClick={() => loadRespostas()}
              disabled={loading}
              className="p-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 text-white font-medium transition-colors"
            >
              📝 Carregar Respostas
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <button
              onClick={testGetDesabafoWithRespostas}
              disabled={loading}
              className="p-4 rounded-lg bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 text-white font-medium transition-colors"
            >
              🔗 Testar Desabafo + Respostas
            </button>
            
            <div className="flex space-x-2">
              <input
                type="text"
                value={codigoTeste}
                onChange={(e) => setCodigoTeste(e.target.value)}
                placeholder="Digite um código..."
                className="flex-1 p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={testBuscarPorCodigo}
                disabled={loading}
                className="px-6 py-4 rounded-lg bg-teal-600 hover:bg-teal-700 disabled:bg-gray-600 text-white font-medium transition-colors"
              >
                🔍 Buscar
              </button>
            </div>
          </div>

          {/* Dados Carregados */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Lista de Desabafos */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                📋 Desabafos ({desabafos.length})
              </h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {desabafos.map((desabafo) => (
                  <div key={desabafo.id} className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <h3 className="font-semibold text-white text-sm">Código: {desabafo.codigo}</h3>
                    <p className="text-gray-300 text-xs mt-1">{desabafo.texto.substring(0, 100)}...</p>
                    <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
                      <span>ID: {desabafo.id}</span>
                      <span>{new Date(desabafo.dataCriacao).toLocaleString('pt-BR')}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Quer resposta: {desabafo.querResposta ? 'Sim' : 'Não'}
                    </div>
                  </div>
                ))}
                {desabafos.length === 0 && (
                  <p className="text-gray-400 text-center py-4">Nenhum desabafo carregado</p>
                )}
              </div>
            </div>

            {/* Lista de Respostas */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                📝 Respostas ({respostas.length})
              </h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {respostas.map((resposta) => (
                  <div key={resposta.id} className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-gray-300 text-xs">{resposta.texto.substring(0, 100)}...</p>
                    <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
                      <span>ID: {resposta.id}</span>
                      <span>{new Date(resposta.dataCriacao).toLocaleString('pt-BR')}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Desabafo ID: {resposta.desabafoId}
                    </div>
                  </div>
                ))}
                {respostas.length === 0 && (
                  <p className="text-gray-400 text-center py-4">Nenhuma resposta carregada</p>
                )}
              </div>
            </div>
          </div>

          {/* Status de Carregamento */}
          {loading && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 flex items-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <span className="text-gray-700">Processando...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 