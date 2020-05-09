const Rent = require("./rent");
const Support = require("./support");
const CreateRent = require("./CreateRent");
const Language = require("./language");

exports.Rent = (action, opts, bot) => {
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
  switch (action) {
    case "Support":
      Support.Support(bot, opts);
      break;
  }
};

exports.Language = (action, opts, bot) => {
  switch (action) {
    case "Language":
      Language.Language(bot, opts);
      break;
  }
};

exports.CreateRent = (action, opts, bot) => {
  switch (action) {
    case "CreateRent":
      CreateRent.CreateRent(bot, opts);
      break;
  }
};
