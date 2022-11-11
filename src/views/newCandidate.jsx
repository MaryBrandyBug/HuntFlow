const React = require('react');
const MainLayout = require('./MainLayout');

module.exports = function newCandidate({ userName, findVac }) {
  return (
    <MainLayout userName={userName}>
      <link rel="stylesheet" href="/css/newVacancy.css" />
      <form method="POST" action="/candidate" className="vacancyForma">
        <h2>Добавление Кандидата</h2>
        <div className="container">
          <div className="divInput">
            <label htmlFor="">Имя: </label>
            <br />
            <input className="inputKandidat" type="text" name="name" id="" required />
          </div>
          <div className="divInput">
            <label htmlFor="">Фамилия: </label>
            <br />
            <input className="inputKandidat" type="text" name="surname" id="" required />
          </div>
          <div className="divInput">
            <label htmlFor="">Отчество: </label>
            <br />
            <input className="inputKandidat" type="text" name="middlename" id="" required />
          </div>
          <div className="divInput">
            <label htmlFor="">Email: </label>
            <br />
            <input className="inputKandidat" type="text" name="email" id="" required />
          </div>
          <div className="divInput">
            <label htmlFor="">Телефон: </label>
            <br />
            <input className="inputKandidat" type="text" name="phone" id="" required />
          </div>
          <div className="divInput">
            <label htmlFor="">Резюме: </label>
            <br />
            <input className="inputKandidat" type="file" name="resume" id="" required />
          </div>
          <div className="divInput">
            <label htmlFor="">Опыт работы: </label>
            <br />
            <input className="inputKandidat" type="text" name="experience" id="" required />
          </div>
          <div className="divInput">
            <label htmlFor="">Местонахождение: </label>
            <br />
            <input className="inputKandidat" type="text" name="location" id="" required />
          </div>
          <div className="divInput">
            <label htmlFor="">Комментарий: </label>
            <br />
            <input className="inputKandidat" type="text" name="comment" id="commentInput" />
          </div>
        </div>
        <br />
        <input type="hidden" name="VacancyId" value={findVac.id} />
        <div id="canForm">
        <button className="welcome" className="fontNew" type="submit" id="canBtn">Добавить</button>
        </div>
        <br />
        <br />
      </form>
    </MainLayout>
  );
};
