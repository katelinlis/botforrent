//import config from "config";
const config = require('config');

const dbConfig = config.get("Customer.dbConfig");
//import db from "../index.js"
const db = require('../index.js');
db.init(dbConfig);

const table = db.table

test('Create User db', () => {

    return table.user.RegisterUser("asdssa","asdasdas","sadsda",0).then((status) => {
        expect(status).toBe("success")

    }).catch((err) => {
        expect(err).toEqual({ error: "err", errNum: 400 })
    })
});
