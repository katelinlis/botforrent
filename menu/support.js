exports.Support = (bot, opts) => {
  opts.reply_markup = JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "DonationAlerts",
          url: "https://www.donationalerts.com/r/katelinlis",
        },
      ],
      [{ text: "Boosty", url: "https://boosty.to/katelinlis" }],
      [{ text: "Qiwi", url: "https://qiwi.me/katelinlis" }],
      [{ text: "Назад", callback_data: "menu" }],
    ],
  });
  bot.editMessageText("поддержка разработки бота", opts);
};
