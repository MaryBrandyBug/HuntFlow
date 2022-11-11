// const router = require('express').Router();
// const renderTemplate = require('../lib/renderTemplate');
// const NewCandidateComponent = require('../views/newCandidate');
// const { Vacancy } = require('../../db/models');

// router.get('/:vacId', async (req, res) => {
//   const newUser = req.session?.newUser;
//   if (newUser) {
//     const { vacId } = req.params;
//     const findVac = await Vacancy.findByPk(+vacId);
//     renderTemplate(NewCandidateComponent, { newUser }, res);
//   } else {
//     res.redirect('/');
//   }
// });

// module.exports = router;
const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const NewCandidateComponent = require('../views/newCandidate');
const { Vacancy } = require('../../db/models');

router.get('/:vacId', async (req, res) => {
  const newUser = req.session?.newUser;
  if (newUser) {
    const { vacId } = req.params;
    const findVac = await Vacancy.findByPk(+vacId);

    renderTemplate(NewCandidateComponent, { newUser }, res);

    renderTemplate(NewCandidateComponent, { newUser, findVac }, res);
  } else {
    res.redirect('/');
  }
});

module.exports = router;
