const router = require('express').Router();
const Video = require('./../../../models/VideoModel');

router.get('/:id', (req, res, next) => {
    Video.findOne({videoId: req.params.id})
	.then((r) => {
		if(r !== null){
			return next();
		}
		
		res.sendStatus(404);
    });
});

module.exports = router;