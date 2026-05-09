const os = require("os");
const axios = require("axios");

module.exports = {
	config: {
		name: "انفو",
		aliases: ["info", "botinfo"],
		version: "1.0",
		author: "JIROU",
		countDown: 5,
		role: 0,
		shortDescription: "معلومات البوت",
		longDescription: "عرض معلومات البوت",
		category: "⚙️ النظام",
		guide: "{pn}"
	},

	onStart: async function ({ message, api }) {

		const uptime = process.uptime();

		const hours = Math.floor(uptime / 3600);
		const minutes = Math.floor((uptime % 3600) / 60);
		const seconds = Math.floor(uptime % 60);

		const totalMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
		const freeMemory = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);

		const imageUrl = "https://i.postimg.cc/htBLr0gN/be495a9ae2bb6de49ac21e5f83f269b6-webp.webp";

		const img = (await axios.get(imageUrl, {
			responseType: "stream"
		})).data;

		const msg = `
╭──────────────╮
│    🤖 معلومات البوت
╰──────────────╯

🎀 الاسم:
MIKU BOT

👑 المطور:
JIROU

📦 عدد الأوامر:
${global.GoatBot.commands.size}

⏳ وقت التشغيل:
${hours} ساعة ${minutes} دقيقة ${seconds} ثانية

🖥 النظام:
${os.platform()}

⚡ المعالج:
${os.cpus()[0].model}

💾 الرام الكلية:
${totalMemory} GB

📉 الرام المتاحة:
${freeMemory} GB

🆔 ID البوت:
${api.getCurrentUserID()}

🔰 البادئة:
${global.GoatBot.config.prefix}

────────────────

🌐 حساب المطور:
https://www.facebook.com/JIROU1X
`;

		return message.reply({
			body: msg,
			attachment: img
		});
	}
};
