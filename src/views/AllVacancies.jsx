const React = require('react');
const MainLayout = require('./MainLayout');

module.exports = function AllVacancies({ userName, vacancies, candidates }) {
  return (
    <MainLayout userName={userName}>
      {/* <script defer src="./js/register.js" /> */}
      <div className="vacancy-list-title">
        Список моих вакансий
        <br />
        <span>
          ( всего:
          {' '}
          <b>{vacancies.length}</b>
          {' '}
          )
        </span>
      </div>

      {vacancies.sort((a, b) => b.createdAt - a.createdAt)
        .map((el, i) => (
          <div key={el.id} className="vacancy-list">
            <div>
              <b>{i + 1}</b>
              {' '}
              из
              {' '}
              <b>{vacancies.length}</b>
            </div>
            <a href={`/main/vacancy/${el.id}`}>
              Вакансия
              {' '}
              <b>
                &quot;
                {el.title}
                &quot;
              </b>
              <br />
              в компанию &quot;
              {el.company}
              &quot;
              <br />
              Всего кандидатов:
              {' '}
              <b>{candidates.filter((elem) => elem.VacancyId === el.id).length}</b>
              {' '}
              &nbsp;||&nbsp;
              Дата создания:
              {' '}
              <b>{el.createdAt.toLocaleDateString()}</b>
            </a>
          </div>
        ))}

    </MainLayout>
  );
};
