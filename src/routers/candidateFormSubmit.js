const router = require('express').Router();
const { Vacancy, Candidate, Entry } = require('../../db/models');

// router.post('/:vacId', async (req, res) => { //! не дописано!!!!!
router.post('/', async (req, res) => {
  // const { vacId } = req.params;
  const vacId = 2;
  const {
    // ! req.params и пост запрос?
    name, surname, middlename, email, phone, experience, resume, comment, location,
  } = req.body;
  const result = await Candidate.create({
    VacancyId: vacId, name, surname, middlename, email, phone, resume, experience, location, comment,
  });
  const entries = await Entry.create({ CandidateId: result.id, VacancyId: vacId });
  req.session.save(() => {
    res.redirect('/');
  });
});

module.exports = router;
