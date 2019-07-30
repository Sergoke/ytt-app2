const router = require('express').Router();
const VideoModel = require('./../../../models/VideoModel');
const isAdmin = require('./../../../middleware/isAdmin');
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

router.get('/:id', function (req, res) {
    VideoModel.findOne({id: req.params.id}, {_id: 0, __v: 0}, (err, video) => {

        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }

        if (!video) {
            if (!req.session.userId) return res.sendStatus(401);
            return res.sendStatus(404);
        }

        if (!req.session.userId && !video.isDemo) return res.sendStatus(401);

        res.send(video);

    });
});

router.post('/', isAdmin, function (req, res) {
    new VideoModel(req.body).save((err, video) => {
        if (err) {
            console.log(error);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
});

router.put('/:id', isAdmin, function (req, res) {
    VideoModel.findOneAndUpdate({id: req.params.id}, req.body, function (err, result) {
        if (err) return res.sendStatus(500);
        res.json(result);
    });
});

router.delete('/:id', isAdmin, function (req, res) {
    VideoModel.findOneAndDelete({id: req.params.id}, function (err, result) {
        if (err) return res.sendStatus(500);
        res.json(result);
    });
});

module.exports = router;
