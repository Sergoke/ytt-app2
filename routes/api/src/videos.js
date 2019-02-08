const router = require('express').Router();
const VideoModel = require('../../../models/VideoModel');
const YtApiModel = require('../../../models/YtApiModel');

router.get('/', (req, res) => {
	console.log(req.query);

	video = {};

	if(!req.session.userId){
		video = {isDemo: true}
	}

	VideoModel.find(video, {_id: 0, videoId: 1}, (err, videoIdObjects) => {
		resHandler(err, videoIdObjects);
	}).skip(+req.query.skip).limit(+req.query.num);

	var resHandler = (err, videoIdObjects) => {

		if(err) return res.sendStatus(500);

		var ids = videoIdObjects.map( obj => obj.videoId );

		YtApiModel.getVideos(ids).then( videos => {
			return res.json(videos);
		})
	}
});

module.exports = router;