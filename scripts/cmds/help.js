const fs = require("fs-extra");
const path = require("path");
const https = require("https");

const categories = {
  "1": {
    name: "🎮 الألعاب",
    categories: ["game", "games", "fun"]
  },

  "2": {
    name: "🤖 الذكاء الاصطناعي",
    categories: ["ai"]
  },

  "3": {
    name: "🌐 السوشيال",
    categories: ["social", "media"]
  },

  "4": {
    name: "🛠️ الأدوات",
    categories: ["utility", "tools", "system"]
  },

  "5": {
    name: "👑 الإدارة",
    categories: ["admin", "moderation"]
  }
};

module.exports = {
  config: {
    name: "اوامر",
    aliases: ["menu", "commands"],
    version: "7.0",
    author: "EryXenX + ChatGPT",
    shortDescription: "Interactive help menu",
    longDescription: "Reply-based category help system",
    category: "system",
    guide: "{pn}help"
  },

  onStart: async function ({ message, event }) {

    let msg =
`╭──『 📂 الأقسام 』
│
│ 1️⃣ الألعاب
│ 2️⃣ الذكاء الاصطناعي
│ 3️⃣ السوشيال
│ 4️⃣ الأدوات
│ 5️⃣ الإدارة
│
╰─↳ رد برقم القسم`;

    const gifURLs = [
      "https://i.postimg.cc/j2wZCJmT/e300540e498bf2d7c3270d6e5ab72dc2.jpg",
      "https://i.postimg.cc/j2wZCJmT/e300540e498bf2d7c3270d6e5ab72dc2.jpg",
      "https://i.postimg.cc/j2wZCJmT/e300540e498bf2d7c3270d6e5ab72dc2.jpg"
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
      author: event.senderID
    });
  },

  onReply: async function ({ message, Reply, event }) {

    if (event.senderID != Reply.author)
      return;

    const input = event.body.trim();

    if (!categories[input])
      return message.reply("❌ هذا القسم غير موجود");

    const allCommands = global.GoatBot.commands;

    const selected = categories[input];

    let cmds = [];

    for (const [name, cmd] of allCommands) {

      const cat = (cmd.config.category || "").toLowerCase();

      if (selected.categories.includes(cat)) {
        cmds.push(name);
      }
    }

    cmds = [...new Set(cmds)];

    if (!cmds.length)
      return message.reply("❌ لا توجد أوامر داخل هذا القسم");

    let msg =
`╭──『 ${selected.name} 』
│
${cmds.sort().map(c => `│ • ${c}`).join("\n")}
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
