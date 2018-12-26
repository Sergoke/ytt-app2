const router = require('express').Router();
const Video = require('./../../../models/VideoModel');

router.post('/', function(req, res){

    console.log(req.body);

    var video = new Video({
        videoId: req.body.id,
        isDemo: req.body.isDemo,
        timeKeys: req.body.timeKeys,
        subts: req.body.subts
    });
    
    video.save((err, video) => {
        if(err) return res.sendStatus(500);

        res.sendStatus(200);
    });
  
});

module.exports = router;