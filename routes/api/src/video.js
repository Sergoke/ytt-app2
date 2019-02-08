const router = require('express').Router();
const Video = require('./../../../models/VideoModel');
const isAdmin = require('./../../../middleware/isAdmin');

router.get('/:id', function(req, res){
    Video.findOne({videoId: req.params.id}, {_id: 0, __v: 0}, (err, video) => {

        if(err) {
            console.error(err)
            return res.sendStatus(500);
        }

        if(!video){
            if(!req.session.userId) return res.sendStatus(401);
            return res.sendStatus(404);
        }

        if(!req.session.userId && !video.isDemo) return res.sendStatus(401);
        
        res.send(video);
        
    });
});

router.post('/update/:id', isAdmin, function(req, res){
    Video.findOneAndUpdate({videoId: req.params.id}, {
        videoId: req.body.id,
        isDemo: req.body.isDemo,
        timeKeys: req.body.timeKeys,
        subts: req.body.subts
    }, function(err, result){
        if(err) return res.sendStatus(500);

        res.json(result);
    });
});

module.exports = router;