window.readJson = function readJson(key, fallback) {
    try {
        const parsed = JSON.parse(localStorage.getItem(key) || 'null');
        return parsed ?? fallback;
    } catch {
        return fallback;
    }
};

window.getUsername = function getUsername() {
    return (localStorage.getItem(STORAGE_KEYS.username) || '').trim();
};

window.isSupabaseMode = function isSupabaseMode() {
    return localStorage.getItem(STORAGE_KEYS.authMode) === 'supabase';
};

window.getSupabaseUserId = function getSupabaseUserId() {
    return localStorage.getItem(STORAGE_KEYS.supabaseUserId);
};

window.isSupabaseAdminEmail = function isSupabaseAdminEmail(email) {
    return email.toLowerCase().startsWith(APP_CONFIG.adminEmailPrefix);
};

window.getProgressKey = function getProgressKey() {
    return `${STORAGE_KEYS.progressPrefix}:${getUsername()}`;
};

window.getCurrentSessionIdKey = function getCurrentSessionIdKey() {
    return `${STORAGE_KEYS.currentSessionIdPrefix}:${getUsername()}`;
};

window.getLaunchTokenKey = function getLaunchTokenKey() {
    return `${STORAGE_KEYS.launchTokenPrefix}:${getUsername()}`;
};

window.getResultKey = function getResultKey(sessionId, imageIndex) {
    return `${STORAGE_KEYS.resultPrefix}:${getUsername()}:${sessionId}:${imageIndex}`;
};

window.getResultPrefix = function getResultPrefix(sessionId) {
    return `${STORAGE_KEYS.resultPrefix}:${getUsername()}:${sessionId}:`;
};

window.getResultIndexKey = function getResultIndexKey() {
    return `${STORAGE_KEYS.resultIndexPrefix}:${getUsername()}`;
};

window.getPendingAnswerKey = function getPendingAnswerKey() {
    return `${STORAGE_KEYS.pendingAnswerPrefix}:${getUsername()}`;
};

window.lerp = function lerp(a, b, t) {
    return a + ((b - a) * t);
};

window.getHeatColor = function getHeatColor(value) {
    const clamped = Math.max(0, Math.min(1, value));
    const stops = APP_CONFIG.heatmapColorStops;
    const scaled = clamped * (stops.length - 1);
    const i = Math.min(stops.length - 2, Math.floor(scaled));
    const t = scaled - i;
    const c0 = stops[i];
    const c1 = stops[i + 1];

    return [
        Math.round(lerp(c0[0], c1[0], t)),
        Math.round(lerp(c0[1], c1[1], t)),
        Math.round(lerp(c0[2], c1[2], t))
    ];
};