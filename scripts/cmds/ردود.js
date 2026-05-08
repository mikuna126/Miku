module.exports = {
	config: {
		name: "ردود",
		version: "1.0",
		author: "ChatGPT",
		category: "events"
	},

	onStart: async () => {},

	onChat: async function ({ event, message, api }) {

		if (!event.body)
			return;

		const text =
			event.body.toLowerCase();

		const replies = [

			{
				keywords: ["سلام", "هلا", "مرحبا"],
				reply: "❤️ وعليكم السلام"
			},

			{
				keywords: ["صبح", "تصبحون"],
				reply: "🌙 تصبح على خير"
			},

			{
				keywords: ["هههه", "😂"],
				reply: "😂"
			},

			{
				keywords: ["احبك"],
				reply: "🥺 وأنا أيضاً"
			},

			{
				keywords: ["ميكو", "miku"],
				reply: "عيونها"
			},

			{
				keywords: ["طرد"],
				reply: "اطرد الزب"
			}

		];

		for (const item of replies) {

			if (
				item.keywords.some(word =>
					text.includes(word)
				)
			) {

				return api.sendMessage(
					item.reply,
					event.threadID
				);
			}
		}
	}
};
