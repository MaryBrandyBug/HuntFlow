require('dotenv').config();
require('@babel/register');

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const mainRegistration = require('./src/routers/mainRegistration.router');
const logout = require('./src/routers/logout.router');
const mainRoute = require('./src/routers/MainRoute')

const { PORT } = process.env ?? 3001;
const { SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const sessionConfig = {
  name: 'Username',
  store: new FileStore(),
  secret: SESSION_SECRET ?? 'mySecretPass',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 1000,
    httpOnly: true,
  },
};
app.use(session(sessionConfig));

app.use('/', mainRegistration);
app.use('/logout', logout);
app.use('/main', mainRoute);

app.listen(PORT, () => {
  console.log('Сервер запущен на 3000 порту!');
});
