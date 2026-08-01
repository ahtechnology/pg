window.APP_CONFIG = Object.freeze({
    conditionSeparation: 11,
    totalSessions: 15,
    imagesPerSession: 9,
    imageDurationMs: 30000,
    //supabaseUrl: 'https://ofncvazlwzanexavgnur.supabase.co',
    //supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mbmN2YXpsd3phbmV4YXZnbnVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0NjUyNzIsImV4cCI6MjEwMDA0MTI3Mn0.xKBZOgjZc6lcpk5Ubp9nX69z3POUb-o9RGlkEzTh2MU',
    supabaseUrl: 'https://asfiryvbysugacifjkhm.supabase.co',
    supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzZmlyeXZieXN1Z2FjaWZqa2htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU1MTM3MjksImV4cCI6MjEwMTA4OTcyOX0.XSkOksCKZjudD79yhTZQV4DO4B6bwUda1nEnLYGQsHI',
    adminEmailPrefix: 'admin@',
    heatmapOverlayAlpha: 125,
    absoluteHeatmapMaxRevealTimeMs: 6000,  // kép
    heatmapHistogramBinWidthMs: 250,  // dX
    heatmapHistogramMaxValueMs: 6000,  // Xmax
    heatmapHistogramMaxFrequency: 1000,  // Ymax, 2304
    heatmapColorStops: [
        [0, 0, 0],
        [148, 0, 211],
        [0, 0, 255],
        [64, 224, 208],
        [0, 255, 0],
        [255, 255, 0],
        [255, 165, 0],
        [255, 0, 0]
    ]
});

window.STORAGE_KEYS = Object.freeze({
    username: 'PlaceGuessUsername',
    users: 'PlaceGuessUsers',
    authMode: 'PlaceGuessAuthMode',
    supabaseUserId: 'PlaceGuessSupabaseUserId',
    progressPrefix: 'PlaceGuessProgress',
    currentSessionIdPrefix: 'PlaceGuessCurrentSessionId',
    launchTokenPrefix: 'PlaceGuessSessionLaunchAllowed',
    resultPrefix: 'PlaceGuessResult',
    resultIndexPrefix: 'PlaceGuessResultIndex',
    pendingAnswerPrefix: 'PlaceGuessPendingAnswer'
});