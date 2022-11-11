const router = require('express').Router();
const { Vacancy, Candidate, Entry } = require('../../db/models');

router.post('/', async (req, res) => {
  console.log(req.body);
  const {
    VacancyId, name, surname, middlename, email, phone, experience, resume, comment, location,
  } = req.body;
  const result = await Candidate.create({
    VacancyId, name, surname, middlename, email, phone, resume, experience, location, comment,
  });
  const entries = await Entry.create({ CandidateId: result.id, VacancyId });
  req.session.save(() => {
    res.redirect('/');
  });
});

module.exports = router;
