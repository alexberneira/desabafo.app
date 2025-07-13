export default function ConfigurarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            ⚙️ Configuração do Supabase
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">📋 Passos para Configurar</h2>
            
            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">1. Criar Projeto no Supabase</h3>
                <ol className="text-gray-300 space-y-2 ml-4">
                  <li>• Acesse <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">supabase.com</a></li>
                  <li>• Faça login ou crie uma conta</li>
                  <li>• Clique em "New Project"</li>
                  <li>• Escolha um nome para o projeto (ex: "desabafo-app")</li>
                  <li>• Crie uma senha forte para o banco</li>
                  <li>• Escolha uma região próxima</li>
                  <li>• Clique em "Create new project"</li>
                </ol>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">2. Executar SQL Schema</h3>
                <ol className="text-gray-300 space-y-2 ml-4">
                  <li>• No dashboard do Supabase, vá para "SQL Editor"</li>
                  <li>• Copie o conteúdo do arquivo <code className="bg-gray-800 px-2 py-1 rounded">database-schema.sql</code></li>
                  <li>• Cole no editor SQL e execute</li>
                  <li>• Isso criará as tabelas e políticas necessárias</li>
                </ol>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">3. Obter Credenciais</h3>
                <ol className="text-gray-300 space-y-2 ml-4">
                  <li>• No dashboard, vá para "Settings" → "API"</li>
                  <li>• Copie a "Project URL"</li>
                  <li>• Copie a "anon public" key</li>
                </ol>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">4. Configurar Variáveis de Ambiente</h3>
                <p className="text-gray-300 mb-3">Crie um arquivo <code className="bg-gray-800 px-2 py-1 rounded">.env.local</code> na raiz do projeto:</p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400">NEXT_PUBLIC_SUPABASE_URL=sua_url_do_projeto</div>
                  <div className="text-green-400">NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima</div>
                </div>
                <p className="text-gray-400 text-sm mt-2">Exemplo:</p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400">NEXT_PUBLIC_SUPABASE_URL=https://abc123.supabase.co</div>
                  <div className="text-green-400">NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">5. Reiniciar o Servidor</h3>
                <ol className="text-gray-300 space-y-2 ml-4">
                  <li>• Pare o servidor (Ctrl+C)</li>
                  <li>• Execute novamente: <code className="bg-gray-800 px-2 py-1 rounded">npm run dev</code></li>
                  <li>• Acesse a página de teste: <a href="/teste-db" className="text-blue-400 hover:text-blue-300">/teste-db</a></li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-yellow-600/20 backdrop-blur-sm rounded-lg p-6 border border-yellow-500/30">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">⚠️ Importante</h3>
            <ul className="text-yellow-200 space-y-1">
              <li>• Nunca commite o arquivo .env.local no git</li>
              <li>• As variáveis NEXT_PUBLIC_ são visíveis no cliente</li>
              <li>• Use apenas a chave anônima (não a service_role)</li>
              <li>• O arquivo database-schema.sql já está pronto para usar</li>
            </ul>
          </div>

          <div className="mt-6 text-center">
            <a 
              href="/teste-db" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              🧪 Ir para Página de Teste
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 