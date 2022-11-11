const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const NewCandidateComponent = require('../views/newCandidate');

router.get('/', async (req, res) => {
  const newUser = req.session?.newUser;
  if (newUser) {
    renderTemplate(NewCandidateComponent, { newUser }, res);
  } else {
    res.redirect('/');
  }
});

module.exports = router;
