const router = require('express').Router();
const path = require('path');
const config = require('../../config/config');

const isGuest = require('./../../middleware/isGuest');

router.use('/video', require('./src/video'));
// router.use('/login', isGuest);
// router.use('/signup', isGuest);

router.get('*', function(req, res){
	res.sendFile(path.join(__dirname, '../../..' + config.indexHtml));
});

module.exports = router;