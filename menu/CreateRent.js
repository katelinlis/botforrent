exports.CreateRent = (bot, opts) => {
  text = "Поиск жилья, параметры";
  opts.reply_markup = JSON.stringify({
    inline_keyboard: [
      [{ text: "Тип жилья", callback_data: "RentTypeSet" }],
      [{ text: "Стоимость", callback_data: "RentPriceSet" }],
      [{ text: "Местоположение", callback_data: "RentSetLocation" }],
      [{ text: "Этажность", callback_data: "RentSetFloor" }],
      [{ text: "Искать", callback_data: "RentFind" }],
      [{ text: "Назад", callback_data: "menu" }],
    ],
  });
  bot.editMessageText(text, opts);
};
