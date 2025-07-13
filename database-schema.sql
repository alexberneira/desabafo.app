-- Tabela de desabafos
CREATE TABLE desabafos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  texto TEXT NOT NULL,
  quer_resposta BOOLEAN NOT NULL DEFAULT false,
  data_criacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  codigo VARCHAR(10) UNIQUE NOT NULL
);

-- Tabela de respostas
CREATE TABLE respostas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  desabafo_id UUID NOT NULL REFERENCES desabafos(id) ON DELETE CASCADE,
  texto TEXT NOT NULL,
  data_criacao TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para melhor performance
CREATE INDEX idx_desabafos_codigo ON desabafos(codigo);
CREATE INDEX idx_desabafos_quer_resposta ON desabafos(quer_resposta);
CREATE INDEX idx_desabafos_data_criacao ON desabafos(data_criacao);
CREATE INDEX idx_respostas_desabafo_id ON respostas(desabafo_id);
CREATE INDEX idx_respostas_data_criacao ON respostas(data_criacao);

-- Políticas de segurança RLS (Row Level Security)
ALTER TABLE desabafos ENABLE ROW LEVEL SECURITY;
ALTER TABLE respostas ENABLE ROW LEVEL SECURITY;

-- Políticas para desabafos (leitura pública, escrita pública)
CREATE POLICY "Desabafos são visíveis publicamente" ON desabafos
  FOR SELECT USING (true);

CREATE POLICY "Qualquer um pode criar desabafos" ON desabafos
  FOR INSERT WITH CHECK (true);

-- Políticas para respostas (leitura pública, escrita pública)
CREATE POLICY "Respostas são visíveis publicamente" ON respostas
  FOR SELECT USING (true);

CREATE POLICY "Qualquer um pode criar respostas" ON respostas
  FOR INSERT WITH CHECK (true); 