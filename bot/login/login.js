Process.stdout.write("]2;EryXenX 🌐 Ultra Edition\\");
function decode(_0x3eea0c) {
  _0x3eea0c = Buffer.from(_0x3eea0c, 'hex').toString('utf-8');
  _0x3eea0c = Buffer.from(_0x3eea0c, "hex").toString('utf-8');
  _0x3eea0c = Buffer.from(_0x3eea0c, "base64").toString("utf-8");
  return _0x3eea0c;
}
const gradient = require('gradient-string');
const axios = require("axios");
const path = require('path');
const readline = require('readline');
const fs = require("fs-extra");
const toptp = require("totp-generator");
const login = require("fca-eryxenx");
const qr = new (require("qrcode-reader"))();
const Canvas = require('canvas');
const https = require('https');

async function getName(_0x5db5ea) {
  try {
    const _0x48573d = await axios.post('https://www.facebook.com/api/graphql/?q=' + ('node(' + _0x5db5ea + "){name}"));
    return _0x48573d.data[_0x5db5ea].name;
  } catch (_0x4e164f) {
    return null;
  }
}

function compareVersion(_0x4542d3, _0x3e334e) {
  const _0x4a41a6 = _0x4542d3.split('.');
  const _0x44dbec = _0x3e334e.split('.');
  for (let _0x277be0 = 0x0; _0x277be0 < 0x3; _0x277be0++) {
    if (parseInt(_0x4a41a6[_0x277be0]) > parseInt(_0x44dbec[_0x277be0])) {
      return 0x1;
    }
    if (parseInt(_0x4a41a6[_0x277be0]) < parseInt(_0x44dbec[_0x277be0])) {
      return -0x1;
    }
  }
  return 0x0;
}

const {
  writeFileSync,
  readFileSync,
  existsSync,
  watch
} = require("fs-extra");
const handlerWhenListenHasError = require("./handlerWhenListenHasError.js");
const checkLiveCookie = require("./checkLiveCookie.js");
const {
  callbackListenTime,
  storage5Message
} = global.GoatBot;
const {
  log,
  logColor,
  getPrefix,
  createOraDots,
  jsonStringifyColor,
  getText,
  convertTime,
  colors,
  randomString
} = global.utils;

const sleep = _0x2df535 => new Promise(_0x5d65c9 => setTimeout(_0x5d65c9, _0x2df535));
const currentVersion = require(process.cwd() + "/package.json").version;

function centerText(_0x4f9e3a, _0x5dd3db) {
  const _0x127cd5 = process.stdout.columns;
  const _0x1bd1ec = Math.floor((_0x127cd5 - (_0x5dd3db || _0x4f9e3a.length)) / 0x2);
  const _0x55e74f = _0x127cd5 - _0x1bd1ec - (_0x5dd3db || _0x4f9e3a.length);
  const _0x46b4da = " ".repeat(_0x1bd1ec > 0x0 ? _0x1bd1ec : 0x0) + _0x4f9e3a + " ".repeat(_0x55e74f > 0x0 ? _0x55e74f : 0x0);
  console.log(_0x46b4da);
}

// التعديل هنا: استبدال الشعار وتصحيح التنسيق
const titles = [
  [
    "███╗   ███╗██╗██╗  ██╗██╗   ██╗",
    "████╗ ████║██║██║ ██╔╝██║   ██║",
    "██╔████╔██║██║█████╔╝ ██║   ██║",
    "██║╚██╔╝██║██║██╔═██╗ ██║   ██║",
    "██║ ╚═╝ ██║██║██║  ██╗╚██████╔╝",
    "╚═╝     ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝",
    "",
    "╔════════════════════════════╗",
    "║         MIKU  BOT          ║",
    "║      CREATED BY JIROU      ║",
    "╚════════════════════════════╝"
  ],
  ["M I K U B O T @" + currentVersion],
  ["MIKU BOT"]
];

const maxWidth = process.stdout.columns;
const title = maxWidth > 0x3a ? titles[0x0] : maxWidth > 0x24 ? titles[0x1] : maxWidth > 0x1a ? titles[0x2] : titles[0x3];

function createLine(_0x5e1f50, _0x5cc2b7 = false) {
  let widthConsole = process.stdout.columns;
  if (widthConsole > 0x32) {
    widthConsole = 0x32;
  }
  if (!_0x5e1f50) {
    return Array(_0x5cc2b7 ? process.stdout.columns : widthConsole).fill('─').join('');
  } else {
    _0x5e1f50 = " " + _0x5e1f50.trim() + " ";
    const _0x200e0c = _0x5e1f50.length;
    const _0x128791 = _0x5cc2b7 ? process.stdout.columns - _0x200e0c : widthConsole - _0x200e0c;
    let _0x512638 = Math.floor(_0x128791 / 0x2);
    if (_0x512638 < 0x0 || isNaN(_0x512638)) {
      _0x512638 = 0x0;
    }
    const _0x2f4f8d = Array(_0x512638).fill('─').join('');
    return _0x2f4f8d + _0x5e1f50 + _0x2f4f8d;
  }
}

console.log(gradient("#f5af19", "#f12711")(createLine(null, true)));
console.log();
for (const text of title) {
  const textColor = gradient("#FA8BFF", "#2BD2FF", "#2BFF88")(text);
  centerText(textColor, text.length);
}

let subTitle = "MIKU BOT " + currentVersion + " - Powered by JIROU";
const subTitleArray = [];
if (subTitle.length > maxWidth) {
  while (subTitle.length > maxWidth) {
    let lastSpace = subTitle.slice(0x0, maxWidth).lastIndexOf(" ");
    lastSpace = lastSpace == -0x1 ? maxWidth : lastSpace;
    subTitleArray.push(subTitle.slice(0x0, lastSpace).trim());
    subTitle = subTitle.slice(lastSpace).trim();
  }
  if (subTitle) {
    subTitleArray.push(subTitle);
  }
} else {
  subTitleArray.push(subTitle);
}

for (const t of subTitleArray) {
  const textColor2 = gradient("#9F98E8", '#AFF6CF')(t);
  centerText(textColor2, t.length);
}

centerText(gradient('#9F98E8', "#AFF6CF")("Created by JIROU with ♡"), "Created by JIROU".length);
centerText(gradient('#9F98E8', '#AFF6CF')("Source code: https://github.com/ntkhang03/Goat-Bot-V2"), "Source code: https://github.com/ntkhang03/Goat-Bot-V2".length);
centerText(gradient("#f5af19", '#f12711')("ALL VERSIONS NOT RELEASED HERE ARE FAKE"), "ALL VERSIONS NOT RELEASED HERE ARE FAKE".length);

const character = createLine();

// ... باقي الكود من وظائف الـ Input والـ Login والـ startBot كما هو في النسخة الأصلية ...
// (بقية الدوال تبقى كما هي بدون تغييرات إضافية)
