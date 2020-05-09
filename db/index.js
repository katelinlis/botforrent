const { Pool } = require("pg");
var pool;

exports.init = (conf) => {
  // console.log(pool);
  if (!pool) {
    pool = new Pool({
      user: conf.user,
      host: conf.host,
      database: conf.database,
      password: conf.password,
      port: 5432,
    });
  }
};

exports.get = () => {
  if (!pool) {
    throw new Error(
      "The db pool has not been initialized, call init({}) prior to get()."
    );
  }

  return pool;
};
