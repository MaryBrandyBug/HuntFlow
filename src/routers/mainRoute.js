const router = require('express').Router();
const AllVacancies = require('../views/AllVacancies');
const VacancyStages = require('../views/VacancyStages');
const StageInfo = require('../views/StageInfo');
const renderTemplate = require('../lib/renderTemplate');
const { Vacancy, Candidate, Entry } = require('../../db/models');

router.get('/', async (req, res) => {
  const userName = req.session.newUser ?? 'Вася';
  const userId = req.session.userId ?? 2;
  try {
    const vacancies = await Vacancy.findAll({ where: { UserId: userId } });
    // console.log('vacancies ===>', vacancies.map((el) => el.get()));
    const candidates = await Candidate.findAll();
    // console.log('candidates ===>', candidates.map((el) => el.get()).filter((el) => el.VacancyId === 1));
    renderTemplate(AllVacancies, { userName, vacancies, candidates }, res);
  } catch (error) {
    console.log(error);
  }
});

router.get('/vacancy/:vacancyId', async (req, res) => {
  // console.log({ 'req.params': req.params });
  const userName = req.session.newUser ?? 'Вася';
  const { vacancyId } = req.params;
  // console.log('===>', { vacancyId });
  try {
    const currVacancy = await Vacancy.findByPk(+vacancyId);
    // console.log('currVacancy ===>', currVacancy.get());
    const candidates = await Candidate.findAll({ where: { VacancyId: +vacancyId } });
    // console.log('candidateLength ===>', candidates.length);
    renderTemplate(VacancyStages, { userName, currVacancy, candidateLength: candidates.length }, res);
  } catch (error) {
    console.log(error);
  }
});

router.get('/vacancy/:vacancyId/:stageName', async (req, res) => {
  // console.log({ 'req.params': req.params });
  const userName = req.session.newUser ?? 'Вася';
  const userId = req.session.userId ?? 2; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
  const { vacancyId, stageName } = req.params;
  console.log('===>', { vacancyId, stageName });
  try {
    const currVacancy = await Vacancy.findByPk(+vacancyId);
    console.log('currVacancy ===>', currVacancy.get());
    const candidates = await Candidate.findAll({ where: { VacancyId: +vacancyId } });
    console.log('candidateLength ===>', candidates.length);

    const stageCandidates = await Entry.findAll({
      where: { VacancyId: +vacancyId, status: stageName },
      include: { model: Candidate },
    });
    console.dir(stageCandidates.map((el) => el.get({ plain: true })), { depth: null });

    renderTemplate(StageInfo, {
      userName, currVacancy, candidateLength: candidates.length, stageName, stageCandidates,
    }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
