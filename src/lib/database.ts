import { supabase } from './supabase'
import { Desabafo, Resposta } from '@/types/database'
import { gerarCodigoCurto } from '@/utils'

export class DatabaseService {
  // Desabafos
  static async criarDesabafo(texto: string, querResposta: boolean): Promise<Desabafo> {
    const codigo = gerarCodigoCurto()
    const desabafo = {
      texto,
      quer_resposta: querResposta,
      codigo
    }

    const { data, error } = await supabase
      .from('desabafos')
      .insert(desabafo)
      .select()
      .single()

    if (error) {
      throw new Error(`Erro ao criar desabafo: ${error.message}`)
    }

    return {
      id: data.id,
      texto: data.texto,
      querResposta: data.quer_resposta,
      dataCriacao: data.data_criacao,
      codigo: data.codigo
    }
  }

  static async buscarDesabafoPorCodigo(codigo: string): Promise<Desabafo | null> {
    const { data, error } = await supabase
      .from('desabafos')
      .select('*')
      .eq('codigo', codigo)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return null // Não encontrado
      }
      throw new Error(`Erro ao buscar desabafo: ${error.message}`)
    }

    return {
      id: data.id,
      texto: data.texto,
      querResposta: data.quer_resposta,
      dataCriacao: data.data_criacao,
      codigo: data.codigo
    }
  }

  static async buscarDesabafosParaResponder(): Promise<Desabafo[]> {
    const { data, error } = await supabase
      .from('desabafos')
      .select('*')
      .eq('quer_resposta', true)
      .order('data_criacao', { ascending: false })

    if (error) {
      throw new Error(`Erro ao buscar desabafos: ${error.message}`)
    }

    return (data || []).map(item => ({
      id: item.id,
      texto: item.texto,
      querResposta: item.quer_resposta,
      dataCriacao: item.data_criacao,
      codigo: item.codigo
    }))
  }

  // Respostas
  static async criarResposta(desabafoId: string, texto: string): Promise<Resposta> {
    const resposta = {
      desabafo_id: desabafoId,
      texto
    }

    const { data, error } = await supabase
      .from('respostas')
      .insert(resposta)
      .select()
      .single()

    if (error) {
      throw new Error(`Erro ao criar resposta: ${error.message}`)
    }

    return {
      id: data.id,
      desabafoId: data.desabafo_id,
      texto: data.texto,
      dataCriacao: data.data_criacao
    }
  }

  static async buscarRespostasPorDesabafo(desabafoId: string): Promise<Resposta[]> {
    const { data, error } = await supabase
      .from('respostas')
      .select('*')
      .eq('desabafo_id', desabafoId)
      .order('data_criacao', { ascending: true })

    if (error) {
      throw new Error(`Erro ao buscar respostas: ${error.message}`)
    }

    return (data || []).map(item => ({
      id: item.id,
      desabafoId: item.desabafo_id,
      texto: item.texto,
      dataCriacao: item.data_criacao
    }))
  }

  static async contarRespostasPorDesabafo(desabafoId: string): Promise<number> {
    const { count, error } = await supabase
      .from('respostas')
      .select('*', { count: 'exact', head: true })
      .eq('desabafo_id', desabafoId)

    if (error) {
      throw new Error(`Erro ao contar respostas: ${error.message}`)
    }

    return count || 0
  }

  static async cadastrarProfissional({ nome, email, whats }: { nome: string, email: string, whats: string }) {
    const { error } = await supabase
      .from('profissionais')
      .insert({ nome, email, whatsapp: whats, status: 'pendente' })
    if (error) {
      throw new Error(`Erro ao cadastrar profissional: ${error.message}`)
    }
  }
} 