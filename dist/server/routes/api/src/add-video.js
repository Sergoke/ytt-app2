const router = require('express').Router();
const Video = require('./../../../models/VideoModel');

router.post('/', function(req, res){

    console.log(req.body);

    var video = new Video({
        videoId: req.body.videoId
    });
    
    // video.save((err, video) => {
    //     if(err) return res.sendStatus(500);

    //     res.sendStatus(200);
    // });

    res.send(req.body);
  
});

module.exports = router;