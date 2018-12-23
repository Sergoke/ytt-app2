const router = require('express').Router();
const Video = require('./../../../models/VideoModel');

router.get('/:id', function(req, res){
    Video.findOne({videoId: req.params.id}, (err, video) => {

        if(err) return res.sendStatus(500);

        if(!video){
            if(!req.session.userId) return res.sendStatus(401);
            return res.sendStatus(404);
        }

        if(!req.session.userId && !video.isDemo) return res.sendStatus(401);
        
        res.send(video);
        
    });
});

module.exports = router;