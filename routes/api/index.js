const router = require('express').Router();

const isAuth = require('./../../middleware/isAuth');
const isGuest = require('./../../middleware/isGuest');
const isAdmin = require('./../../middleware/isAdmin');

router.use('/login', isGuest, require('./src/login'));
router.use('/signup', isGuest, require('./src/signup'));
router.use('/videos', require('./src/videos'));
router.use('/translate', require('./src/translate'));
router.use('/role', require('./src/role'));

//authorized users
router.use('/logout', isAuth, require('./src/logout'));
router.use('/user', isAuth, require('./src/user'));

//admin
router.use('/users', isAdmin, require('./src/users'));

router.use('*', function(req, res){
    res.sendStatus(404);
});

module.exports = router;