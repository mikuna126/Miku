const axios = require("axios");

module.exports = {
	config: {
		name: "شات",
		aliases: ["chat", "gpt"],
		version: "1.0",
		author: "JIROU",
		countDown: 5,
		role: 0,
		shortDescription: "الدردشة مع الذكاء الاصطناعي",
		longDescription: "التحدث مع الذكاء الاصطناعي داخل البوت",
		category: "🤖 الذكاء الاصطناعي",
		guide: "{pn} <رسالتك>"
	},

	onStart: async function ({ message, args }) {

		try {

			if (!args[0]) {
				return message.reply(
					"❌ | اكتب رسالة للتحدث مع الذكاء الاصطناعي"
				);
			}

			const prompt = args.join(" ");

			await message.reply(
				"🤖 | جاري التفكير..."
			);

			const res = await axios.get(
				`https://api.popcat.xyz/chatbot?msg=${encodeURIComponent(prompt)}&owner=JIROU&botname=Miku`
			);

			if (!res.data || !res.data.response) {
				return message.reply(
					"❌ | تعذر الحصول على رد"
				);
			}

			return message.reply(
`🤖 | Miku AI

${res.data.response}`
			);

		} catch (e) {

			console.log(e);

			return message.reply(
				"❌ | حدث خطأ أثناء الاتصال بالذكاء الاصطناعي"
			);
		}
	}
};
