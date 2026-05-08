const axios = require("axios");

module.exports = {
	config: {
		name: "مسلسل",
		aliases: ["series", "tv"],
		version: "1.0",
		author: "JIROU",
		countDown: 5,
		role: 0,
		shortDescription: "اقتراح مسلسل",
		longDescription: "يقترح مسلسل عشوائي مع صورة ومعلومات",
		category: "🎬 الترفيه",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {

		try {

			const seriesList = [

				"Breaking Bad",
				"Better Call Saul",
				"Dark",
				"Peaky Blinders",
				"Game of Thrones",
				"The Walking Dead",
				"Stranger Things",
				"Mr. Robot",
				"True Detective",
				"The Sopranos",
				"Dexter",
				"Hannibal",
				"Sherlock",
				"Prison Break",
				"The Boys",
				"Attack on Titan",
				"Death Note",
				"Monster",
				"Vinland Saga",
				"Naruto",
				"One Piece",
				"Arcane",
				"Chernobyl",
				"House of the Dragon",
				"Black Mirror",
				"Mindhunter",
				"Lucifer",
				"Vikings",
				"The Office",
				"Friends"

			];

			const randomSeries =
				seriesList[Math.floor(Math.random() * seriesList.length)];

			const res = await axios.get(
				`https://api.popcat.xyz/imdb?q=${encodeURIComponent(randomSeries)}`
			);

			if (!res.data || res.data.error) {
				return message.reply(
					"❌ تعذر جلب بيانات المسلسل"
				);
			}

			const data = res.data;

			const msg =
`📺 | اقتراح مسلسل

━━━━━━━━━━━━━━

🎥 الاسم:
${data.title || randomSeries}

⭐ التقييم:
${data.rating || "غير معروف"}

📅 السنة:
${data.year || "غير معروف"}

🎭 النوع:
${data.genre || "غير معروف"}

🎬 الممثلين:
${data.actors || "غير معروف"}

📝 القصة:
${data.plot || "لا يوجد وصف"}

━━━━━━━━━━━━━━

🍿 مشاهدة ممتعة`;

			const img = (
				await axios.get(data.poster, {
					responseType: "stream"
				})
			).data;

			await message.reply({
				body: msg,
				attachment: img
			});

		} catch (e) {

			console.log(e);

			return message.reply(
				"❌ حدث خطأ أثناء جلب اقتراح المسلسل"
			);
		}
	}
};
