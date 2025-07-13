export interface Desabafo {
  id: string;
  texto: string;
  querResposta: boolean;
  dataCriacao: string;
  respostas: Resposta[];
}

export interface Resposta {
  id: string;
  texto: string;
  dataCriacao: string;
}

export interface DesabafoFormData {
  texto: string;
  querResposta: boolean;
} 