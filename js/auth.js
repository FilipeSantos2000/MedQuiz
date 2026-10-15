// ===== AUTH MODULE =====
const Auth = {
    user: null,

    renderLogin() {
        return `
            <div class="auth-page">
                <div class="card auth-card">
                    <h1 class="auth-title">MedQuiz</h1>
                    <p class="auth-subtitle">Treino para a Prova Nacional de Acesso</p>

                    <div class="auth-tabs" role="tablist">
                        <button class="auth-tab active" role="tab" onclick="Auth.switchTab('login')">Entrar</button>
                        <button class="auth-tab" role="tab" onclick="Auth.switchTab('register')">Criar Conta</button>
                    </div>

                    <form id="loginForm" onsubmit="Auth.login(event)">
                        <label class="form-label" for="loginEmail">Email</label>
                        <input type="email" class="form-input" id="loginEmail" required autocomplete="email">
                        <label class="form-label" for="loginPassword">Password</label>
                        <input type="password" class="form-input" id="loginPassword" required autocomplete="current-password">
                        <button type="submit" class="btn btn-primary btn-full" id="loginBtn">Entrar</button>
                        <div id="loginError" class="auth-error" role="alert"></div>
                    </form>

                    <form id="registerForm" style="display:none" onsubmit="Auth.register(event)">
                        <label class="form-label" for="registerName">Nome</label>
                        <input type="text" class="form-input" id="registerName" required autocomplete="name">
                        <label class="form-label" for="registerEmail">Email</label>
                        <input type="email" class="form-input" id="registerEmail" required autocomplete="email">
                        <label class="form-label" for="registerPassword">Password</label>
                        <input type="password" class="form-input" id="registerPassword" minlength="6" required autocomplete="new-password">
                        <button type="submit" class="btn btn-primary btn-full" id="registerBtn">Criar Conta</button>
                        <div id="registerError" class="auth-error" role="alert"></div>
                    </form>
                </div>
            </div>
        `;
    },

    switchTab(tab) {
        const tabs = document.querySelectorAll('.auth-tab');
        tabs[0].classList.toggle('active', tab === 'login');
        tabs[1].classList.toggle('active', tab === 'register');
        document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
        document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
    },

    async login(e) {
        e.preventDefault();
        const btn = document.getElementById('loginBtn');
        const errorEl = document.getElementById('loginError');
        btn.disabled = true;
        errorEl.textContent = '';

        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: document.getElementById('loginEmail').value,
            password: document.getElementById('loginPassword').value
        });

        btn.disabled = false;
        if (error) {
            errorEl.textContent = error.message === 'Invalid login credentials'
                ? 'Email ou password incorretos.' : error.message;
            return;
        }
        this.user = data.user;
        App.onAuthStateChange(data.user);
    },

    async register(e) {
        e.preventDefault();
        const btn = document.getElementById('registerBtn');
        const errorEl = document.getElementById('registerError');
        btn.disabled = true;
        errorEl.textContent = '';
        errorEl.style.color = '';

        const { data, error } = await supabaseClient.auth.signUp({
            email: document.getElementById('registerEmail').value,
            password: document.getElementById('registerPassword').value,
            options: { data: { name: document.getElementById('registerName').value.trim() } }
        });

        btn.disabled = false;
        if (error) {
            errorEl.textContent = error.message;
            return;
        }
        if (data.user && data.user.identities?.length === 0) {
            errorEl.textContent = 'Este email já está registado.';
            return;
        }
        if (!data.session) {
            errorEl.style.color = 'var(--success)';
            errorEl.textContent = 'Conta criada. Verifique o email para confirmar.';
            return;
        }
        this.user = data.user;
        App.onAuthStateChange(data.user);
    },

    async logout() {
        await supabaseClient.auth.signOut();
        this.user = null;
        App.onAuthStateChange(null);
    },

    async getSession() {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session) this.user = session.user;
        return session;
    },

    getUserName() {
        if (!this.user) return '';
        return this.user.user_metadata?.name || this.user.email.split('@')[0];
    },

    userId() {
        return this.user?.id;
    }
};
