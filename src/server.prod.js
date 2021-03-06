const express = require('express');
const path = require('path');
const api = require('./api');
const compression = require('compression');
const favicon = require('serve-favicon');

const app = express();

const port = process.env.PORT || 3000;

app.use(compression());

app.use('/dist', express.static(path.join(__dirname, '../', 'dist')));

app.use('/scripts', express.static(path.join(__dirname, '../', 'scripts')));

app.use('/images', express.static(path.join(__dirname, './', 'images')));

app.use(favicon(path.join(__dirname, '../favicon.ico')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile('html/index.html', { root: path.join(__dirname, '../') });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`server started at ${port}`);
});
