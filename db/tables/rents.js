var database = require("../index");
const db = database.get();
//Create table regions
db.query(
  "CREATE TABLE if not exists rents ( " +
    "uid bigserial," +
    "owner bigint," +
    "name character varying(50)," +
    "about character varying(50)," +
    "City character varying(50)," +
    "Region character varying(50)," +
    "district character varying(50)," +
    "StreetHouse character varying(50)" +
    "floor smallint," +
    "Maxfloor smallint," +
    "SquareMeters character varying(50)," +
    "typeofrent character varying(50)," +
    "price character varying(50)," +
    "location point," +
    "PRIMARY KEY (uid)" +
    ");"
);

exports.CreateRegion = (location, owner, name) => {
  const query =
    "INSERT INTO regions(name,location,owner) VALUES($1,$2, $3) RETURNING *";
  const values = [name, location.latitude + "," + location.longitude, owner];
  db.query(query, values, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows[0]);
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    }
  });
};

exports.findRegion = (owner) => {
  const query = "SELECT uid,name,location,owner from regions where owner = $1";
  const values = [owner];
  return new Promise(function (resolve, reject) {
    db.query(query, values, (err, res) => {
      if (err) {
        reject(err.stack);
      } else {
        if (res.rows.length > 0) resolve(res.rows[0]);
        else reject("Not Found");
      }
    });
  });
};
