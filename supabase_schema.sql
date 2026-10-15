-- ===== MedQuiz Database Schema =====
-- Executar no SQL Editor do Supabase (mesmo projeto das outras apps).
-- Tabelas com prefixo mq_ para não colidir com CarMaintain, FitTrack e HealthScope.

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ===== TENTATIVAS (testes realizados) =====
CREATE TABLE IF NOT EXISTS mq_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    total_questions INT NOT NULL CHECK (total_questions > 0),
    correct_answers INT NOT NULL CHECK (correct_answers >= 0),
    topics TEXT[] DEFAULT '{}',          -- vazio = aleatório (todos os temas)
    study_mode BOOLEAN DEFAULT TRUE,
    duration_seconds INT DEFAULT 0,
    details JSONB NOT NULL DEFAULT '[]', -- [{id, topic, chosen, answer, correct}]
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS mq_attempts_user_idx ON mq_attempts (user_id, created_at DESC);

ALTER TABLE mq_attempts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "mq_attempts_select_own" ON mq_attempts;
DROP POLICY IF EXISTS "mq_attempts_insert_own" ON mq_attempts;
DROP POLICY IF EXISTS "mq_attempts_delete_own" ON mq_attempts;

CREATE POLICY "mq_attempts_select_own"
    ON mq_attempts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "mq_attempts_insert_own"
    ON mq_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "mq_attempts_delete_own"
    ON mq_attempts FOR DELETE USING (auth.uid() = user_id);
