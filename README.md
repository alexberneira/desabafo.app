# Desabafo.app

Um sistema web moderno para desabafos anônimos e respostas acolhedoras. Permite que qualquer pessoa poste um desabafo anônimo e visualize respostas empáticas da comunidade.

## 🎯 Objetivo

Criar um espaço seguro onde pessoas possam compartilhar seus sentimentos de forma anônima e receber apoio da comunidade através de respostas empáticas.

## ✨ Funcionalidades

### Página Inicial ("/")
- Formulário para enviar desabafos anônimos
- Campo de texto com placeholder acolhedor
- Checkbox para optar por receber respostas
- Geração de código único para acompanhar respostas
- Interface limpa e acolhedora

### Página de Respostas ("/responder")
- Lista de desabafos que precisam de resposta
- Campo para escrever mensagens de apoio
- Simulação de envio com feedback visual
- Dados simulados para demonstração

### Página de Visualização ("/r/[id]")
- Exibição do desabafo original
- Lista de respostas da comunidade
- Link para compartilhamento
- Estado para desabafos sem respostas

## 🛠️ Tecnologias

- **Next.js 14** com App Router
- **React 18** com TypeScript
- **TailwindCSS** para estilização
- **Componentes reutilizáveis** e organizados
- **Dados simulados** (pronto para integração futura)

## 🚀 Como executar

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd desabafoapp
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── page.tsx           # Página inicial
│   ├── responder/         # Página de respostas
│   ├── r/[id]/           # Página dinâmica de visualização
│   ├── layout.tsx        # Layout principal
│   └── globals.css       # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Checkbox.tsx
│   └── Textarea.tsx
├── types/                # Definições TypeScript
│   └── index.ts
├── utils/                # Utilitários
│   └── index.ts
└── data/                 # Dados simulados
    └── mockData.ts
```

## 🎨 Design e UX

- **Interface clean** e acolhedora
- **Tema claro** com tons suaves
- **Responsivo** para todos os dispositivos
- **Feedback visual** em todas as ações
- **Acessibilidade** considerada

## 🔮 Expansão Futura

O projeto está estruturado para facilitar futuras integrações:

- **Supabase** para banco de dados
- **Autenticação** opcional com avatares
- **IA** para respostas automáticas
- **Notificações** e painel pessoal
- **Moderação** de conteúdo

## 🚀 Deploy

O projeto está configurado para deploy na **Vercel**:

1. Conecte seu repositório à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

## 📝 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de submeter um pull request.

---

**Lembre-se**: Este site não substitui apoio profissional. Use com responsabilidade.
