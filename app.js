require('@babel/register');
require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const dbConnectCheck = require('./db/dbConnectCheck');

const app = express();
const PORT = process.env.PORT ?? 3000;
const SESSION_SECRET = process.env.SESSION_SECRET ?? 'qwerty';

// dbConnectCheck(); // !!! Проверка подключения к БД

const mainRegistration = require('./src/routers/mainRegistration.router');
const logout = require('./src/routers/logout.router');
const mainRoute = require('./src/routers/mainRoute');

app.use(logger('dev')); // !!! 'dev' - параметр, отвечающий за стиль отображения информации logger'ом (ещё есть 'short' и 'tiny')
app.use(express.json()); // !!! Для расшифровки запросов
app.use(express.urlencoded({ extended: false })); // !!! Для расшифровки запросов ({ extended: false } - увеличение объёма информации)
app.use(express.static(path.join(__dirname, './public'))); // !!! Для подключения на "фронте" файлов из папки "public"
// console.log('path ===>', path.join(__dirname, './public'));

const sessionConfig = {
  name: 'Username',
  store: new FileStore(),
  secret: SESSION_SECRET,
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
  console.log(`Server started at PORT: ${PORT}`);
});
