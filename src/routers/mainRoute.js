const router = require('express').Router();
const AllVacancies = require('../views/AllVacancies');
const VacancyStages = require('../views/VacancyStages');
const renderTemplate = require('../lib/renderTemplate');
const { Vacancy, Candidate } = require('../../db/models');

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
  try {
    const currVacancy = await Vacancy.findByPk(+req.params.vacancyId);
    console.log('currVacancy ===>', currVacancy.get());
    const candidates = await Candidate.findAll({ where: { VacancyId: +req.params.vacancyId } });
    console.log('candidateLength ===>', candidates.length);
    renderTemplate(VacancyStages, { userName, currVacancy, candidateLength: candidates.length }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
