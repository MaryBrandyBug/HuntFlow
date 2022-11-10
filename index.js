const nodemailer = require('nodemailer');
const express = require('express');



function sendEmail(to) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
   
    auth: {
      user: 'sende.mail.function@gmail.com', // process.env.email,
      pass: 'jbysumyjjsvgidsz', // process.env.password
    },
  });

  const mailOptions = {
    from: 'sende.mail.function@gmail.com',
    to: to, // емайл адреса получателей
    subject: 'Вы выбраны', // заголовок
    text: 'Приглашение кандидата', // заголовок
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


// ? блок со строкой если послать html документ
// const mailOptions = {
//   from: 'sende.mail.function@gmail.com',
//   to: to, // емайл адреса получателей
//   subject: 'Пробуем HTML ',
//   html: '<h1>Welcome</h1><p>That was easy!</p>'
// };