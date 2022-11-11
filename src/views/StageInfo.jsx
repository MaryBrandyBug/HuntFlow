const React = require('react');
const VacancyStages = require('./VacancyStages');

module.exports = function StageInfo({
  userName, currVacancy, candidateLength, stageName, stageCandidates,
}) {
  return (
    <VacancyStages userName={userName} currVacancy={currVacancy} candidateLength={candidateLength} stageName={stageName}>
      {/* <script defer src="./js/register.js" /> */}

      <div className="vacancy-stage">

        <div className="candidate-list">
          <div>
            <p><b>Фамилия Имя</b></p>
            <p>JavaScript-разработчик</p>
            <p>Elbrus Bootcamp</p>
            <p>
              Статус этапа:
              {' '}
              <b>не пройден</b>
            </p>
          </div>
          <div className="active">
            <p><b>Фамилия Имя</b></p>
            <p>JavaScript-разработчик</p>
            <p>Elbrus Bootcamp</p>
            <p>
              Статус этапа:
              {' '}
              <b>не пройден</b>
            </p>
          </div>
          <div>
            <p><b>Фамилия Имя</b></p>
            <p>JavaScript-разработчик</p>
            <p>Elbrus Bootcamp</p>
            <p>
              Статус этапа:
              {' '}
              <b>не пройден</b>
            </p>
          </div>
          <div>
            <p><b>Фамилия Имя</b></p>
            <p>JavaScript-разработчик</p>
            <p>Elbrus Bootcamp</p>
            <p>
              Статус этапа:
              {' '}
              <b>не пройден</b>
            </p>
          </div>
          <div>
            <p><b>Фамилия Имя</b></p>
            <p>JavaScript-разработчик</p>
            <p>Elbrus Bootcamp</p>
            <p>
              Статус этапа:
              {' '}
              <b>не пройден</b>
            </p>
          </div>
        </div>
        <div className="candidate-card" />
      </div>
    </VacancyStages>
  );
};
