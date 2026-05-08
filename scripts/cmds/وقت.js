module.exports = {
	config: {
		name: "وقت",
		aliases: ["uptime"],
		version: "1.0",
		author: "JIROU",
		countDown: 5,
		role: 0,
		shortDescription: "مدة تشغيل البوت",
		longDescription: "يعرض مدة تشغيل البوت منذ آخر إعادة تشغيل",
		category: "⚙️ النظام",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {

		try {

			const uptime =
				process.uptime();

			const days =
				Math.floor(uptime / (60 * 60 * 24));

			const hours =
				Math.floor((uptime % (60 * 60 * 24)) / (60 * 60));

			const minutes =
				Math.floor((uptime % (60 * 60)) / 60);

			const seconds =
				Math.floor(uptime % 60);

			const msg =
`⏰ | وقت تشغيل البوت

━━━━━━━━━━━━━━

📅 الأيام:
${days}

🕐 الساعات:
${hours}

⏳ الدقائق:
${minutes}

⌛ الثواني:
${seconds}

━━━━━━━━━━━━━━

🤖 البوت يعمل بنجاح`;

			return message.reply(msg);

		} catch (e) {

			console.log(e);

			return message.reply(
				"❌ | حدث خطأ أثناء جلب وقت التشغيل"
			);
		}
	}
};
