// =================================================================================
//  ملف الإعدادات (config.js)
//  يحتوي على كل الثوابت والإعدادات الخاصة بالتطبيق
// =================================================================================

/**
 * نقاط النهاية للواجهات البرمجية (APIs)
 */
export const API_ENDPOINTS = {
    pageText: (page) => `https://api.alquran.cloud/v1/page/${page}/quran-uthmani`,
    pageAudio: (page) => `https://api.alquran.cloud/v1/page/${page}/ar.alafasy`,
    tafsir: (surah, ayah) => `https://api.quran.com/api/v4/quran/tafsirs/1?verse_key=${surah}:${ayah}`
};

/**
 * إعدادات الاختبار
 */
export const QUIZ_CONFIG = {
    defaultQuestionsCount: 10,
    questionTypes: [
        'chooseNext', 
        'choosePrevious', 
        'locateAyah', 
        'completeAyah', 
        'completeLastWord', 
        'linkStartEnd'
    ]
};

/**
 * نظام التحفيز والتقدم
 */
export const MOTIVATION_CONFIG = {
    levels: [0, 100, 250, 500, 1000, 2000, 5000, 10000],
    titles: ["حافظ ناشئ", "حافظ مجتهد", "حافظ متقدم", "حافظ متقن", "نجم الحفظ", "سيد الحفاظ", "إمام الحفاظ"],
    achievements: {
        firstTest: { id: 'firstTest', title: 'الحافظ الجديد', desc: 'أكمل أول اختبار لك بنجاح.', unlocked: false },
        tenTests: { id: 'tenTests', title: 'المثابر', desc: 'أكمل 10 اختبارات.', unlocked: false },
        perfectScore: { id: 'perfectScore', title: 'المتقِن', desc: 'حقق الدرجة الكاملة في أي اختبار.', unlocked: false },
        fivePerfect: { id: 'fivePerfect', title: 'نجم الحفظ', desc: 'حقق الدرجة الكاملة في 5 صفحات مختلفة.', unlocked: false },
        sendChallenge: { id: 'sendChallenge', title: 'المتحدي', desc: 'أرسل تحدياً إلى صديق.', unlocked: false }
    },
    dailyRewards: [
        { type: 'xp', value: 50, text: "لقد حصلت على 50 نقطة خبرة إضافية!" },
        { type: 'info', text: "معلومة: أطول سورة في القرآن هي سورة البقرة." }
    ],
    motivationalMessages: {
        comeback: "أهلاً بعودتك! سعداء برؤيتك مجدداً. لنكمل رحلة المراجعة.",
        perfectScore: "ما شاء الله! درجة كاملة! هذا إتقان حقيقي.",
        newBest: "تقدم ملحوظ ومبارك. استمر على هذا المنوال.",
        struggle: "لا بأس، كل الحفاظ يمرون بهذه المرحلة. خذ نفساً عميقاً وأكمل."
    }
};
