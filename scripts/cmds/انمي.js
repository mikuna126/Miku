module.exports = {
	config: {
		name: "انمي",
		aliases: ["anime"],
		version: "1.0",
		author: "ChatGPT",
		countDown: 5,
		role: 0,
		shortDescription: "اقتراح انمي",
		longDescription: "يقترح لك انمي عشوائي",
		category: "🎮 الترفيه",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {

		const animes = [
			{
				name: "Attack on Titan",
				type: "أكشن / دراما",
				rating: "9.1",
				desc: "عالم يعيش فيه البشر خلف الجدران هرباً من العمالقة."
			},
			{
				name: "Death Note",
				type: "غموض / نفسي",
				rating: "9.0",
				desc: "طالب عبقري يجد مذكرة قادرة على قتل أي شخص يُكتب اسمه فيها."
			},
			{
				name: "Vinland Saga",
				type: "أكشن / تاريخي",
				rating: "8.8",
				desc: "رحلة انتقام ومحاربة وسط عصر الفايكنغ."
			},
			{
				name: "Monster",
				type: "غموض / نفسي",
				rating: "8.9",
				desc: "طبيب يطارد قاتلاً متسلسلاً أنقذ حياته بنفسه."
			},
			{
				name: "One Piece",
				type: "مغامرات / كوميديا",
				rating: "8.7",
				desc: "طاقم قراصنة يبحث عن أعظم كنز في العالم."
			},
			{
				name: "Steins;Gate",
				type: "خيال علمي / نفسي",
				rating: "9.1",
				desc: "مجموعة أصدقاء يكتشفون طريقة لإرسال الرسائل عبر الزمن."
			},
			{
				name: "Hunter x Hunter",
				type: "مغامرات / أكشن",
				rating: "9.0",
				desc: "فتى صغير يدخل عالم الصيادين بحثاً عن والده."
			},
			{
				name: "Code Geass",
				type: "حروب / ذكاء",
				rating: "8.9",
				desc: "أمير منفي يحصل على قوة تجبر الآخرين على طاعته."
			}
		];

		const randomAnime = animes[Math.floor(Math.random() * animes.length)];

		const msg =
`🎌 | اقتراح انمي

━━━━━━━━━━━━━━

📺 الاسم: ${randomAnime.name}

🎭 التصنيف: ${randomAnime.type}

⭐ التقييم: ${randomAnime.rating}

📝 القصة:
${randomAnime.desc}

━━━━━━━━━━━━━━

🍿 مشاهدة ممتعة`;

		await message.reply(msg);
	}
};
