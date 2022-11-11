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
