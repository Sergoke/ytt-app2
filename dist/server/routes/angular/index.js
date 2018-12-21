const router = require('express').Router();
const path = require('path');
const config = require('../../config/config');

router.use('/video', require('./src/video'));

router.get('*', function(req, res){
	res.sendFile(path.join(__dirname, '../../..' + config.indexHtml));
});

module.exports = router;