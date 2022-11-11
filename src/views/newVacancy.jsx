const React = require('react');
const MainLayout = require('./MainLayout');

module.exports = function newVacancy({ userName }) {
  return (
    <MainLayout userName={userName}>
      <form method="POST" action="/main">
        <div>
          <label htmlFor="">Название вакансии</label>
          <input type="text" name="title" id="" required />
        </div>
        <div>
          <label htmlFor="">Название компании</label>
          <input type="text" name="company" id="" required />
        </div>
        <button type="submit">Создать вакансию</button>
      </form>
    </MainLayout>
  );
};
