// ===== APP ROUTER & INITIALIZATION =====
const App = {
    pages: {
        quiz: QuizPage,
        history: HistoryPage
    },
    currentPage: 'quiz',

    async init() {
        this.initTheme();
        this.setupNavigation();

        supabaseClient.auth.onAuthStateChange((event) => {
            if (event === 'SIGNED_OUT') this.showLogin();
        });

        const session = await Auth.getSession();
        if (session) this.showApp();
        else this.showLogin();
    },

    chrome(visible) {
        document.getElementById('appHeader').style.display = visible ? 'flex' : 'none';
        document.getElementById('mainNav').style.display = visible ? 'flex' : 'none';
    },

    showLogin() {
        this.chrome(false);
        document.getElementById('mainContent').innerHTML = Auth.renderLogin();
    },

    showApp() {
        this.chrome(true);
        document.getElementById('userName').textContent = Auth.getUserName();
        this.navigate('quiz');
    },

    onAuthStateChange(user) {
        if (user) this.showApp();
        else this.showLogin();
    },

    setupNavigation() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const s = QuizPage.state;
                if (s && !s.finished && !confirm('Tem um teste a decorrer. Sair e perder o progresso?')) return;
                this.navigate(link.dataset.page);
            });
        });
    },

    setActiveNav(page) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.page === page));
    },

    async navigate(page) {
        const pageObj = this.pages[page];
        if (!pageObj) return;
        this.currentPage = page;
        clearInterval(QuizPage.timer);
        QuizPage.state = null;
        this.setActiveNav(page);

        const main = document.getElementById('mainContent');
        main.innerHTML = '<p class="muted center">A carregar...</p>';
        try {
            main.innerHTML = await pageObj.render();
        } catch (err) {
            console.error(err);
            main.innerHTML = `<div class="alert">Erro ao carregar: ${Utils.escape(err.message)}</div>`;
        }
        window.scrollTo(0, 0);
    },

    initTheme() {
        const saved = localStorage.getItem('medquiz-theme') || 'dark';
        this.applyTheme(saved);
        document.getElementById('themeToggle').addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            this.applyTheme(next);
            localStorage.setItem('medquiz-theme', next);
        });
    },

    applyTheme(theme) {
        if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
        else document.documentElement.removeAttribute('data-theme');
        document.getElementById('themeIcon').textContent = theme === 'light' ? '☀️' : '🌙';
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
