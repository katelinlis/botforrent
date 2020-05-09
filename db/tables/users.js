var database = require("../index");
const db = database.get();
//Create table regions
db.query(
  "CREATE TABLE if not exists users(uid bigserial,first_name character varying(34),last_name character varying(34),PRIMARY KEY (uid));"
);
