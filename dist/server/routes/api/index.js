const router = require('express').Router();

const checkAuth = require('./../../middleware/checkAuth');

router.use('/videos', require('./src/videos'));
router.use('/video', require('./src/video'));
router.use('/translate', require('./src/translate'));
router.use('/auth', require('./src/authorization'));
router.use('/role', require('./src/role'));

module.exports = router;