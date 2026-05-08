const os = require("os");

module.exports = {
	config: {
		name: "انفو",
		aliases: ["info", "botinfo"],
		version: "2.0",
		author: "JIROU",
		countDown: 5,
		role: 0,
		shortDescription: "معلومات البوت",
		longDescription: "عرض معلومات البوت والمطور",
		category: "⚙️ النظام",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {

		const uptime = process.uptime();

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

		const msg =
`╭──〔 🤖 معلومات البوت 〕──╮

🎀 اسم البوت:
Miku

👑 المطور:
JIROU

📦 حالة البوت:
يعمل بنجاح ✅

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

		return message.reply(msg);
	}
};
