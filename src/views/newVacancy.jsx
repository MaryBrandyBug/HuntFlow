const React = require('react');
const MainLayout = require('./MainLayout');

module.exports = function newVacancy({ userName }) {
  return (
    <MainLayout userName={userName}>
      <link rel="stylesheet" href="/css/newVacancy.css" />
      <form method="POST" action="/main" className="vacancyForma">
        <div>
          <h2>Создание Новой Вакансии</h2>
          <br />
          <label htmlFor="">Название вакансии</label>
          <br />
          <input type="text" name="title" id="" className="inputVacancy" required />
        </div>
        <br />
        <div>
          <label htmlFor="">Название компании</label>
          <br />
          <input type="text" name="company" id="" className="inputVacancy" required />
        </div>
        <br />
        <button className="welcome" type="submit">Создать</button>
        <br />
        <br />
      </form>
    </MainLayout>
  );
};

