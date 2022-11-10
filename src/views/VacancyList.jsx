const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <main className="main">

        <div className="vacancy-list-title">
          Список моих вакансий
          <br />
          <span>
            ( всего:
            {' '}
            <b>42</b>
            {' '}
            )
          </span>
        </div>

        <div className="vacancy-list">
          <div>
            <b>1</b>
            {' '}
            из
            {' '}
            <b>42</b>
          </div>
          <a href="/">
            Вакансия
            {' '}
            <b>"JavaScript-разработчик"</b>
            <br />
            в компанию "Elbrus Bootcamp"
            <br />
            Всего кандидатов:
            {' '}
            <b>42</b>
            {' '}
            &nbsp;||&nbsp;
            Дата создания:
            {' '}
            <b>09.11.2022</b>
          </a>
        </div>

        <div className="vacancy-list">
          <div>
            <b>2</b>
            {' '}
            из
            {' '}
            <b>42</b>
          </div>
          <a href="/">
            Вакансия
            {' '}
            <b>"JavaScript-разработчик"</b>
            <br />
            в компанию "Elbrus Bootcamp"
            <br />
            Всего кандидатов:
            {' '}
            <b>42</b>
            {' '}
            &nbsp;||&nbsp;
            Дата создания:
            {' '}
            <b>09.11.2022</b>
          </a>
        </div>

        <div className="vacancy-list">
          <div>
            <b>3</b>
            {' '}
            из
            {' '}
            <b>42</b>
          </div>
          <a href="/">
            Вакансия
            {' '}
            <b>"JavaScript-разработчик"</b>
            <br />
            в компанию "Elbrus Bootcamp"
            <br />
            Всего кандидатов:
            {' '}
            <b>42</b>
            {' '}
            &nbsp;||&nbsp;
            Дата создания:
            {' '}
            <b>09.11.2022</b>
          </a>
        </div>

      </main>
    </Layout>
  );
};
