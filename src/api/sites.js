const express = require('express');
const router = express.Router();
const co = require('co');
const { getPagelist } = require('./repository/site');

router.get('/', (req, res) => {
  co(function*() {
    const list = yield getPagelist();
    res.send(list);
  }).catch(err => {
    res.status(500);
    res.send({ message: 'export.error', err });
  });
});

router.use('*', (req, res, next) => {
  res.status(404);
  res.json({ message: 'api.not.found' });
});

module.exports = router;
