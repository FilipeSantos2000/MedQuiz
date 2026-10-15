// ===== HISTÓRICO & ESTATÍSTICAS =====
const HistoryPage = {
    async render() {
        const attempts = await Store.loadAttempts();
        if (!attempts.length) {
            return `<section class="card center"><p>Ainda não há testes realizados.</p>
                <button class="btn btn-primary" onclick="App.navigate('quiz')">Fazer um teste</button></section>`;
        }

        const agg = QuizEngine.aggregate(attempts);
        const globalPct = Utils.pct(agg.correct, agg.total);

        const topicRows = Object.keys(TOPICS)
            .filter(k => agg.byTopic[k])
            .map(k => {
                const v = agg.byTopic[k];
                const p = Utils.pct(v.correct, v.total);
                return `
                    <div class="topic-row">
                        <span>${TOPICS[k].icon} ${TOPICS[k].label}</span>
                        <div class="bar"><div class="bar-fill ${Utils.scoreClass(p)}" style="width:${p}%"></div></div>
                        <span class="muted">${v.correct}/${v.total} (${p}%)</span>
                    </div>`;
            }).join('');

        const rows = attempts.map(a => {
            const p = Utils.pct(a.correct_answers, a.total_questions);
            const topics = (a.topics && a.topics.length)
                ? a.topics.map(t => TOPICS[t]?.label || t).join(', ')
                : 'Aleatório';
            const wrong = (a.details || []).filter(d => !d.correct).length;
            return `
                <tr>
                    <td>${Utils.formatDate(a.created_at)}</td>
                    <td><span class="pill ${Utils.scoreClass(p)}">${p}%</span> ${a.correct_answers}/${a.total_questions}</td>
                    <td class="hide-sm">${Utils.escape(topics)}</td>
                    <td class="hide-sm">${Utils.formatDuration(a.duration_seconds)}</td>
                    <td class="row-actions">
                        ${wrong ? `<button class="btn btn-secondary btn-sm" onclick="HistoryPage.retry('${a.id}')">Repetir erradas</button>` : ''}
                        <button class="btn btn-danger btn-sm" onclick="HistoryPage.remove('${a.id}')" aria-label="Apagar teste">✕</button>
                    </td>
                </tr>`;
        }).join('');

        return `
            <section class="card">
                <h2>Estatísticas</h2>
                <div class="stats">
                    <div class="stat"><span class="stat-value">${attempts.length}</span><span class="muted">testes</span></div>
                    <div class="stat"><span class="stat-value">${agg.total}</span><span class="muted">respostas</span></div>
                    <div class="stat"><span class="stat-value ${Utils.scoreClass(globalPct)}">${globalPct}%</span><span class="muted">acerto global</span></div>
                </div>
                <h3>Acerto por tema</h3>
                ${topicRows}
            </section>
            <section class="card">
                <h2>Histórico</h2>
                <div class="table-wrap">
                    <table class="table">
                        <thead><tr><th>Data</th><th>Resultado</th><th class="hide-sm">Temas</th><th class="hide-sm">Tempo</th><th></th></tr></thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
            </section>
        `;
    },

    retry(id) {
        const a = Store.attempts.find(x => x.id === id);
        if (!a) return;
        QuizPage.retryWrong((a.details || []).filter(d => !d.correct).map(d => d.id));
    },

    async remove(id) {
        if (!confirm('Apagar este teste do histórico?')) return;
        try {
            await Store.deleteAttempt(id);
            App.navigate('history');
        } catch (err) {
            alert('Erro ao apagar: ' + err.message);
        }
    }
};
