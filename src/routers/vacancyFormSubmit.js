const router = require('express').Router();
const { Vacancy } = require('../../db/models');

router.post('/', async (req, res) => {
  const { title, company } = req.body;
  const result = await Vacancy.create({ title, company, UserId: req.session.userId });
  req.session.save(() => {
    res.redirect('/');
  });
});

module.exports = router;
