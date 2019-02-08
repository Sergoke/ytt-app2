const router = require('express').Router();
const tr = require('../../../models/TranslationModel');

router.get('/:word', function(req, res){
	console.log("word")

	res.setHeader('Content-Type', 'application/json');

	tr.translate(req.params.word, 
		tr => res.send(JSON.stringify(tr)),
		() => res.sendStatus(500));

});

module.exports = router;