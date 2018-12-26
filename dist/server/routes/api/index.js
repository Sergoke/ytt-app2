const router = require('express').Router();

const isAuth = require('./../../middleware/isAuth');
const isAdmin = require('./../../middleware/isAdmin');

router.use('/videos', require('./src/videos'));
router.use('/video', require('./src/video'));
router.use('/translate', require('./src/translate'));
router.use('/role', require('./src/role'));

//admin
router.use('/add-video', isAdmin, require('./src/add-video'));

router.use('*', function(req, res){
    res.sendStatus(404);
});

module.exports = router;