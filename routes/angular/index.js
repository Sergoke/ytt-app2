const router = require('express').Router();
const path = require('path');
const config = require('./../../config');

const isGuest = require('./../../middleware/isGuest');

router.use('/video', require('./src/video'));

router.get('*', function(req, res){
	res.sendFile(config.indexHtml);
});

module.exports = router;