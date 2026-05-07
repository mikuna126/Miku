const axios = require("axios");

module.exports = {
	config: {
		name: "مسلسل",
		aliases: ["series", "tv"],
		version: "1.0",
		author: "ChatGPT",
		countDown: 5,
		role: 0,
		shortDescription: "اقتراح مسلسل",
		longDescription: "يقترح لك مسلسل عشوائي مع صورة ووصف عربي",
		category: "🎬 الترفيه",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {

		try {

			const pages = [1, 2, 3, 4, 5];
			const randomPage =
				pages[Math.floor(Math.random() * pages.length)];

			const res = await axios.get(
				`https://api.themoviedb.org/3/tv/top_rated?api_key=1fbbcf1f9b9dfb9c7c2f0f3e54f9b233&language=en-US&page=${randomPage}`
			);

			const seriesList = res.data.results;

			const series =
				seriesList[Math.floor(Math.random() * seriesList.length)];

			const title =
				series.name || "غير معروف";

			const rating =
				series.vote_average || "غير معروف";

			const date =
				series.first_air_date || "غير معروف";

			let desc =
				series.overview || "لا يوجد وصف";

			desc = desc.substring(0, 400);

			const translate = await axios.get(
				`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q=${encodeURIComponent(desc)}`
			);

			desc = translate.data[0]
				.map(t => t[0])
				.join("");

			const image =
				`https://image.tmdb.org/t/p/w500${series.poster_path}`;

			const img = (
				await axios.get(image, {
					responseType: "stream"
				})
			).data;

			const msg =
`📺 | اقتراح مسلسل

━━━━━━━━━━━━━━

🎞 الاسم:
${title}

⭐ التقييم:
${rating}

📅 تاريخ الإصدار:
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
				"❌ حدث خطأ أثناء جلب اقتراح المسلسل"
			);
		}
	}
};
