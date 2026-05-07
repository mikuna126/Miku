const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
	config: {
		name: "تخيل",
		aliases: ["ai", "draw"],
		version: "1.0",
		author: "ChatGPT",
		countDown: 10,
		role: 0,
		shortDescription: "توليد صور بالذكاء الاصطناعي",
		longDescription: "إنشاء صور AI من النص",
		category: "🎨 الذكاء الاصطناعي",
		guide: "{pn} <وصف الصورة>"
	},

	onStart: async function ({ message, args }) {

		try {

			if (!args[0])
				return message.reply(
					"❌ | اكتب وصف الصورة"
				);

			const prompt =
				args.join(" ");

			await message.reply(
				"🎨 | جاري رسم الصورة بالذكاء الاصطناعي..."
			);

			const imageUrl =
`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1024&height=1024&seed=${Date.now()}&model=flux`;

			const imgPath = path.join(
				__dirname,
				"cache",
				`ai_${Date.now()}.jpg`
			);

			const response = await axios({
				url: imageUrl,
				method: "GET",
				responseType: "stream"
			});

			await fs.ensureDir(
				path.dirname(imgPath)
			);

			const writer =
				fs.createWriteStream(imgPath);

			response.data.pipe(writer);

			await new Promise((resolve, reject) => {
				writer.on("finish", resolve);
				writer.on("error", reject);
			});

			await message.reply({
				body:
`🖼️ | تم إنشاء الصورة بنجاح

✍️ الوصف:
${prompt}`,
				attachment:
					fs.createReadStream(imgPath)
			});

			fs.unlinkSync(imgPath);

		} catch (e) {

			console.log(e);

			return message.reply(
				"❌ | حدث خطأ أثناء إنشاء الصورة"
			);
		}
	}
};
