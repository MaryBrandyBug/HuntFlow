const {
  User,
  Vacancy, Candidate, Entry,
} = require('./db/models');

// const addVacancy1 = async () => {
//   try {
//     const result = await Vacancy.create({ title: 'Frontend-Developer senior', company: 'яндекс', UserId: 2 });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addVacancy1();

// const addUser1 = async () => {
//   try {
//     const result = await User.create({ name: 'Pavel', password: '123',  });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addUser1();

// const addCandidate1 = async () => {
//   try {
//     const result = await Candidate.create({
//       VacancyId: 1, name: 'Nikolay', surname: 'Suhov', middlename: 'Sergeevich', email: 'nik@mail.ru', phone: '89990988976', resume: 'resume', experience: '3 года', location: 'Moscow',
//     });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCandidate1();

// const addCandidate2 = async () => {
//   try {
//     const result = await Candidate.create({
//       VacancyId: 1, name: 'Nikolay', surname: 'Sergeev', middlename: 'Pavlovich', email: 'nikol@mail.ru', phone: '89990988890', resume: 'resume', experience: '4 года', location: 'Moscow',
//     });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCandidate2();

// const addCandidate3 = async () => {
//   try {
//     const result = await Candidate.create({
//       VacancyId: 2, name: 'Anna', surname: 'Frolova', middlename: 'Andreevna', email: 'an@mail.ru', phone: '89990988845', resume: 'resume', experience: '2 года', location: 'Moscow',
//     });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCandidate3();

// const addCandidate4 = async () => {
//   try {
//     const result = await Candidate.create({
//       VacancyId: 2, name: 'Boris', surname: 'Fokin', middlename: 'Alexandrovich', email: 'fok@mail.ru', phone: '89990988845', resume: 'resume', experience: '2 года', location: 'Moscow',
//     });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCandidate4();
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

const addEntry1 = async () => {
  try {
    const result = await Entry.create({
      CandidateId: 2, VacancyId: 1, status: 'stage5',
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
addEntry1();

const addEntry2 = async () => {
  try {
    const result = await Entry.create({
      CandidateId: 2, VacancyId: 1, status: 'stage5',
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
addEntry2();

const addEntry3 = async () => {
  try {
    const result = await Entry.create({
      CandidateId: 3, VacancyId: 2, status: 'stage3',
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
addEntry3();

const addEntry4 = async () => {
  try {
    const result = await Entry.create({
      CandidateId: 4, VacancyId: 2, status: 'stage2',
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
addEntry4();

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
