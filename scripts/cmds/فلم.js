const axios = require("axios");

module.exports = {
	config: {
		name: "فلم",
		aliases: ["movie", "film"],
		version: "4.0",
		author: "JIROU",
		countDown: 5,
		role: 0,
		shortDescription: "اقتراح فلم",
		longDescription: "يقترح فلم عشوائي مع صورة ومعلومات",
		category: "🎬 الترفيه",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {

		try {

			const movies = [

				"Interstellar",
				"Inception",
				"Fight Club",
				"Se7en",
				"The Dark Knight",
				"Joker",
				"The Shawshank Redemption",
				"Whiplash",
				"Parasite",
				"Gladiator",
				"The Godfather",
				"American Psycho",
				"The Pianist",
				"Inglourious Basterds",
				"Shutter Island",
				"Blade Runner 2049",
				"Prisoners",
				"Taxi Driver",
				"Scarface",
				"The Prestige",
				"Django Unchained",
				"Oldboy",
				"No Country for Old Men",
				"Drive",
				"1917",
				"Oppenheimer",
				"Memento",
				"The Green Mile",
				"The Silence of the Lambs",
				"Nightcrawler",
				"Gone Girl",
				"Tenet",
				"The Wolf of Wall Street",
				"Arrival",
				"La La Land",
				"The Truman Show",
				"Her",
				"The Matrix",
				"Pulp Fiction",
				"John Wick"

			];

			const randomMovie =
				movies[Math.floor(Math.random() * movies.length)];

			const res = await axios.get(
				`https://api.popcat.xyz/imdb?q=${encodeURIComponent(randomMovie)}`
			);

			const data = res.data;

			const msg =
`🎬 | اقتراح فلم

━━━━━━━━━━━━━━

🎥 الاسم:
${data.title || randomMovie}

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
				"❌ حدث خطأ أثناء جلب اقتراح الفلم"
			);
		}
	}
};
