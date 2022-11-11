require('@babel/register');
const multer = require('multer');
const express = require('express');
const morgan = require('morgan');

const renderTemplate = require('./lib/renderTemplate');

const Layout = require('./views/Layout');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
  renderTemplate(Layout, null, res);
});

//* Настройка и проверка загрузки
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});


const uploadStorage = multer({ storage });

// * Скачать один файл
app.post('/upload/single', uploadStorage.single('image'), (req, res) => {
  console.log(req.file);
  return res.send('Single file');
});

app.listen(PORT, () => {
  console.log('Сервер фурычит');
});

// ? скачивает и картинки и pdf
