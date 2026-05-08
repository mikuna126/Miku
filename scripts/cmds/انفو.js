const os = require("os");
const axios = require("axios");

module.exports = {
	config: {
		name: "انفو",
		aliases: ["info", "botinfo"],
		version: "2.0",
		author: "ChatGPT",
		countDown: 5,
		role: 0,
		shortDescription: "معلومات البوت",
		longDescription: "عرض معلومات البوت والمطور",
		category: "⚙️ النظام",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {

		const totalCommands =
			global.GoatBot?.commands?.size || 0;

		const uptime =
			process.uptime();

		const hours =
			Math.floor(uptime / 3600);

		const minutes =
			Math.floor((uptime % 3600) / 60);

		const seconds =
			Math.floor(uptime % 60);

		const totalMemory =
			(os.totalmem() / 1024 / 1024 / 1024).toFixed(2);

		const freeMemory =
			(os.freemem() / 1024 / 1024 / 1024).toFixed(2);

		const botName = "Miku";
		const developer = "JIROU";

		const imageUrl =
			"https://i.postimg.cc/yd7r7WnT/be495a9ae2bb6de49ac21e5f83f269b6-webp.webp";

		const img = (
			await axios.get(imageUrl, {
				responseType: "stream"
			})
		).data;

		const msg =
`╭──〔 🤖 معلومات البوت 〕──╮

🎀 اسم البوت:
${botName}

👑 المطور:
${developer}

📦 عدد الأوامر:
${totalCommands}

⏳ وقت التشغيل:
${hours} ساعة ${minutes} دقيقة ${seconds} ثانية

🖥 نظام التشغيل:
${os.platform()}

⚡ نوع المعالج:
${os.cpus()[0].model}

💾 الرام الكلية:
${totalMemory} GB

📉 الرام المتاحة:
${freeMemory} GB

📅 تاريخ ميلاد المطور:
19 / 3 / 2007

🌐 حساب المطور:

📘 Facebook:
www.facebook.com/JIROU1X

╰────────────────╯`;

		await message.reply({
			body: msg,
			attachment: img
		});
	}
};
