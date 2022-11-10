const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const NewVacancyComponent = require('../views/newVacancy');

router.get('/', async (req, res) => {
  const newUser = req.session?.newUser;
  if (newUser) {
    renderTemplate(NewVacancyComponent, { newUser }, res);
  } else {
    res.redirect('/');
  }
});

module.exports = router;
