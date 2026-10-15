// ===== QUIZ ENGINE (lógica pura, sem DOM) =====
const QuizEngine = {
    // Perguntas disponíveis para os temas escolhidos (null/[] = todos)
    pool(questions, topics) {
        if (!topics || topics.length === 0) return questions;
        return questions.filter(q => topics.includes(q.topic));
    },

    // Seleciona `count` perguntas aleatórias do pool
    build(questions, topics, count, shuffle) {
        const pool = this.pool(questions, topics);
        const n = Math.max(1, Math.min(count, pool.length));
        return shuffle(pool).slice(0, n);
    },

    // answers: { [questionId]: 'A'..'E' }
    score(questions, answers) {
        const byTopic = {};
        let correct = 0;
        const details = questions.map(q => {
            const chosen = answers[q.id] || null;
            const ok = chosen === q.answer;
            if (ok) correct++;
            byTopic[q.topic] = byTopic[q.topic] || { correct: 0, total: 0 };
            byTopic[q.topic].total++;
            if (ok) byTopic[q.topic].correct++;
            return { id: q.id, topic: q.topic, chosen, answer: q.answer, correct: ok };
        });
        return { correct, total: questions.length, byTopic, details };
    },

    // Estatística agregada por tema a partir de várias tentativas
    aggregate(attempts) {
        const byTopic = {};
        let correct = 0, total = 0;
        for (const a of attempts) {
            for (const d of (a.details || [])) {
                byTopic[d.topic] = byTopic[d.topic] || { correct: 0, total: 0 };
                byTopic[d.topic].total++;
                total++;
                if (d.correct) { byTopic[d.topic].correct++; correct++; }
            }
        }
        return { correct, total, byTopic };
    }
};

if (typeof module !== 'undefined') module.exports = { QuizEngine };
