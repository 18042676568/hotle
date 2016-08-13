const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());
router.use('/sites', require('./sites'));

// 其他未匹配的都会执行下面代码
router.use('*', (req, res) => {
  res.status(404);
  res.json({ message: 'api.not.found' });
});

module.exports = router;
