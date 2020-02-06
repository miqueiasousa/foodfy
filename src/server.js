const express = require('express');
const morgan = require('morgan');
const path = require('path');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const session = require('./config/session');

require('./database/index');

const app = express();

nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
  autoescape: false,
  express: app,
  watch: true,
});

app.set('view engine', '.njk');

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(session);
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
);

app.use(routes);

app.listen(3333, () => console.log('Server on at port 3333'));
