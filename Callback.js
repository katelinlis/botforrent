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
  bot.on("message", (msg) => {
    console.log(msg);

    //menuObject.MonitoringMessages[msg.from.id];

    let opts = {
      chat_id: msg.from.id,
      message_id: menuObject.MenuUsersID[msg.from.id],
      msg: msg.text,
    };

    menuObject.CreateRentParamsSubmit(
      menuObject.MonitoringMessages[msg.from.id],
      opts,
      bot
    );
  });
  bot.on("callback_query", function onCallbackQuery(callbackQuery) {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    let opts = {
      chat_id: msg.chat.id,
      message_id: msg.message_id,
    };
    console.log(action);

    switch (action) {
      case "menu":
        menuObject.MonitoringMessages[opts.chat_id] = action;
        opts.reply_markup = optionsMenu.reply_markup;
        bot.editMessageText("Меню", opts);
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
