exports.Language = (bot, opts) => {
  text = "Выбор языка";
  opts.reply_markup = JSON.stringify({
    inline_keyboard: [
      [{ text: "Русский", callback_data: "SetRussian" }],
      [{ text: "English", callback_data: "SetEnglish" }],
      [{ text: "Назад", callback_data: "menu" }],
    ],
  });
  bot.editMessageText(text, opts);
};
