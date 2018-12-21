const router = require('express').Router();
const VideoModel = require('../../../models/VideoModel');
const YtApiModel = require('../../../models/YtApiModel');

router.get('/', (req, res) => {
	VideoModel.find({}, {_id: 0, videoId: 1}, (err, videoIdObjects) => {

		if(err) return res.sendStatus(500);

		if(!req.session.userId){
			return res.send([]);
		}

		var ids = videoIdObjects.map( obj => obj.videoId );

		YtApiModel.getVideos(ids).then( videos => {
			res.send(videos);
		});

	});
});

module.exports = router;