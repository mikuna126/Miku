const fs = require("fs-extra");
const path = require("path");
const https = require("https");

module.exports = {
  config: {
    name: "اوامر",
    aliases: ["menu", "commands"],
    version: "8.0",
    author: "EryXenX + ChatGPT",
    shortDescription: "قائمة الأوامر",
    longDescription: "نظام أوامر ديناميكي حسب الأقسام",
    category: "system",
    guide: "{pn}اوامر"
  },

  onStart: async function ({ message, event }) {

    const allCommands = global.GoatBot.commands;

    const categories = {};

    for (const [name, cmd] of allCommands) {

      const cat = (cmd.config.category || "others").toLowerCase();

      if (!categories[cat])
        categories[cat] = [];

      categories[cat].push(name);
    }

    const categoryList = Object.keys(categories);

    const categoryTranslations = {
      ai: "🤖 الذكاء الاصطناعي",
      utility: "🛠 الأدوات",
      "box chat": "💬 المجموعة",
      system: "⚙️ النظام",
      owner: "👑 المطور",
      anime: "🎌 الأنمي",
      media: "🎥 الوسائط",
      software: "💻 البرامج",
      economy: "💰 الاقتصاد",
      fun: "🎮 الترفيه",
      "contacts admin": "📞 تواصل الإدارة",
      admin: "🛡 الإدارة",
      "ai-image": "🖼 صور الذكاء الاصطناعي",
      rank: "🏆 الرتب",
      image: "📷 الصور",
      wiki: "📚 ويكيبيديا",
      game: "🎲 الألعاب",
      market: "🛒 السوق",
      box: "📦 الصندوق",
      info: "ℹ️ المعلومات",
      tools: "🧰 الأدوات",
      other: "📌 أخرى",
      love: "❤️ الحب",
      information: "📖 معلومات",
      config: "⚙️ الإعدادات"
    };

    let msg =
`╭──『 📂 الأقسام 』
│`;

    categoryList.forEach((cat, index) => {
      msg += `\n│ ${index + 1}️⃣ ${categoryTranslations[cat] || cat}`;
    });

    msg += `\n│\n╰─↳ رد برقم القسم`;

    const gifURLs = [
      "https://i.imgur.com/Xw6JTfn.gif",
      "https://i.imgur.com/mW0yjZb.gif",
      "https://i.imgur.com/KQBcxOV.gif"
    ];

    const randomGifURL = gifURLs[Math.floor(Math.random() * gifURLs.length)];

    const gifFolder = path.join(__dirname, "cache");

    if (!fs.existsSync(gifFolder))
      fs.mkdirSync(gifFolder, { recursive: true });

    const gifName = path.basename(randomGifURL);
    const gifPath = path.join(gifFolder, gifName);

    if (!fs.existsSync(gifPath))
      await downloadGif(randomGifURL, gifPath);

    const sentMsg = await message.reply({
      body: msg,
      attachment: fs.createReadStream(gifPath)
    });

    global.GoatBot.onReply.set(sentMsg.messageID, {
      commandName: this.config.name,
      author: event.senderID,
      categories,
      categoryTranslations
    });
  },

  onReply: async function ({ message, Reply, event }) {

    if (event.senderID != Reply.author)
      return;

    const input = parseInt(event.body);

    if (isNaN(input))
      return;

    const categoryNames = Object.keys(Reply.categories);

    const selectedCategory = categoryNames[input - 1];

    if (!selectedCategory)
      return message.reply("❌ هذا القسم غير موجود");

    const commands = Reply.categories[selectedCategory];

    let msg =
`╭──『 ${Reply.categoryTranslations[selectedCategory] || selectedCategory} 』
│
${commands.sort().map(c => `│ • ${c}`).join("\n")}
│
╰────────────`;

    return message.reply(msg);
  }
};

function downloadGif(url, dest) {
  return new Promise((resolve, reject) => {

    const file = fs.createWriteStream(dest);

    https.get(url, (res) => {

      if (res.statusCode !== 200) {
        fs.unlink(dest, () => {});
        return reject();
      }

      res.pipe(file);

      file.on("finish", () => file.close(resolve));

    }).on("error", (err) => {

      fs.unlink(dest, () => {});
      reject(err);

    });
  });
}
