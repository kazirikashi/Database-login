const { Client } = require("pg");
const { async } = require("total.js/utils");

const client = new Client({
  host: "127.0.0.1",
  user: "postgres",
  port: "5432",
  password: "123",
  database: "inventory",
});

function validateUser(userName, password) {
  return new Promise(function (resolve) {
    client.connect();
    var q = `SELECT * FROM public.user where username = '${userName}' and password = '${password}';`;
    try {
      console.log("test", q);
      client.query(q, (err, res) => {
        console.log("test");
        if (!err) {
          if (res.rowCount > 0) {
            console.log("Access Granted!", res.rows);
          } else {
            console.log("Access Denied!", userName, "not Found");
          }
        } else {
          console.log("Access Denied!", userName, "not Found");
        }
        client.end;
      });
    } catch (error) {
      console.log(error);
    }
    resolve("asd");
  });
}

module.exports = {
  validateUser,
};
