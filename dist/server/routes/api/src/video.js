const router = require('express').Router();
const Video = require('./../../../models/VideoModel');

router.get('/:id', function(req, res){

    Video.findOne({videoId: req.params.id}, (err, video) => {

        if(err) return res.sendStatus(500);
        
        res.send(video);
        
    });
  
});

module.exports = router;