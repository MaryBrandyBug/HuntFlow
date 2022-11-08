const router = require('express').Router();
const bcrypt = require('bcrypt');
const MainComponent = require('../views/Main');
const renderTemplate = require('../lib/renderTemplate');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  const newUser = req.session?.newUser;
  renderTemplate(MainComponent, { newUser }, res);
});

router.post('/', async (req, res) => {
  if (req.body.name) {
    const { email, name, password } = req.body;
    try {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ email, name, password: hash });
      req.session.newUser = newUser.name;
      req.session.save(() => {
        res.redirect('/');
      });
    } catch (error) {
      res.sendStatus(403);
    }
  } else {
    const { enterEmail, enterPassword } = req.body;
    try {
      const user = await User.findOne({ where: { email: enterEmail } });
      const passCheck = await bcrypt.compare(enterPassword, user.password);
      if (passCheck) {
        req.session.newUser = user.name;
        req.session.save(() => {
          res.redirect('/');
        });
      } else {
        res.sendStatus(403);
      }
    } catch (error) {
      res.sendStatus(400);
    }
  }
});

module.exports = router;
