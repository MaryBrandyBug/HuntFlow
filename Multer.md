#Multer — это middleware для фреймворка express для обработки `multipart/form-data`, нужная в первую очередь при загрузке файлов. Написана как обертка над [busboy](https://github.com/mscdex/busboy) для ее максимально эффективного использования.

**ВАЖНО**: Multer не обрабатывает никакой другой тип форм, кроме `multipart/form-data`.

полезные ссылки - 
- официальный пакет [на gitHub](https://github.com/expressjs/multer/blob/master/doc/README-ru.md)
- [Загружать файлы с помощью NodeJS + Multer](https://blog.loginradius.com/engineering/upload-files-with-node-and-multer/)


-  `npm init -y`
- `npm i express dotenv`
- `npx create-gitignore node`
- `npx eslint --init`
- `npm i -D nodemon morgan`
  можно подправить скрипты

  ```json
  "dev": "nodemon src/index.js --ext js,jsx",
  "start": "node src/index.js",
  ```
  
2. Install React(ssr) Babel

- `npm i @babel/core @babel/preset-env @babel/preset-react @babel/register react react-dom`

- `touch .babelrc`   //* создать файл из терминала

добавить в файл 
  ```json
  {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }
  ```

 Добавление Мультера
`$ npm install --save multer`

```js
const multer = require('multer');
```

Теперь создайте папку с именем `uploads`, где мы будем хранить загруженные файлы.

# Настройка и проверка загрузки

Сейчас мы находимся на очень важном этапе — настройке `diskStorage`. `DiskStorage`— это метод, предоставляемый multer, в котором мы настраиваем место назначения файла, имя файла, а также можем добавить проверки относительно типа файла. Эти настройки соответствуют потребностям вашего проекта. Ниже я оставлю элементарный пример конфигурации.

```js
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  },
})
```

В приведенной выше конфигурации мы упомянули место назначения для загруженных файлов, а также изменили имя файла.

Предоставление маршрута загрузки

```js
const uploadStorage = multer({ storage: storage })

// загрузка одного файла
app.post("/upload/single", uploadStorage.single("file"), (req, res) => {
  console.log(req.file)
  return res.send("Single file")
})

//загрузка нескольких фалов(непроверена)
app.post("/upload/multiple", uploadStorage.array("file", 10), (req, res) => {
  console.log(req.files)
  return res.send("Multiple files")
})
```

В приведенном выше фрагменте кода мы создали 2 маршрута POST для отправки файлов. Первый `/upload/single`маршрут получает только один файл, обратите внимание, что переменная uploadStorage получает наши настройки diskStorage. Как промежуточное ПО в маршруте вызывает `single`метод загрузки одного файла. Маршрут `/upload/multiple`получает несколько файлов, но с максимальным ограничением в 10 файлов, обратите внимание, что переменная uploadStorage теперь вызывает метод ʻarray` для загрузки нескольких файлов.

Файл `views` 
```jsx
const React = require('react');  

function Layout({ children }) {
return (
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Document</title>
</head>
<hr />
<h1>Скачать</h1>
<hr />

<form method="POST" action="/upload/single" encType="multipart/form-data">
<input type="file" name="image" />
<input type="submit" />
</form>

<hr />
<body>
{children}
</body>
</html>
);
}
module.exports = Layout;
```

`encType="multipart/form-data` 
Определяет способ кодирования данных формы при их отправке на сервер. Обычно устанавливать значение атрибута `enctype` не требуется, данные вполне правильно понимаются на стороне сервера. Однако если используется поле для отправки файла `(input type="file")`, следует определить атрибут enctype как `multipart/form-data`. [ссылка htmlbook](http://htmlbook.ru/html/form/enctype)