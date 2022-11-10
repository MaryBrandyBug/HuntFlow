const {
  User,
  Vacancy, Candidate, Status, CandidateStatus,
} = require('./db/models');

// const addVacancy1 = async () => {
//   try {
//     const result = await Vacancy.create({ UserId: 1, title: 'Frontend-Developer junior' });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addVacancy1();

// const addCandidate1 = async () => {
//   try {
//     const result = await Candidate.create({
//       first_name: 'Nikolay', last_name: 'Suhov', email: 'nik@mail.ru', phone_number: '89990988976', resume: 'resume',
//     });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCandidate1();

// const addStatus = async () => {
//   try {
//     const result = await Status.create({
//       VacancyId: 1, StageId: 7,
//     });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addStatus();

// const addCandidateStatus = async () => {
//   try {
//     const result = await CandidateStatus.create({
//       CandidateId: 8, StatusId: 8,
//     });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCandidateStatus();

// * количество кандидатов на вакансии
const addCandidateStatus = async () => {
  const findVacancy = await Status.findAll({ where: { VacancyId: 1 }, raw: true });
  const statusId = findVacancy.map((el) => el.id);
  const allCandidates = await Candidate.findAll({ raw: true });
  const candidatesStatus = await CandidateStatus.findAll({ raw: true });
  const arrOfCandidatesId = [];
  for (let i = 0; i < candidatesStatus.length; i++) {
    for (let k = 0; k < statusId.length; k++) {
      // console.log(candidatesStatus[i]);
      if (candidatesStatus[i].StatusId === statusId[k]) {
        arrOfCandidatesId.push(candidatesStatus[i].CandidateId);
      }
    }
  }
  const arrOfCandidates = [];
  for (let j = 0; j < allCandidates.length; j++) {
    for (let m = 0; m < arrOfCandidatesId.length; m++) {
      if (allCandidates[j].id === arrOfCandidatesId[m]) {
        arrOfCandidates.push([allCandidates[j]]);
      }
    }
  }
  // console.log(arrOfCandidates);
};
// addCandidateStatus();

// * кандидаты include
const getAllCandidates = async () => {
  // const result = await Status.findAll({ where: { VacancyId: 2 } });
  // console.dir(result.map((el) => el.get({ plain: true })), { depth: null });
  const result1 = await Candidate.findAll({ include: { model: Status, where: { VacancyId: 2 }, required: true }, required: true });
  const mapped = result1.map((el) => el.get({ plain: true }).id);
};

// getAllCandidates();

// * status кандидата include
const getStatusOfCandidate = async () => {
  const result = await Status.findAll({ include: { model: Candidate, where: { id: 3 }, required: true }, required: true });
  const mapped = result.map((el) => el.get({ plain: true }).StageId);
  // console.dir(result.map((el) => el.get({ plain: true })), { depth: null });
  const result1 = await Status.findAll({ where: { VacancyId: 3 }, include: { model: Candidate, where: { id: 3 }, required: true }, required: true });
  const mapped1 = result1.map((el) => el.get({ plain: true }).StageId);
  console.log(mapped1);
};
// getStatusOfCandidate();

// * список вакансий с датой создания и всем всем
const getVacancies = async () => {
  const result = await Vacancy.findAll({ include: { model: User, where: { id: 2 }, required: true }, required: true });
  const mapped = result.map((el) => el.get({ plain: true }).id);
  console.log(mapped);
};
// getVacancies();

// * кандидаты на вакансию
const getAllCandidatesOnVacancy = async () => {
  const result = await Candidate.findAll({ include: { model: Status, where: { VacancyId: 2 }, required: true }, required: true });
  const mapped = result.map((el) => el.get({ plain: true }).id);
  console.log(mapped.length);
};
// getAllCandidatesOnVacancy();