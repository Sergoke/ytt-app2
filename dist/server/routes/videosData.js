const router = require('express').Router();
const VideoModel = require('./../models/VideoModel');
const YtApiModel = require('./../models/YtApiModel');

module.exports = router.use(function(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	next();
});

router.get('/videoids', function(req, res){
	VideoModel.find().then(function(videos){
		let ids = videos.map(function(item){
			return item.videoId;
		});

		res.send(JSON.stringify(ids));
	});
});

router.get('/videos', function(req, res){
	VideoModel.find().then(function(videos){
		let ids = videos.map(function(item){
			return item.videoId;
		});

		YtApiModel.getVideos(ids).then( videos => {
			res.send(videos);
		});
		
	});
});

router.get('/subts/:id', function(req, res){
	VideoModel.findOne({videoId: req.params.id})
	.then(function(video){
		res.send(video);
	})
});