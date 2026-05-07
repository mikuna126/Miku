const axios = require("axios");

module.exports = {
	config: {
		name: "انمي",
		aliases: ["anime"],
		version: "2.0",
		author: "ChatGPT",
		countDown: 5,
		role: 0,
		shortDescription: "اقتراح انمي",
		longDescription: "يقترح لك انمي عشوائي مع صورة",
		category: "🎮 الترفيه",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {

		try {

			const res = await axios.get(
				"https://api.jikan.moe/v4/random/anime"
			);

			const anime = res.data.data;

			const title =
				anime.title || "غير معروف";

			const type =
				anime.genres.map(g => g.name).join(" / ") || "غير معروف";

			const rating =
				anime.score || "غير معروف";

			const episodes =
				anime.episodes || "غير معروف";

			const desc =
				anime.synopsis ?
				anime.synopsis.substring(0, 300) + "..."
				: "لا يوجد وصف";

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

			return message.reply(
				"❌ حدث خطأ أثناء جلب اقتراح الأنمي"
			);
		}
	}
};
