const router = require('express').Router();
const MainLayout = require('../views/MainLayout');
const renderTemplate = require('../lib/renderTemplate');

router.get('/', (req, res) => {
  const userName = req.session.newUser ?? 'Вася';
  renderTemplate(MainLayout, { userName }, res);
});

router.get('/vacancy/:vacancyId', (req, res) => {
  // console.log({ 'req.params': req.params });
  // const currVacancy = findByPk
  // const currVacancyCandidates = findAll

  // const userName = req.session.newUser ?? 'Вася';
  // renderTemplate(MainLayout, { userName }, res);
});

module.exports = router;
