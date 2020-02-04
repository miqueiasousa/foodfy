const express = require('express');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes');

require('./database/index');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
);

app.use(routes);

app.listen(3333, () => console.log('Server on at port 3333'));
