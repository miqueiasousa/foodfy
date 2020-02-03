const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');

require('./database/index');

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(routes)

app.listen(3333, () => console.log('Server on at port 3333'))
