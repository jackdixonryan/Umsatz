const router = require('express').Router();
const routes = require('./tables');

router.use('/restaurant', routes);

module.exports = router;
