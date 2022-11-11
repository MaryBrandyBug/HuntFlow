const React = require('react');
const VacancyStages = require('./VacancyStages');

module.exports = function StageInfo({
  userName, currVacancy, candidateLength, allStagesByVacancy, stageName, stageCandidates,
}) {
  return (
    <VacancyStages userName={userName} currVacancy={currVacancy} candidateLength={candidateLength} allStagesByVacancy={allStagesByVacancy} stageName={stageName}>
      <script defer src="/js/editCandidate.js" />

      <div className="vacancy-stage">
        <div className="candidate-list">

          {stageCandidates.filter((el) => !el[stageName])
            .map((el) => (
              <div key={el.id} data-candidate-id={el.Candidate.id} data-stage-name={el.status} data-stage-status={`${el[el.status]}`}>
                <p><b>{`${el.Candidate.name} ${el.Candidate.surname}`}</b></p>
                <p>{currVacancy.title}</p>
                <p>{currVacancy.company}</p>

                {el.status === 'stage8' ? '' : (
                  <p>
                    Статус этапа:
                    {' '}
                    <b>{el[el.status] ? 'пройден' : 'не пройден'}</b>
                  </p>
                )}

              </div>
            ))}

          {stageCandidates.filter((el) => el[stageName])
            .map((el) => (
              <div key={el.id} data-candidate-id={el.Candidate.id} data-stage-name={el.status} data-stage-status={`${el[el.status]}`}>
                <p><b>{`${el.Candidate.name} ${el.Candidate.surname}`}</b></p>
                <p>{currVacancy.title}</p>
                <p>{currVacancy.company}</p>

                {el.status === 'stage8' ? '' : (
                  <p>
                    Статус этапа:
                    {' '}
                    <b>{el[el.status] ? 'пройден' : 'не пройден'}</b>
                  </p>
                )}

              </div>
            ))}

        </div>
        <div className="candidate-card" />
      </div>
    </VacancyStages>
  );
};
