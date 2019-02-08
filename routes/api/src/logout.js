const router = require('express').Router();

router.post('/', function(req, res){
	req.session.destroy();
	res.sendStatus(200);
});

module.exports = router;