const Rent = require("./rent");
const Support = require("./support");
const CreateRent = require("./CreateRent");
const Language = require("./language");

//ID : Value
exports.MonitoringMessages = [];
//UserID : MessagesID
exports.MenuUsersID = [];

exports.Rent = (action, opts, bot) => {
  this.MonitoringMessages[opts.chat_id] = action;
  switch (action) {
    case "FindRent":
      Rent.FindRent(bot, opts);
      break;
    case "RentTypeSet":
      Rent.RentTypeSet(bot, opts);
      break;
    case "RentPriceSet":
      Rent.RentPriceSet(bot, opts);
      break;
    case "RentSetFloor":
      Rent.RentSetFloor(bot, opts);
      break;
    case "RentFind":
      Rent.RentFind(bot, opts);
      break;
  }
};

exports.Support = (action, opts, bot) => {
  this.MonitoringMessages[opts.chat_id] = action;
  switch (action) {
    case "Support":
      Support.Support(bot, opts);
      break;
  }
};

exports.Language = (action, opts, bot) => {
  this.MonitoringMessages[opts.chat_id] = action;
  switch (action) {
    case "Language":
      Language.Language(bot, opts);
      break;
  }
};

exports.CreateRent = (action, opts, bot) => {
  this.MonitoringMessages[opts.chat_id] = action;
  switch (action) {
    case "CreateRent":
      CreateRent.CreateRent(bot, opts);
      break;
    case "CreateRentSetType":
      CreateRent.CreateRentSetType(bot, opts);
      break;
    case "CreateRentSetPrice":
      CreateRent.CreateRentSetPrice(bot, opts);
      break;
    case "CreateRentWriteFloor":
      CreateRent.CreateRentWriteFloor(bot, opts);
      break;
    case "SendRentObject":
      CreateRent.SendRentObject(bot, opts);
      break;
    default:
      console.log("paramsSubmit");
      CreateRent.ParamsSubmit(action, bot, opts);
      break;
  }
};
exports.CreateRentParamsSubmit = CreateRent.ParamsSubmit;
