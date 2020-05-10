const config = require("config");
const TelegramBot = require("node-telegram-bot-api");

const token = config.get("Customer.TelegramToken");
const dbConfig = config.get("Customer.dbConfig");

const bot = new TelegramBot(token, { polling: true });

var Postgresql = require("./db"); //path to above db module

Postgresql.init(dbConfig);

//var Commands_AndOthernuObject = require("./Commands_AndOther");
var Callback = require("./Callback");

Callback.Commands(bot);
Callback.Callback(bot);
