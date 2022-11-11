const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const NewCandidateComponent = require('../views/newCandidate');
const { Vacancy } = require('../../db/models');

router.get('/:vacId', async (req, res) => {
  const userName = req.session?.newUser;
  if (userName) {
    const { vacId } = req.params;
    const findVac = await Vacancy.findByPk(+vacId);
    renderTemplate(NewCandidateComponent, { userName, findVac }, res);
  } else {
    res.redirect('/');
  }
});

module.exports = router;
