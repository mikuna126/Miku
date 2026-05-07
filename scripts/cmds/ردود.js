module.exports = {
	config: {
		name: "ردود",
		version: "3.0",
		author: "ChatGPT",
		category: "events"
	},

	onStart: async () => {},

	onChat: async function ({ event, message }) {

		if (!event.body) return;

		const text = event.body.toLowerCase();

		const replies = [
			{ keywords: ["سلام","هلا","مرحبا","هلو"], reply: "❤️ أهلاً وسهلاً" },
			{ keywords: ["صباح الخير"], reply: "☀️ صباح النور" },
			{ keywords: ["مسا الخير"], reply: "🌙 مساء النور" },
			{ keywords: ["تصبح","تصبحون"], reply: "🌙 تصبح على خير" },
			{ keywords: ["هههه","😂","lol"], reply: "😂😂" },
			{ keywords: ["احبك","love"], reply: "🥺❤️" },
			{ keywords: ["انمي","anime"], reply: "🎌 الأنمي رهيب" },
			{ keywords: ["فلم","فيلم","movie"], reply: "🍿 اقتراحات الأفلام لا تنتهي" },
			{ keywords: ["مسلسل","series"], reply: "📺 يبدو أنك تحب المسلسلات" },
			{ keywords: ["ببجي","pubg"], reply: "🎮 جلد ولا انجلدت؟ 😂" },
			{ keywords: ["قيم","game"], reply: "🔥 استمتع باللعب" },
			{ keywords: ["شكو","شلونكم"], reply: "✨ تمام الحمدلله" },
			{ keywords: ["كيفك","كيف الحال"], reply: "❤️ بخير وانت؟" },
			{ keywords: ["تعبان","حزين"], reply: "💔 إن شاء الله تتحسن أمورك" },
			{ keywords: ["زعلان","مضايق"], reply: "🥺 لا تزعل" },
			{ keywords: ["شكرا","شكراً"], reply: "❤️ العفو" },
			{ keywords: ["ثانكس"], reply: "✨ ولو" },
			{ keywords: ["مبروك","نجحت"], reply: "🎉 ألف مبروك" },
			{ keywords: ["باي","مع السلامة"], reply: "👋 مع السلامة" },
			{ keywords: ["وينك","مختفي"], reply: "👀 موجود" },
			{ keywords: ["بوت"], reply: "🤖 اسمي ميكو يشلال" },
			{ keywords: ["ميكو","miku"], reply: "👀 عيونها" },
			{ keywords: ["حر","الجو"], reply: "🥵 الجو نار" },
			{ keywords: ["برد"], reply: "❄️ برد فعلاً" },
			{ keywords: ["اوف","يا ساتر"], reply: "💀💀" },
			{ keywords: ["نمت","نعسان"], reply: "😴 نوم العافية" },
			{ keywords: ["جوعان","اكل"], reply: "🍔 بالعافية مقدماً" },
			{ keywords: ["قهوة","كوفي"], reply: "☕ القهوة مزاج" },
			{ keywords: ["اغنية","موسيقى"], reply: "🎵 الموسيقى حياة" },
			{ keywords: ["كرة","مباراة"], reply: "⚽ مين فريقك؟" },
			{ keywords: ["سيارة","سيارات"], reply: "🚗 السيارات عشق" }
		];

		for (const item of replies) {

			if (
				item.keywords.some(word =>
					text.includes(word)
				)
			) {

				return message.reply(item.reply);
			}
		}
	}
};
