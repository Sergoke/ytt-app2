const router = require('express').Router();
const userModel = require('./../../../models/UserModel');

router.get('/', function(req, res){
    userModel.find({}, {_id: 0, __v: 0, password_hash: 0}, (err, users) => {
        if(err) return res.sendStatus(500);

        res.json(users);
    });
});

module.exports = router;