const axios = require("axios");

module.exports = {
	config: {
		name: "وايفو",
		aliases: ["waifu"],
		version: "2.0",
		author: "JIROU",
		countDown: 5,
		role: 0,
		shortDescription: "صور وايفو",
		longDescription: "إرسال صور أنمي عشوائية",
		category: "🎌 الأنمي",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {

		try {

			const apis = [

				"https://api.waifu.im/search",

				"https://nekos.best/api/v2/waifu"

			];

			const randomApi =
				apis[Math.floor(Math.random() * apis.length)];

			const res =
				await axios.get(randomApi);

			let imageUrl;

			if (randomApi.includes("waifu.im")) {

				imageUrl =
					res.data.images[0].url;

			} else {

				imageUrl =
					res.data.results[0].url;
			}

			const img = (
				await axios.get(imageUrl, {
					responseType: "stream"
				})
			).data;

			return message.reply({
				body: "🎌 | وايفو عشوائية",
				attachment: img
			});

		} catch (e) {

			console.log(e);

			return message.reply(
				"❌ | فشل جلب صورة الوايفو"
			);
		}
	}
};
