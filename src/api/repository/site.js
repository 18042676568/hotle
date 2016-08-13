const co = require('co');
const { connect, query } = require('../mysql');

const getPagelist = co.wrap(function* getPagelist() {
  const connection = connect();
  const result = yield query(
    connection,
    `
    SELECT * FROM test.testTable
    `,
    []
  );

  connection.end();
  return result;
});

module.exports = {
  getPagelist,
};
