const React = require('react');

module.exports = function Layout({ newUser, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title />
      </head>
      <body>
        {newUser
          ? (
            <div>
              <div className="top_bar">
                <div className="navigation">
                  <p>
                    Hello,
                    {' '}
                    {newUser}
                    !
                  </p>
                </div>
              </div>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/logout">Logout</a>
                </li>
              </ul>
            </div>
          )
          : (
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Something</a>
              </li>
            </ul>
          )}
        {children}
      </body>
    </html>
  );
};
