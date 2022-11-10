Таким образом, нижний код, вероятно, перестанет работать с **Gmail** . Решение состоит в том, чтобы **включить двухэтапную проверку** и **сгенерировать пароль приложения** , затем вы можете использовать сгенерированный пароль для отправки электронных писем с помощью _nodemailer_ . Для этого вам необходимо сделать следующее:

1.  Перейдите в свою учетную запись Google по адресу [https://myaccount.google.com/.](https://myaccount.google.com/)
2.  Перейти к **безопасности**
3.  В разделе _«Вход в Google»_ выберите **двухэтапную аутентификацию** — здесь вы должны подтвердить себя, в моем случае это было с номером телефона и кодом подтверждения, отправленным в виде текстового сообщения. После этого вы сможете включить двухэтапную аутентификацию.
4.  Назад к **безопасности** в разделе _«Вход в Google»_ выберите « **Пароли приложений ».**
5.  В раскрывающемся списке «Выбрать приложение» выберите « _Другое_ **» _(пользовательское имя)_** и введите имя, _например, nodemailer._
6.  Появится модальное диалоговое окно с паролем. Получите этот пароль и используйте его в своем коде.
7. или перейти по  [ссылке](https://myaccount.google.com/apppasswords) и установите «Пароль приложения».

package/nodemailerустанавливаем модули [NPM_nodemailer](https://www.npmjs.com/)
```
npm install nodemailer
npm i express
```

[архив примера](https://cloud.mail.ru/public/Ze2e/jrQtz8MZy)

файл `index.js`
```js
const nodemailer = require('nodemailer');
const express = require('express');  

function sendEmail(to) {
const transporter = nodemailer.createTransport({
host: 'smtp.gmail.com',
auth: {
user: 'mrtelovek@gmail.com', // process.env.email,
pass: 'ivkalfejwvewlvkc', // process.env.password
},
});
const mailOptions = {
from: 'sende.mail.function@gmail.com',
to: to, // емайл адреса получателей
subject: 'Sending Email using Node.js', //заголовок
text: 'That was easy!', //текст сообщения
};
transporter.sendMail(mailOptions, (error, info) => {
if (error) {
console.log(error);
} else {
console.log(`Email sent: ${info.response}`);
}
});
}

sendEmail('bull323@mail.ru')
```

если хотим отправить HTML меняем 
в блоке строку text: на вид:

```js
const mailOptions = {
from: 'sende.mail.function@gmail.com',
to: to, // емайл адреса получателей
subject: 'Пробуем HTML ',
html: '<h1>Welcome</h1><p>That was easy!</p>'
};
```

используется почта для отправки
sende.mail.function@gmail.com
`1234-qwer` - password

`jbysumyjjsvgidsz`  // пароль приложения nodemailer