'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface Profissional {
  id: string;
  nome: string;
  email: string;
  whatsapp: string;
  status: string;
  data_cadastro: string;
}

const SENHA = process.env.NEXT_PUBLIC_PROFISSIONAIS_PASS || 'b3rn3ir@';

export default function ProfissionaisPage() {
  const [autenticado, setAutenticado] = useState(false);
  const [senha, setSenha] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const autenticar = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha === SENHA) {
      setAutenticado(true);
      setErroSenha('');
    } else {
      setErroSenha('Senha incorreta!');
    }
  };

  useEffect(() => {
    if (!autenticado) return;
    setLoading(true);
    setErro('');
    supabase
      .from('profissionais')
      .select('*')
      .order('data_cadastro', { ascending: false })
      .then(({ data, error }) => {
        if (error) setErro('Erro ao buscar profissionais: ' + error.message);
        else setProfissionais(data || []);
        setLoading(false);
      });
  }, [autenticado]);

  if (!autenticado) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <form onSubmit={autenticar} className="bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg max-w-xs w-full">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Acesso restrito</h1>
          <input
            type="password"
            className="w-full p-3 rounded bg-white/20 text-white border border-white/30 mb-4"
            placeholder="Digite a senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />
          {erroSenha && <p className="text-red-400 text-sm mb-2">{erroSenha}</p>}
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-white mb-6">Profissionais cadastrados</h1>
      {loading ? (
        <p className="text-white">Carregando...</p>
      ) : erro ? (
        <p className="text-red-400">{erro}</p>
      ) : profissionais.length === 0 ? (
        <p className="text-white">Nenhum profissional cadastrado ainda.</p>
      ) : (
        <div className="space-y-4">
          {profissionais.map((p) => (
            <div key={p.id} className="bg-white/10 rounded-lg p-4 border border-white/20">
              <div className="text-white font-semibold">{p.nome}</div>
              <div className="text-white/80 text-sm">{p.email}</div>
              <div className="text-white/80 text-sm">{p.whatsapp}</div>
              <div className="text-white/60 text-xs mt-1">Status: {p.status}</div>
              <div className="text-white/40 text-xs">Cadastrado em: {new Date(p.data_cadastro).toLocaleString('pt-BR')}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 