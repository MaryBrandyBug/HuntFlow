const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    if (req.session.newUser) {
      req.session.destroy(() => {
        res.clearCookie('Username');
        res.redirect('/');
      });
    } else {
      res.redirect('/');
    }
  } catch (error) {
    res.sendStatus(403);
  }
});

module.exports = router;