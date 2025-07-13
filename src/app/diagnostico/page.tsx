'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function DiagnosticoPage() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const addResult = (message: string) => {
    setResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const testConnection = async () => {
    setLoading(true);
    setResults([]);
    
    try {
      addResult('🔍 Iniciando diagnóstico...');
      
      // Teste 1: Verificar variáveis de ambiente
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      
      if (!url || !key) {
        addResult('❌ Variáveis de ambiente não configuradas');
        return;
      }
      
      addResult(`✅ URL configurada: ${url.substring(0, 30)}...`);
      addResult(`✅ Chave configurada: ${key.substring(0, 20)}...`);
      
      // Teste 2: Verificar conectividade básica
      addResult('🌐 Testando conectividade...');
      
      const { data, error } = await supabase
        .from('desabafos')
        .select('count')
        .limit(1);
      
      if (error) {
        addResult(`❌ Erro de conectividade: ${error.message}`);
        
        if (error.message.includes('fetch')) {
          addResult('💡 Possíveis causas:');
          addResult('   • URL do Supabase incorreta');
          addResult('   • Chave anônima inválida');
          addResult('   • Problema de rede/CORS');
          addResult('   • Projeto Supabase não existe');
        }
      } else {
        addResult('✅ Conectividade OK!');
      }
      
      // Teste 3: Verificar se as tabelas existem
      addResult('📋 Verificando tabelas...');
      
      const { data: desabafos, error: desabafosError } = await supabase
        .from('desabafos')
        .select('*')
        .limit(1);
      
      if (desabafosError) {
        addResult(`❌ Tabela 'desabafos' não encontrada: ${desabafosError.message}`);
      } else {
        addResult('✅ Tabela "desabafos" encontrada');
      }
      
      const { data: respostas, error: respostasError } = await supabase
        .from('respostas')
        .select('*')
        .limit(1);
      
      if (respostasError) {
        addResult(`❌ Tabela 'respostas' não encontrada: ${respostasError.message}`);
      } else {
        addResult('✅ Tabela "respostas" encontrada');
      }
      
      // Teste 4: Verificar políticas RLS
      addResult('🔒 Verificando políticas de segurança...');
      
      try {
        const { data: testInsert, error: insertError } = await supabase
          .from('desabafos')
          .insert({
            texto: 'Teste de diagnóstico',
            quer_resposta: false,
            codigo: 'TESTE'
          })
          .select();
        
        if (insertError) {
          addResult(`❌ Erro ao inserir teste: ${insertError.message}`);
        } else {
          addResult('✅ Inserção de teste OK');
          
          // Limpar o teste
          if (testInsert?.[0]?.id) {
            await supabase
              .from('desabafos')
              .delete()
              .eq('id', testInsert[0].id);
            addResult('🧹 Teste removido');
          }
        }
      } catch (e) {
        addResult(`❌ Erro no teste de inserção: ${e}`);
      }
      
    } catch (error) {
      addResult(`❌ Erro geral: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const clearResults = () => {
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            🔧 Diagnóstico do Supabase
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Status da Conexão</h2>
              <div className="flex space-x-2">
                <button
                  onClick={testConnection}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  {loading ? '🔍 Testando...' : '🔍 Executar Diagnóstico'}
                </button>
                <button
                  onClick={clearResults}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  🗑️ Limpar
                </button>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4 h-96 overflow-y-auto font-mono text-sm">
              {results.length === 0 ? (
                <p className="text-gray-400">Clique em "Executar Diagnóstico" para começar...</p>
              ) : (
                results.map((result, index) => (
                  <div key={index} className="text-gray-300 mb-1">
                    {result}
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bg-yellow-600/20 backdrop-blur-sm rounded-lg p-6 border border-yellow-500/30">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">🔍 Soluções Comuns</h3>
            <ul className="text-yellow-200 space-y-1">
              <li>• Verifique se o projeto Supabase existe e está ativo</li>
              <li>• Confirme se a URL e chave no .env.local estão corretas</li>
              <li>• Execute o SQL do arquivo database-schema.sql no Supabase</li>
              <li>• Verifique se as políticas RLS permitem inserção pública</li>
              <li>• Teste a conectividade de rede (firewall, proxy)</li>
            </ul>
          </div>

          <div className="mt-6 text-center space-x-4">
            <a 
              href="/configurar" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              ⚙️ Guia de Configuração
            </a>
            <a 
              href="/teste-db" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              🧪 Página de Teste
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 