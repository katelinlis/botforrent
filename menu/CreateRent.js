//UserID: TypeSelect:TypeSet1... ReadySetPrice
//
//
exports.Selected = {
  101010: { TypeSelect: "TypeSet1", TypeSelect2: "TypeSet1" },
  101012: { TypeSelect: "TypeSet1", TypeSelect2: "TypeSet1" },
};
exports.SetStatusOfSelect = (number, Param, Value) => {
  this.Selected[number] = {};
  this.Selected[number][Param] = Value;
};
exports.getStatusOfSelect = (number, Param) => {
  if (this.Selected[number] && this.Selected[number][Param])
    return " - " + this.Selected[number][Param];
  else return "";
};

exports.getStatusOfSelectValue = (number, Param, Value) => {
  if (this.Selected[number] && this.Selected[number][Param])
    if (this.Selected[number][Param] === Value) {
      return "✔️";
    }
};

exports.ParamsSubmit = (action, bot, opts) => {
  if (
    action === "Комната" ||
    action === "Квартира" ||
    action === "Аппартаменты" ||
    action === "Дом"
  ) {
    this.SetStatusOfSelect(opts.chat_id, "TypeSelect", action);
    console.log(this.Selected);
    this.CreateRent(bot, opts);
  } else {
    //Todo релизовать на уровне Menu проверку на открытие пункт меню и начать отслеживать нужный вариант ответа

    switch (action) {
      case "CreateRentSetPrice":
        this.SetStatusOfSelect(opts.chat_id, "Price", opts.msg);
        this.CreateRent(bot, opts);
        break;
      case "CreateRentSetLocation":
        //Todo учитывать location

        this.SetStatusOfSelect(opts.chat_id, "Location", opts.msg);
        this.CreateRent(bot, opts);
        break;
      case "CreateRentWriteFloor":
        //Вид ответа 0-999
        this.SetStatusOfSelect(opts.chat_id, "Floor", msg.opts);
        this.CreateRent(bot, opts);
        break;
      case "CreateRentUploadPhoto":
        //Реализовать загрухку фотографий
        this.SetStatusOfSelect(opts.chat_id, "UploadPhoto", action);
        this.CreateRent(bot, opts);
        break;
    }
  }
};

exports.CreateRent = (bot, opts) => {
  console.log("dd");
  text = "Поиск жилья, параметры";
  opts.reply_markup = JSON.stringify({
    inline_keyboard: [
      [
        {
          text:
            "Тип жилья" + this.getStatusOfSelect(opts.chat_id, "TypeSelect"),
          callback_data: "CreateRentSetType",
        },
      ],
      [{ text: "Стоимость", callback_data: "CreateRentSetPrice" }],
      [{ text: "Местоположение", callback_data: "CreateRentSetLocation" }],
      [{ text: "Этажность", callback_data: "CreateRentWriteFloor" }],
      [{ text: "Фотография", callback_data: "CreateRentUploadPhoto" }],
      [{ text: "Создать", callback_data: "CreateRentDone" }],
      [{ text: "Назад", callback_data: "menu" }],
    ],
  });
  bot.editMessageText(text, opts);
};

//Todo реализовать установку типов и запись в базу

exports.CreateRentSetType = (bot, opts) => {
  text = "выберите тип";
  opts.reply_markup = JSON.stringify({
    inline_keyboard: [
      [{ text: "Комната", callback_data: "Комната" }],
      [{ text: "Квартира", callback_data: "Квартира" }],
      [{ text: "Аппартаменты", callback_data: "Аппартаменты" }],
      [{ text: "Дом", callback_data: "Дом" }],
      [{ text: "Назад", callback_data: "FindRent" }],
    ],
  });
  bot.editMessageText(text, opts);
};

exports.CreateRentSetPrice = (bot, opts) => {
  text = "Введите сумму или 10000-20000";
  opts.reply_markup = JSON.stringify({
    inline_keyboard: [[{ text: "Назад", callback_data: "FindRent" }]],
  });
  bot.editMessageText(text, opts);
};

exports.CreateRentSetLocation = (bot, opts) => {
  text = "Введите адрес или отправьте локацию где вас интересует жилье";
  opts.reply_markup = JSON.stringify({
    inline_keyboard: [[{ text: "Назад", callback_data: "FindRent" }]],
  });
  bot.editMessageText(text, opts);
};

exports.CreateRentWriteFloor = (bot, opts) => {
  text = "Установите минимальный этаж и до какого искать, например 3-9";
  opts.reply_markup = JSON.stringify({
    inline_keyboard: [
      [{ text: "Не минимальный этаж", callback_data: "RentNotFirstFloor" }],
      [{ text: "Не последний этаж", callback_data: "RentNotEndFloor" }],
      [{ text: "Назад", callback_data: "FindRent" }],
    ],
  });
  bot.editMessageText(text, opts);
};

exports.CreateRentUploadPhoto = () => {};

exports.SendRentObject = (bot, opts) => {
  text = "Поиск";
  bot.editMessageText(text, opts);
};
