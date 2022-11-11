const React = require('react');
const MainLayout = require('./MainLayout');

module.exports = function VacancyStages({
  userName, currVacancy, candidateLength, stageName, children,
}) {
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
        <a className={stageName === 'stage1' ? 'active-stage' : ''} href={`/main/vacancy/${currVacancy.id}/stage1`}>
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
        <a className={stageName === 'stage2' ? 'active-stage' : ''} href={`/main/vacancy/${currVacancy.id}/stage2`}>
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
        <a className={stageName === 'stage3' ? 'active-stage' : ''} href={`/main/vacancy/${currVacancy.id}/stage3`}>
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
        <a className={stageName === 'stage4' ? 'active-stage' : ''} href={`/main/vacancy/${currVacancy.id}/stage4`}>
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
        <a className={stageName === 'stage5' ? 'active-stage' : ''} href={`/main/vacancy/${currVacancy.id}/stage5`}>
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
        <a className={stageName === 'stage6' ? 'active-stage' : ''} href={`/main/vacancy/${currVacancy.id}/stage6`}>
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
        <a className={stageName === 'stage7' ? 'active-stage' : ''} href={`/main/vacancy/${currVacancy.id}/stage7`}>
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
        <a className={stageName === 'stage8' ? 'active-stage' : ''} href={`/main/vacancy/${currVacancy.id}/stage8`}>
          Отказы
          <span>
            Всего:
            {' '}
            <b>42</b>
          </span>
        </a>
      </div>

      {children}

    </MainLayout>
  );
};
