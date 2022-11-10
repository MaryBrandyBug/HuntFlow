const router = require('express').Router();
const { Vacancy, Candidate, Entry } = require('../../db/models');

router.post('/', async (req, res) => { //! не дописано!!!!!
  // const { id } = req.params;
  const {
    // ! req.params и пост запрос?
    /* VacancyId: id, */ name, surname, middlename, email, phone, experience, resume, comment, location,
  } = req.body;
  const result = await Candidate.create({
    name, surname, middlename, email, phone, resume, experience, location, comment,
  });
  const entries = await Entry.create({ CandidateId: result.id /* VacancyId: id, */ });
  req.session.save(() => {
    res.redirect('/');
  });
});

module.exports = router;
