const expressSession = require('express-session');
const pgSession = require('connect-pg-simple')(expressSession);
const pg = require('pg');
const { host, username, password, database } = require('../config/database');

module.exports = expressSession({
  store: new pgSession({
    pool: new pg.Pool({
      connectionString: `postgres://${username}:${password}@${host}:5432/${database}`,
    }),
  }),
  secret: 'senhaSuperSecreta',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000,
  },
});
