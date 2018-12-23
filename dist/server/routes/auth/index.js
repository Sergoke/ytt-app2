const router = require('express').Router();

router.use(require('./src/authorization'));

module.exports = router;