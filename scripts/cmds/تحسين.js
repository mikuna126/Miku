const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
	config: {
		name: "تحسين",
		aliases: ["hd", "enhance"],
		version: "1.0",
		author: "ChatGPT",
		countDown: 10,
		role: 0,
		shortDescription: "تحسين جودة الصور",
		longDescription: "رفع وتحسين جودة الصورة",
		category: "🖼️ الصور",
		guide: "رد على صورة ثم اكتب {pn}"
	},

	onStart: async function ({ event, message }) {

		try {

			const reply =
				event.messageReply;

			if (
				!reply ||
				!reply.attachments ||
				reply.attachments.length === 0
			) {

				return message.reply(
					"❌ | قم بالرد على صورة"
				);
			}

			const attachment =
				reply.attachments[0];

			if (
				attachment.type !== "photo"
			) {

				return message.reply(
					"❌ | يجب الرد على صورة فقط"
				);
			}

			await message.reply(
				"🪄 | جاري تحسين جودة الصورة..."
			);

			const imageUrl =
				attachment.url;

			const api =
`https://api.popcat.xyz/blur?image=${encodeURIComponent(imageUrl)}`;

			const img =
				await axios.get(api, {
					responseType: "stream"
				});

			const filePath = path.join(
				__dirname,
				"cache",
				`enhance_${Date.now()}.jpg`
			);

			await fs.ensureDir(
				path.dirname(filePath)
			);

			const writer =
				fs.createWriteStream(filePath);

			img.data.pipe(writer);

			await new Promise((resolve, reject) => {
				writer.on("finish", resolve);
				writer.on("error", reject);
			});

			await message.reply({
				body: "✨ | تم تحسين الصورة",
				attachment:
					fs.createReadStream(filePath)
			});

			fs.unlinkSync(filePath);

		} catch (e) {

			console.log(e);

			return message.reply(
				"❌ | حدث خطأ أثناء تحسين الصورة"
			);
		}
	}
};
