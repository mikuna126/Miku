module.exports = {
	config: {
		name: "تفاعل",
		version: "1.0",
		author: "ChatGPT",
		category: "events"
	},

	onStart: async () => {},

	onChat: async function ({ event, api }) {

		if (!event.body)
			return;

		const text =
			event.body.toLowerCase();

		const reactions = [

			{
				keywords: ["سلام", "هلا", "مرحبا" "ميكو" ],
				emoji: "❤️"
			},

			{
				keywords: ["هههه", "😂", "lol"],
				emoji: "😂"
			},

			{
				keywords: ["تصبحون", "تصبح"],
				emoji: "🌙"
			},

			{
				keywords: ["احبك", "love"],
				emoji: "🥺"
			},

			{
				keywords: ["انمي"],
				emoji: "🎌"
			},

			{
				keywords: ["فلم", "مسلسل"],
				emoji: "🍿"
			}

		];

		for (const react of reactions) {

			if (
				react.keywords.some(word =>
					text.includes(word)
				)
			) {

				return api.setMessageReaction(
					react.emoji,
					event.messageID,
					() => {},
					true
				);
			}
		}
	}
};
