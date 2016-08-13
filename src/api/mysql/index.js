const driver = require('mysql');
const { mysql } = require('../dbconfig');

function connect() {
  return driver.createConnection(mysql);
}

function query(connection, expression, params) {
  return new Promise((resolve, reject) => {
    connection.query(expression, params, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  connect,
  query,
};
