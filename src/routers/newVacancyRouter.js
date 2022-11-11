const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const NewVacancyComponent = require('../views/newVacancy');

router.get('/', async (req, res) => {
  const userName = req.session?.newUser;
  if (userName) {
    renderTemplate(NewVacancyComponent, { userName }, res);
  } else {
    res.redirect('/');
  }
});

module.exports = router;
