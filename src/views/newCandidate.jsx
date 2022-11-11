const React = require('react');
const MainLayout = require('./MainLayout');

module.exports = function newCandidate({ userName, findVac }) {
  return (
    <MainLayout userName={userName}>
      <link rel="stylesheet" href="/css/newVacancy.css" />
      <form method="POST" action="/main" className="vacancyForma">
        <h2>Добавление Кандидата</h2>
        <div className="container">
          <div>
            <label htmlFor="">Имя: </label>
            <br />
            <input className="inputKandidat" type="text" name="name" id="" required />
          </div>
          <div>
            <label htmlFor="">Фамилия: </label>
            <br />
            <input className="inputKandidat" type="text" name="surname" id="" required />
          </div>
          <div>
            <label htmlFor="">Отчество: </label>
            <br />
            <input className="inputKandidat" type="text" name="middlename" id="" required />
          </div>
          <div>
            <label htmlFor="">Email: </label>
            <br />
            <input className="inputKandidat" type="text" name="email" id="" required />
          </div>
          <div>
            <label htmlFor="">Телефон: </label>
            <br />
            <input className="inputKandidat" type="text" name="phone" id="" required />
          </div>
          <div>
            <label htmlFor="">Резюме: </label>
            <br />
            <input className="inputKandidat" type="file" name="resume" id="" required />
          </div>
          <div>
            <label htmlFor="">Опыт работы: </label>
            <br />
            <input className="inputKandidat" type="text" name="experience" id="" required />
          </div>
          <div>
            <label htmlFor="">Местонахождение: </label>
            <br />
            <input className="inputKandidat" type="text" name="location" id="" required />
          </div>
          <div>
            <label htmlFor="">Комментарий: </label>
            <br />
            <input className="inputKandidat" type="text" name="comment" id="" />
          </div>
        </div>
        <br />
        <button className="welcome" className="fontNew" type="submit">Добавить</button>
        <br />
        <br />
=======
      <form method="POST" action="/candidate">
        <div>
          <label htmlFor="">Имя</label>
          <input type="text" name="name" id="" required />
        </div>
        <div>
          <label htmlFor="">Фамилия</label>
          <input type="text" name="surname" id="" required />
        </div>
        <div>
          <label htmlFor="">Отчество</label>
          <input type="text" name="middlename" id="" required />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" name="email" id="" required />
        </div>
        <div>
          <label htmlFor="">Телефон</label>
          <input type="text" name="phone" id="" required />
        </div>
        <div>
          <label htmlFor="">Резюме</label>
          <input type="text" name="resume" id="" required />
        </div>
        <div>
          <label htmlFor="">Опыт работы</label>
          <input type="text" name="experience" id="" required />
        </div>
        <div>
          <label htmlFor="">Местонахождение</label>
          <input type="text" name="location" id="" required />
        </div>
        <div>
          <label htmlFor="">Комментарий</label>
          <input type="text" name="comment" id="" />
        </div>
        <input type="hidden" name="VacancyId" value={findVac.id} />
        <button type="submit">Добавить кандидата</button>

      </form>
    </MainLayout>
  );
};
