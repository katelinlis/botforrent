var database = require("../index");
const db = database.get();
//Create table regions
db.query(
  "CREATE TABLE if not exists users(uid bigserial,id integer,first_name character varying(34),username character varying(34),last_name character varying(34),PRIMARY KEY (uid));"
);

exports.RegisterUser = (first_name, last_name, username, id) => {
  const query =
    "INSERT INTO users(first_name,last_name,id,username) VALUES($1,$2, $3,$4) RETURNING *";
  const values = [first_name, last_name, id, username];

  this.FindByID(id).catch((status) => {
    if (status === false) {
      db.query(query, values, (err, res) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(res.rows[0]);
          // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
        }
      });
    }
  });
};

exports.FindByID = function (id) {
  const query = "SELECT username from users where id = $1";
  const values = [id];

  return new Promise(function (resolve, reject) {
    db.query(query, values, (err, res) => {
      if (err) {
        //console.log(err.stack);
        reject(err.stack);
      } else {
        console.log(res.rows[0]);
        if (res.rows[0]) resolve(res.rows[0]);
        else reject(false);
        // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
      }
    });
  });
};
