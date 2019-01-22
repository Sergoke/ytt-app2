const router = require('express').Router();

const User = require('../../../models/UserModel');

router.get('/', function(req, res){
	
    User.findOne({_id: req.session.userId}, {_id: false, password_hash: false, __v: false}, (err, user) => {
        if(err) return res.sendStatus(500);

        res.json(user);
    })
    
});

module.exports = router;