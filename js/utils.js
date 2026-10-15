// ===== UTILS =====
const Utils = {
    escape(str) {
        return String(str ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    },

    // Fisher-Yates
    shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    },

    formatDuration(seconds) {
        const s = Math.max(0, Math.round(seconds || 0));
        const m = Math.floor(s / 60);
        const r = s % 60;
        return `${m}:${String(r).padStart(2, '0')}`;
    },

    formatDate(iso) {
        return new Date(iso).toLocaleString('pt-PT', {
            day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
        });
    },

    pct(correct, total) {
        return total ? Math.round((correct / total) * 100) : 0;
    },

    scoreClass(pct) {
        if (pct >= 70) return 'good';
        if (pct >= 50) return 'mid';
        return 'bad';
    }
};

// Para testes em Node
if (typeof module !== 'undefined') module.exports = { Utils };
