const React = require('react');

module.exports = function Layout({ userName, children }) {
  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./css/index.css" />
        <title>HuntFlow</title>
      </head>

      <body>

        <nav className="navbar">
          <form className="logo-search">
            <button type="submit">
              <img src="./images/search.gif" alt="search" />
              HuntFlow
            </button>
            <input type="search" name="logo-search" placeholder="Найти вакансию..." required />
          </form>
          <p className="separator">||</p>
          <a className="nav-link" href="/">
            Список моих вакансий
          </a>
          <p className="separator">||</p>
          <a className="nav-link" href="/">
            Создать новую вакансию
          </a>
          <p className="separator">||</p>
          <p className="fill" />
          <div className="nav-right">
            <a className="welcome" href="/">
              {userName}
            </a>
            <a className="logout" href="/">
              Выйти
            </a>
          </div>
        </nav>

        <main className="main">
          {children}
        </main>

      </body>
    </html>
  );
};
