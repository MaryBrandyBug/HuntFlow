require('dotenv').config();
require('@babel/register');

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { PORT } = process.env ?? 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log('Сервер запущен на 3000 порту!');
});
