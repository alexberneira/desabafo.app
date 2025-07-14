'use client';
import { useState } from 'react';
import { DatabaseService } from '@/lib/database';

export default function ProfissionalPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whats, setWhats] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    if (!nome.trim() || !email.trim() || !whats.trim()) {
      setErro('Preencha todos os campos obrigatórios.');
      return;
    }
    setLoading(true);
    try {
      await DatabaseService.cadastrarProfissional({ nome, email, whats });
      setEnviado(true);
    } catch {
      setErro('Erro ao cadastrar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (enviado) {
    return (
      <div className="max-w-xl mx-auto px-4 py-12">
        <div className="bg-white/10 rounded-xl p-8 text-center border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Cadastro enviado!</h2>
          <p className="text-white/90 text-lg mb-6">Recebemos seus dados. Em breve entraremos em contato para validar seu cadastro como profissional de saúde.</p>
          <a 
            href="/" 
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Voltar ao Início</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="bg-white/10 rounded-xl p-8 border border-white/20">
        <h1 className="text-3xl font-bold text-white mb-4">Cadastro de Profissional de Saúde</h1>
        <p className="text-white/80 mb-6">Se você é psicólogo(a), terapeuta ou outro profissional de saúde mental, cadastre-se para ajudar pessoas na plataforma. Seu perfil será validado e você poderá ser identificado como profissional ao responder desabafos.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white font-semibold mb-2">Nome completo *</label>
            <input type="text" className="w-full rounded px-3 py-2 bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400" value={nome} onChange={e => setNome(e.target.value)} required />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">E-mail *</label>
            <input type="email" className="w-full rounded px-3 py-2 bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">WhatsApp *</label>
            <input type="text" className="w-full rounded px-3 py-2 bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400" value={whats} onChange={e => setWhats(e.target.value)} required placeholder="(99) 99999-9999" />
          </div>
          {erro && <p className="text-red-400 text-sm">{erro}</p>}
          <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
            {loading ? 'Enviando...' : 'Cadastrar'}
          </button>
        </form>
      </div>
    </div>
  );
} 