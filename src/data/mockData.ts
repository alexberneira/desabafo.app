import { Desabafo } from '@/types';

export const desabafosMock: Desabafo[] = [
  {
    id: 'abc123',
    texto: 'Hoje foi um dia muito difícil no trabalho. Me sinto sobrecarregado e sem reconhecimento. Às vezes penso se estou no lugar certo...',
    querResposta: true,
    dataCriacao: '2024-01-15T10:30:00Z',
    respostas: [
      {
        id: 'resp1',
        texto: 'Entendo como você se sente. Trabalhar sem reconhecimento é realmente desgastante. Lembre-se que seu valor não é definido pelo que os outros pensam. Você está fazendo o seu melhor e isso já é muito importante. 💪',
        dataCriacao: '2024-01-15T11:15:00Z'
      },
      {
        id: 'resp2',
        texto: 'Já passei por isso também. É normal se questionar, mas não desista de você mesmo. Talvez seja hora de conversar com seu chefe sobre suas responsabilidades ou considerar outras oportunidades. Você merece ser valorizado!',
        dataCriacao: '2024-01-15T14:20:00Z'
      }
    ]
  },
  {
    id: 'def456',
    texto: 'Terminei um relacionamento há algumas semanas e ainda estou me sentindo perdido. Não sei como seguir em frente...',
    querResposta: true,
    dataCriacao: '2024-01-14T16:45:00Z',
    respostas: [
      {
        id: 'resp3',
        texto: 'É completamente normal se sentir assim após um término. Dê tempo ao tempo e seja gentil com você mesmo. Cada dia é um passo em direção à cura. Você vai superar isso, mesmo que não pareça agora. ❤️',
        dataCriacao: '2024-01-14T18:30:00Z'
      }
    ]
  },
  {
    id: 'ghi789',
    texto: 'Estou me sentindo muito sozinho ultimamente. Todos os meus amigos estão ocupados e eu não tenho com quem conversar sobre o que estou passando.',
    querResposta: false,
    dataCriacao: '2024-01-13T20:15:00Z',
    respostas: []
  },
  {
    id: 'jkl012',
    texto: 'Tenho uma prova importante amanhã e estou muito ansioso. Não consigo dormir direito e estou com medo de não conseguir me concentrar.',
    querResposta: true,
    dataCriacao: '2024-01-12T22:00:00Z',
    respostas: [
      {
        id: 'resp4',
        texto: 'A ansiedade antes de provas é super comum! Tente fazer alguns exercícios de respiração e lembre-se que você se preparou para isso. Confie no seu conhecimento. Boa sorte! 🌟',
        dataCriacao: '2024-01-12T23:30:00Z'
      },
      {
        id: 'resp5',
        texto: 'Já passei por isso muitas vezes. O importante é tentar relaxar e confiar no que você estudou. Amanhã você vai se sair bem!',
        dataCriacao: '2024-01-13T00:15:00Z'
      }
    ]
  }
]; 