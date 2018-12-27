const router = require('express').Router();
const VideoModel = require('../../../models/VideoModel');
const YtApiModel = require('../../../models/YtApiModel');

router.get('/', (req, res) => {
	if(!req.session.userId){
		VideoModel.find({isDemo: true}, {_id: 0, videoId: 1}, (err, videoIdObjects) => {
			resHandler(err, videoIdObjects);
		});
	}

	else {
		VideoModel.find({}, {_id: 0, videoId: 1}, (err, videoIdObjects) => {
			resHandler(err, videoIdObjects);
		});
	}

	var resHandler = (err, videoIdObjects) => {

		if(err) return res.sendStatus(500);

		var ids = videoIdObjects.map( obj => obj.videoId );

		YtApiModel.getVideos(ids).then( videos => {
			return res.json(videos);
		})
	}
});

module.exports = router;