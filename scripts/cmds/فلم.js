const axios = require("axios");

module.exports = {
	config: {
		name: "فلم",
		aliases: ["movie", "film"],
		version: "1.0",
		author: "ChatGPT",
		countDown: 5,
		role: 0,
		shortDescription: "اقتراح فلم",
		longDescription: "يقترح لك فلم عشوائي مع صورة ووصف عربي",
		category: "🎬 الترفيه",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {

		try {

			const pages = [1, 2, 3, 4, 5];
			const randomPage =
				pages[Math.floor(Math.random() * pages.length)];

			const res = await axios.get(
				`https://api.themoviedb.org/3/movie/top_rated?api_key=1fbbcf1f9b9dfb9c7c2f0f3e54f9b233&language=en-US&page=${randomPage}`
			);

			const movies = res.data.results;

			const movie =
				movies[Math.floor(Math.random() * movies.length)];

			const title =
				movie.title || "غير معروف";

			const rating =
				movie.vote_average || "غير معروف";

			const date =
				movie.release_date || "غير معروف";

			let desc =
				movie.overview || "لا يوجد وصف";

			desc = desc.substring(0, 400);

			const translate = await axios.get(
				`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q=${encodeURIComponent(desc)}`
			);

			desc = translate.data[0]
				.map(t => t[0])
				.join("");

			const image =
				`https://image.tmdb.org/t/p/w500${movie.poster_path}`;

			const img = (
				await axios.get(image, {
					responseType: "stream"
				})
			).data;

			const msg =
`🎬 | اقتراح فلم

━━━━━━━━━━━━━━

🎥 الاسم:
${title}

⭐ التقييم:
${rating}

📅 سنة الإصدار:
${date}

📝 القصة:
${desc}

━━━━━━━━━━━━━━

🍿 مشاهدة ممتعة`;

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
