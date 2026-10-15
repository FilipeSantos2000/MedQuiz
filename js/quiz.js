// ===== QUIZ UI =====
const QuizPage = {
    state: null,
    timer: null,

    // ---------- CONFIGURAÇÃO ----------
    render() {
        const counts = {};
        QUESTIONS.forEach(q => { counts[q.topic] = (counts[q.topic] || 0) + 1; });

        const topicChecks = Object.entries(TOPICS).map(([key, t]) => {
            const c = counts[key] || 0;
            return `
                <label class="topic-chip ${c === 0 ? 'disabled' : ''}">
                    <input type="checkbox" name="topic" value="${key}" ${c === 0 ? 'disabled' : 'checked'} onchange="QuizPage.updateMax()">
                    <span>${t.icon} ${t.label}</span>
                    <span class="topic-count">${c}</span>
                </label>`;
        }).join('');

        return `
            <section class="card">
                <h2>Novo teste</h2>
                <p class="muted">${QUESTIONS.length} perguntas disponíveis · ${Utils.escape(EXAM_PNA_2024_B)}</p>

                <fieldset class="field">
                    <legend class="form-label">Temas</legend>
                    <div class="radio-row">
                        <label><input type="radio" name="topicMode" value="random" checked onchange="QuizPage.toggleTopics()"> Aleatório (todos os temas)</label>
                        <label><input type="radio" name="topicMode" value="custom" onchange="QuizPage.toggleTopics()"> Escolher temas</label>
                    </div>
                    <div id="topicList" class="topic-grid" style="display:none">${topicChecks}</div>
                </fieldset>

                <div class="field">
                    <label class="form-label" for="qCount">Número de perguntas <span class="muted">(máx. <span id="qMax">${QUESTIONS.length}</span>)</span></label>
                    <div class="count-row">
                        <input type="number" id="qCount" class="form-input count-input" min="1" max="${QUESTIONS.length}" value="${Math.min(20, QUESTIONS.length)}">
                        <button type="button" class="btn btn-secondary btn-sm" onclick="QuizPage.setCount(10)">10</button>
                        <button type="button" class="btn btn-secondary btn-sm" onclick="QuizPage.setCount(20)">20</button>
                        <button type="button" class="btn btn-secondary btn-sm" onclick="QuizPage.setCount(40)">40</button>
                        <button type="button" class="btn btn-secondary btn-sm" onclick="QuizPage.setCount(9999)">Todas</button>
                    </div>
                </div>

                <div class="field">
                    <label class="checkbox-label">
                        <input type="checkbox" id="studyMode" checked>
                        Modo estudo (mostrar resposta certa logo após responder)
                    </label>
                </div>

                <div id="setupError" class="auth-error" role="alert"></div>
                <button class="btn btn-primary btn-full" onclick="QuizPage.start()">Começar teste</button>
            </section>
        `;
    },

    selectedTopics() {
        const mode = document.querySelector('input[name="topicMode"]:checked')?.value;
        if (mode !== 'custom') return [];
        return [...document.querySelectorAll('input[name="topic"]:checked')].map(i => i.value);
    },

    toggleTopics() {
        const custom = document.querySelector('input[name="topicMode"]:checked').value === 'custom';
        document.getElementById('topicList').style.display = custom ? 'grid' : 'none';
        this.updateMax();
    },

    updateMax() {
        const topics = this.selectedTopics();
        const mode = document.querySelector('input[name="topicMode"]:checked').value;
        const max = mode === 'custom' && topics.length === 0 ? 0 : QuizEngine.pool(QUESTIONS, topics).length;
        document.getElementById('qMax').textContent = max;
        const input = document.getElementById('qCount');
        input.max = Math.max(1, max);
        if (+input.value > max) input.value = Math.max(1, max);
    },

    setCount(n) {
        const input = document.getElementById('qCount');
        input.value = Math.min(n, +input.max);
    },

    start() {
        const errorEl = document.getElementById('setupError');
        const mode = document.querySelector('input[name="topicMode"]:checked').value;
        const topics = this.selectedTopics();
        if (mode === 'custom' && topics.length === 0) {
            errorEl.textContent = 'Escolha pelo menos um tema.';
            return;
        }
        const count = parseInt(document.getElementById('qCount').value, 10);
        if (!count || count < 1) {
            errorEl.textContent = 'Indique um número de perguntas válido.';
            return;
        }
        const questions = QuizEngine.build(QUESTIONS, topics, count, Utils.shuffle);
        this.begin(questions, topics, document.getElementById('studyMode').checked);
    },

    // Inicia um teste com uma lista de perguntas já definida
    begin(questions, topics, studyMode) {
        this.state = {
            questions,
            topics,
            studyMode,
            index: 0,
            answers: {},
            startedAt: Date.now(),
            finished: false
        };
        this.startTimer();
        this.renderQuestion();
    },

    // ---------- PERGUNTA ----------
    startTimer() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            const el = document.getElementById('quizTimer');
            if (!el || !this.state) return clearInterval(this.timer);
            el.textContent = '⏱ ' + Utils.formatDuration((Date.now() - this.state.startedAt) / 1000);
        }, 1000);
    },

    renderQuestion() {
        const s = this.state;
        const q = s.questions[s.index];
        const chosen = s.answers[q.id];
        const reveal = s.studyMode && !!chosen;
        const topic = TOPICS[q.topic];
        const answeredCount = Object.keys(s.answers).length;

        const options = q.options.map((opt, i) => {
            const letter = LETTERS[i];
            let cls = '';
            if (chosen === letter) cls = 'selected';
            if (reveal) {
                if (letter === q.answer) cls = 'correct';
                else if (letter === chosen) cls = 'wrong';
            }
            return `
                <button class="option ${cls}" ${reveal ? 'disabled' : ''} onclick="QuizPage.choose('${letter}')"
                        aria-pressed="${chosen === letter}">
                    <span class="option-letter">${letter}</span>
                    <span class="option-text">${Utils.escape(opt)}</span>
                </button>`;
        }).join('');

        const feedback = reveal
            ? (chosen === q.answer
                ? '<div class="feedback ok" role="status">Certo.</div>'
                : `<div class="feedback ko" role="status">Errado. Resposta certa: <strong>${q.answer}</strong>.</div>`)
            : '';

        const grid = s.questions.map((qq, i) => {
            const a = s.answers[qq.id];
            let cls = a ? 'answered' : '';
            if (s.studyMode && a) cls = a === qq.answer ? 'correct' : 'wrong';
            if (i === s.index) cls += ' current';
            return `<button class="grid-dot ${cls}" onclick="QuizPage.goTo(${i})" aria-label="Pergunta ${i + 1}">${i + 1}</button>`;
        }).join('');

        const isLast = s.index === s.questions.length - 1;

        document.getElementById('mainContent').innerHTML = `
            <section class="card quiz-card">
                <div class="quiz-top">
                    <span class="badge">${topic.icon} ${topic.label}</span>
                    <span class="muted">Pergunta ${s.index + 1} de ${s.questions.length}</span>
                    <span class="muted" id="quizTimer">⏱ ${Utils.formatDuration((Date.now() - s.startedAt) / 1000)}</span>
                </div>
                <div class="progress" aria-hidden="true"><div class="progress-bar" style="width:${Utils.pct(answeredCount, s.questions.length)}%"></div></div>

                <p class="q-source muted">${Utils.escape(q.exam)} · n.º ${q.n}</p>
                <p class="q-text">${Utils.escape(q.text)}</p>
                ${q.labs ? `<div class="q-labs">${Utils.escape(q.labs)}</div>` : ''}
                <p class="q-question">${Utils.escape(q.question)}</p>

                <div class="options">${options}</div>
                ${feedback}

                <div class="quiz-nav">
                    <button class="btn btn-secondary" ${s.index === 0 ? 'disabled' : ''} onclick="QuizPage.goTo(${s.index - 1})">← Anterior</button>
                    ${isLast
                        ? '<button class="btn btn-primary" onclick="QuizPage.finish()">Terminar</button>'
                        : `<button class="btn btn-primary" onclick="QuizPage.goTo(${s.index + 1})">Seguinte →</button>`}
                </div>

                <details class="grid-wrap">
                    <summary>Mapa de perguntas (${answeredCount}/${s.questions.length} respondidas)</summary>
                    <div class="q-grid">${grid}</div>
                    <button class="btn btn-secondary btn-sm" onclick="QuizPage.finish()">Terminar teste agora</button>
                </details>
            </section>
        `;
    },

    choose(letter) {
        const s = this.state;
        const q = s.questions[s.index];
        if (s.studyMode && s.answers[q.id]) return; // bloqueado após revelar
        s.answers[q.id] = letter;
        this.renderQuestion();
    },

    goTo(i) {
        if (i < 0 || i >= this.state.questions.length) return;
        this.state.index = i;
        this.renderQuestion();
        window.scrollTo(0, 0);
    },

    // ---------- RESULTADOS ----------
    async finish() {
        const s = this.state;
        const unanswered = s.questions.length - Object.keys(s.answers).length;
        if (unanswered > 0 && !confirm(`Tem ${unanswered} pergunta(s) por responder. Terminar mesmo assim?`)) return;

        clearInterval(this.timer);
        s.finished = true;
        const duration = Math.round((Date.now() - s.startedAt) / 1000);
        const result = QuizEngine.score(s.questions, s.answers);

        let saved = true;
        try {
            await Store.saveAttempt({
                total_questions: result.total,
                correct_answers: result.correct,
                topics: s.topics,
                study_mode: s.studyMode,
                duration_seconds: duration,
                details: result.details
            });
        } catch (err) {
            console.error(err);
            saved = false;
        }

        document.getElementById('mainContent').innerHTML = this.renderResult(result, duration, saved);
        window.scrollTo(0, 0);
    },

    renderResult(result, duration, saved) {
        const pct = Utils.pct(result.correct, result.total);
        const qById = Object.fromEntries(QUESTIONS.map(q => [q.id, q]));

        const topicRows = Object.entries(result.byTopic)
            .sort((a, b) => b[1].total - a[1].total)
            .map(([key, v]) => {
                const p = Utils.pct(v.correct, v.total);
                return `
                    <div class="topic-row">
                        <span>${TOPICS[key].icon} ${TOPICS[key].label}</span>
                        <div class="bar"><div class="bar-fill ${Utils.scoreClass(p)}" style="width:${p}%"></div></div>
                        <span class="muted">${v.correct}/${v.total} (${p}%)</span>
                    </div>`;
            }).join('');

        const review = result.details.map((d, i) => {
            const q = qById[d.id];
            const opts = q.options.map((o, j) => {
                const l = LETTERS[j];
                const cls = l === d.answer ? 'correct' : (l === d.chosen ? 'wrong' : '');
                return `<li class="${cls}"><strong>${l}.</strong> ${Utils.escape(o)}</li>`;
            }).join('');
            return `
                <details class="review-item ${d.correct ? 'ok' : 'ko'}" data-correct="${d.correct}">
                    <summary>
                        <span>${d.correct ? '✔' : '✘'} ${i + 1}. ${Utils.escape(q.question)}</span>
                        <span class="muted">${d.chosen ? `Resposta: ${d.chosen}` : 'Sem resposta'} · Certa: ${d.answer}</span>
                    </summary>
                    <p class="q-text">${Utils.escape(q.text)}</p>
                    ${q.labs ? `<div class="q-labs">${Utils.escape(q.labs)}</div>` : ''}
                    <ul class="review-opts">${opts}</ul>
                </details>`;
        }).join('');

        const wrongIds = result.details.filter(d => !d.correct).map(d => d.id);
        this.lastWrong = wrongIds;

        return `
            <section class="card">
                <h2>Resultado</h2>
                <div class="score ${Utils.scoreClass(pct)}">${pct}%</div>
                <p class="center">${result.correct} certas em ${result.total} · ${Utils.formatDuration(duration)}</p>
                ${saved ? '' : '<div class="alert">Não foi possível guardar o resultado no histórico.</div>'}
                <h3>Por tema</h3>
                ${topicRows}
                <div class="actions">
                    <button class="btn btn-primary" onclick="App.navigate('quiz')">Novo teste</button>
                    ${wrongIds.length ? `<button class="btn btn-secondary" onclick="QuizPage.retryWrong()">Repetir erradas (${wrongIds.length})</button>` : ''}
                </div>
            </section>
            <section class="card">
                <div class="review-head">
                    <h3>Revisão</h3>
                    <label class="checkbox-label"><input type="checkbox" onchange="QuizPage.filterWrong(this.checked)"> Só erradas</label>
                </div>
                ${review}
            </section>
        `;
    },

    filterWrong(only) {
        document.querySelectorAll('.review-item').forEach(el => {
            el.style.display = only && el.dataset.correct === 'true' ? 'none' : '';
        });
    },

    retryWrong(ids) {
        const list = ids || this.lastWrong || [];
        const set = new Set(list);
        const questions = Utils.shuffle(QUESTIONS.filter(q => set.has(q.id)));
        if (!questions.length) return;
        App.setActiveNav('quiz');
        this.begin(questions, [], true);
    }
};
