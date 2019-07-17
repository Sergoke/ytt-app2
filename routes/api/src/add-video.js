const router = require('express').Router();
const Video = require('../../../models/VideoModel');

router.post('/', function (req, res) {

    console.log(req.body);

    const video = new Video({
        videoId: req.body.id,
        isDemo: req.body.isDemo,
        timeKeys: req.body.timeKeys,
        subts: {}
    });

    Object.keys(req.body.subts).forEach(locale => {
        if (req.body.subts[locale].length) {
            video.subts[locale] = req.body.subts[locale];
        }
    });

    video.save((err, video) => {
        if (err) return res.sendStatus(500);
        res.sendStatus(200);
    });

});

module.exports = router;
