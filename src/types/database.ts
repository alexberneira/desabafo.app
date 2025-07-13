export interface Desabafo {
  id: string
  texto: string
  querResposta: boolean
  dataCriacao: string
  codigo: string
}

export interface Resposta {
  id: string
  desabafoId: string
  texto: string
  dataCriacao: string
}

export interface Database {
  desabafos: Desabafo[]
  respostas: Resposta[]
} 