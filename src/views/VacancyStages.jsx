const React = require('react');
const MainLayout = require('./MainLayout');

module.exports = function VacancyStages({ userName, currVacancy, candidateLength }) {
  return (
    <MainLayout userName={userName}>
      {/* <script defer src="./js/register.js" /> */}

      <div className="vacancy-title">
        Вакансия
        {' '}
        <b>
          &quot;
          {currVacancy.title}
          &quot;

        </b>
        <br />
        в компанию &quot;
        {currVacancy.company}
        &quot;
        <br />
        Всего кандидатов:
        {' '}
        <b>{candidateLength}</b>
        {' '}
        &nbsp;||&nbsp;
        Дата создания:
        {' '}
        <b>{currVacancy.createdAt.toLocaleDateString()}</b>
      </div>

      <div className="vacancy-stage-navbar">
        <a href={`/newcandidate/${currVacancy.id}`}>
          Добавить
          <br />
          кандидата
        </a>
        <a href="/">
          Новые
          <br />
          кандидаты
          <br />
          (за неделю)
          <span>
            Всего:
            {' '}
            <b>42</b>
          </span>
        </a>
        <a href="/">
          Отправлено
          <br />
          письмо-
          <br />
          приглашение
          <span>
            Завершено:
            {' '}
            <b>7</b>
            <br />
            Всего:
            {' '}
            <b>42</b>
          </span>
        </a>
        <a href="/">
          Назначен
          <br />
          звонок-
          <br />
          скрининг
          <span>
            Завершено:
            {' '}
            <b>7</b>
            <br />
            Всего:
            {' '}
            <b>42</b>
          </span>
        </a>
        <a href="/">
          Назначено
          <br />
          видео-
          <br />
          интервью
          <span>
            Завершено:
            {' '}
            <b>7</b>
            <br />
            Всего:
            {' '}
            <b>42</b>
          </span>
        </a>
        <a href="/">
          Резюме
          <br />
          передано
          <br />
          заказчику
          <span>
            Завершено:
            {' '}
            <b>7</b>
            <br />
            Всего:
            {' '}
            <b>42</b>
          </span>
        </a>
        <a href="/">
          Назначено
          <br />
          интервью
          <br />
          с заказчиком
          <span>
            Завершено:
            {' '}
            <b>7</b>
            <br />
            Всего:
            {' '}
            <b>42</b>
          </span>
        </a>
        <a href="/">
          Выставлен
          <br />
          оффер
          <span>
            Завершено:
            {' '}
            <b>7</b>
            <br />
            Всего:
            {' '}
            <b>42</b>
          </span>
        </a>
        <a href="/">
          Приняли
          <br />
          оффер и вышли
          <br />
          на работу
          <span>
            Завершено:
            {' '}
            <b>7</b>
            <br />
            Всего:
            {' '}
            <b>42</b>
          </span>
        </a>
        <a href="/">
          Отказы
          <span>
            Всего:
            {' '}
            <b>42</b>
          </span>
        </a>
      </div>

    </MainLayout>
  );
};
