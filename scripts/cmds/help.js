const fs = require("fs-extra");
const path = require("path");
const https = require("https");

module.exports = {
  config: {
    name: "اوامر",
    aliases: ["menu", "commands"],
    version: "9.0",
    author: "EryXenX + ChatGPT",
    shortDescription: "قائمة الأوامر",
    longDescription: "نظام أوامر عربي منظم",
    category: "system",
    guide: "{pn}اوامر"
  },

  onStart: async function ({ message, event }) {

    const allCommands = global.GoatBot.commands;

    const categories = {
      "🤖 الذكاء الاصطناعي": [],
      "🛠 الأدوات": [],
      "🎮 الترفيه": [],
      "👥 الإدارة": [],
      "⚙️ النظام": []
    };

    for (const [name, cmd] of allCommands) {

      const cat = (cmd.config.category || "").toLowerCase();

      if (
        ["ai", "ai-image"].includes(cat)
      ) {
        categories["🤖 الذكاء الاصطناعي"].push(name);
      }

      else if (
        ["utility", "tools", "software", "info", "information", "wiki"].includes(cat)
      ) {
        categories["🛠 الأدوات"].push(name);
      }

      else if (
        ["fun", "anime", "game", "love", "media", "image"].includes(cat)
      ) {
        categories["🎮 الترفيه"].push(name);
      }

      else if (
        ["admin", "box", "box chat", "contacts admin", "rank", "economy", "market"].includes(cat)
      ) {
        categories["👥 الإدارة"].push(name);
      }

      else {
        categories["⚙️ النظام"].push(name);
      }
    }

    const categoryList = Object.keys(categories);

    let msg = `📂 | قائمة الأقسام\n━━━━━━━━━━━━━━`;

    categoryList.forEach((cat, index) => {
      msg += `\n${index + 1}. ${cat}`;
    });

    msg += `\n\n✦ أرسل رقم القسم لعرض أوامره`;

    const gifURLs = [
      "https://i.postimg.cc/LhF9szWx/IMG-20260508-005257.jpg",
      "https://i.postimg.cc/LhF9szWx/IMG-20260508-005257.jpg",
      "https://i.postimg.cc/mZz7tBqp/74cfd3f7445a59c5e900885a5eeccb32.jpg"
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
      categories
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
`📂 | ${selectedCategory}
━━━━━━━━━━━━━━

${commands.sort().map(c => `• ${c}`).join("\n")}

━━━━━━━━━━━━━━`;

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
