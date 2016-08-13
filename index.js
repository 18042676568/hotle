if (process.env.NODE_ENV === 'production') {
  require('./src/server.prod');
} else {
  require('./src/server.dev');
}
