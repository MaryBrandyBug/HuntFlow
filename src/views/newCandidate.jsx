const React = require('react');
const MainLayout = require('./MainLayout');

module.exports = function newCandidate({ userName, findVac }) {
  return (
    <MainLayout userName={userName}>
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
