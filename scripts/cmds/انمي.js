const axios = require("axios");

module.exports = {
	config: {
		name: "انمي",
		aliases: ["anime"],
		version: "3.0",
		author: "ChatGPT",
		countDown: 5,
		role: 0,
		shortDescription: "اقتراح انمي",
		longDescription: "يقترح لك انمي عشوائي مع صورة ووصف عربي",
		category: "🎮 الترفيه",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {

		try {

			const res = await axios.get(
				"https://api.jikan.moe/v4/top/anime"
			);

			const animeList = res.data.data;

			const anime =
				animeList[Math.floor(Math.random() * animeList.length)];

			const title =
				anime.title || "غير معروف";

			const type =
				anime.genres.map(g => g.name).join(" / ") || "غير معروف";

			const rating =
				anime.score || "غير معروف";

			const episodes =
				anime.episodes || "غير معروف";

			let desc =
				anime.synopsis || "لا يوجد وصف";

			desc = desc
				.replace(/<[^>]*>?/gm, "")
				.substring(0, 400);

			const translate = await axios.get(
				`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q=${encodeURIComponent(desc)}`
			);

			desc = translate.data[0]
				.map(t => t[0])
				.join("");

			const image =
				anime.images.jpg.large_image_url;

			const img = (
				await axios.get(image, {
					responseType: "stream"
				})
			).data;

			const msg =
`🎌 | اقتراح انمي

━━━━━━━━━━━━━━

📺 الاسم:
${title}

🎭 التصنيف:
${type}

🎞 عدد الحلقات:
${episodes}

⭐ التقييم:
${rating}

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
				"❌ حدث خطأ أثناء جلب اقتراح الأنمي"
			);
		}
	}
};
