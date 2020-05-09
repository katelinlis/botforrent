var menuObject = require("./menu/index");
var users = require("./db/tables/users");
var optionsMenu = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "Поиск жилья", callback_data: "FindRent" }],
      [{ text: "Опубликовать объявление", callback_data: "CreateRent" }],
      [{ text: "Язык/Language/語言", callback_data: "Language" }],
      [{ text: "Поддержать бота", callback_data: "Support" }],
    ],
  }),
};

exports.Commands = (bot) => {
  bot.onText(/\/start/, (msg) => {
    users.RegisterUser(
      msg.from.first_name,
      msg.from.last_name,
      msg.from.username,
      msg.from.id
    );
    var options = {};
    bot.sendMessage(
      msg.chat.id,
      "Привет! я помогу тебе найти жилье, или найти арендаторов."
    );
    bot.sendMessage(msg.chat.id, "Давай приступим", optionsMenu);
  });
  bot.onText(/\/menu/, (msg) => {
    users.RegisterUser(
      msg.from.first_name,
      msg.from.last_name,
      msg.from.username,
      msg.from.id
    );
    bot.sendMessage(
      msg.chat.id,
      "Привет! я помогу тебе найти жилье, или найти арендаторов.",
      optionsMenu
    );
  });
};

exports.Callback = (bot) => {
  bot.on("callback_query", function onCallbackQuery(callbackQuery) {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    let opts = {
      chat_id: msg.chat.id,
      message_id: msg.message_id,
    };
    let text;

    switch (action) {
      case "menu":
        bot.sendMessage(msg.chat.id, "Меню", optionsMenu);
        break;
      default:
        menuObject.Rent(action, opts, bot);
        menuObject.Support(action, opts, bot);
        menuObject.CreateRent(action, opts, bot);
        menuObject.Language(action, opts, bot);
        //menuObject.CreateRent(action, opts, bot);
        //menuObject.Rent(action, opts, bot);
        //menuObject.Rent(action, opts, bot);
        break;
    }

    //bot.editMessageText(text, opts);
  });
};
