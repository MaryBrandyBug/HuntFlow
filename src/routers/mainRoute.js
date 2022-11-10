const router = require('express').Router();
const MainLayout = require('../views/MainLayout');
const renderTemplate = require('../lib/renderTemplate');

module.exports = router.get('/', (req, res) => {
  const userName = req.session.newUser ?? 'Вася';
  renderTemplate(MainLayout, { userName }, res);
});
