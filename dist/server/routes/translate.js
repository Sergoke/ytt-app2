const router = require('express').Router();
const translate = require('./../models/TranslationModel').translate;

module.exports = router.use(function(req, res, next){
	next();
});

router.get('/:word', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	translate(req.params.word)
		.then( tr => res.send(tr))
		.catch( err => res.send(err));
});