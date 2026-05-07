const axios = require("axios");

module.exports = {
	config: {
		name: "وايفو",
		aliases: ["waifu"],
		version: "1.0",
		author: "ChatGPT",
		countDown: 5,
		role: 0,
		shortDescription: "صور وايفو عشوائية",
		longDescription: "إرسال صور أنمي وايفو عشوائية",
		category: "🎌 الأنمي",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {

		try {

			const apis = [

				"https://api.waifu.pics/sfw/waifu",

				"https://api.waifu.pics/sfw/neko"

			];

			const randomApi =
				apis[Math.floor(Math.random() * apis.length)];

			const res =
				await axios.get(randomApi);

			const imageUrl =
				res.data.url;

			const img =
				await axios.get(imageUrl, {
					responseType: "stream"
				});

			return message.reply({
				body: "🎌 | وايفو عشوائية",
				attachment: img.data
			});

		} catch (e) {

			console.log(e);

			return message.reply(
				"❌ | حدث خطأ أثناء جلب الصورة"
			);
		}
	}
};
