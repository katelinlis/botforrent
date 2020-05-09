exports.FindRent = (bot, opts) => {
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

exports.RentTypeSet = (bot, opts) => {
  text = "выберите тип";
  opts.reply_markup = JSON.stringify({
    inline_keyboard: [
      [{ text: "Комната", callback_data: "TypeSet1" }],
      [{ text: "Квартира", callback_data: "TypeSet2" }],
      [{ text: "Аппартаменты", callback_data: "TypeSet3" }],
      [{ text: "Дом", callback_data: "TypeSet4" }],
      [{ text: "Назад", callback_data: "FindRent" }],
    ],
  });
  bot.editMessageText(text, opts);
};

exports.RentPriceSet = (bot, opts) => {
  text = "Введите сумму или 10000-20000";
  opts.reply_markup = JSON.stringify({
    inline_keyboard: [[{ text: "Назад", callback_data: "FindRent" }]],
  });
  bot.editMessageText(text, opts);
};

exports.RentSetLocation = (bot, opts) => {
  text = "Введите адрес или отправьте локацию где вас интересует жилье";
  opts.reply_markup = JSON.stringify({
    inline_keyboard: [[{ text: "Назад", callback_data: "FindRent" }]],
  });
  bot.editMessageText(text, opts);
};

exports.RentSetFloor = (bot, opts) => {
  text = "Установите минимальный этаж и до какого искать";
  opts.reply_markup = JSON.stringify({
    inline_keyboard: [
      [{ text: "Не минимальный этаж", callback_data: "RentNotFirstFloor" }],
      [{ text: "Не последний этаж", callback_data: "RentNotEndFloor" }],
      [{ text: "Назад", callback_data: "FindRent" }],
    ],
  });
  bot.editMessageText(text, opts);
};

exports.RentFind = (bot, opts) => {
  text = "Поиск";
  bot.editMessageText(text, opts);
};
