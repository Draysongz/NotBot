const { Telegraf, Markup, Scenes, session } = require("telegraf");
const dotenv = require('dotenv').config()









const botToken = process.env.BOT_TOKEN
console.log(botToken)
const bot = new Telegraf(botToken);