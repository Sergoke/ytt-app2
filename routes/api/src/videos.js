const router = require('express').Router();
const VideoModel = require('../../../models/VideoModel');
const YtApiModel = require('../../../models/YtApiModel');

router.get('/', (req, res) => {
	VideoModel.find(req.session.userId? {} : {isDemo: true}, {_id: 0, id: 1}, (err, videoIdObjects) => {
		if(err) return res.sendStatus(500);
		const ids = videoIdObjects.map(obj => obj.id);
		YtApiModel.getVideos(ids).then( videos => {
			return res.json(videos);
		})
	})
	.skip(+req.query.skip)
	.limit(+req.query.num);
});

module.exports = router;
