// ===== STORE (Supabase) =====
const Store = {
    attempts: [],

    async loadAttempts() {
        const { data, error } = await supabaseClient
            .from('mq_attempts')
            .select('*')
            .eq('user_id', Auth.userId())
            .order('created_at', { ascending: false });
        if (error) throw error;
        this.attempts = data || [];
        return this.attempts;
    },

    async saveAttempt(attempt) {
        const { data, error } = await supabaseClient
            .from('mq_attempts')
            .insert({ ...attempt, user_id: Auth.userId() })
            .select()
            .single();
        if (error) throw error;
        this.attempts.unshift(data);
        return data;
    },

    async deleteAttempt(id) {
        const { error } = await supabaseClient
            .from('mq_attempts')
            .delete()
            .eq('id', id)
            .eq('user_id', Auth.userId());
        if (error) throw error;
        this.attempts = this.attempts.filter(a => a.id !== id);
    }
};
