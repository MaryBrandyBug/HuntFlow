const router = require('express').Router();
const { Candidate } = require('../../db/models');

router.get('/:id', async (req, res) => {
  // console.log('req.params ===>', req.params);
  try {
    const currCandidate = await Candidate.findByPk(req.params.id);
    console.log(currCandidate);
    res.json(currCandidate);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = router;
