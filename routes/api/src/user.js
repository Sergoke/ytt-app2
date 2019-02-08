const router = require('express').Router();

const isAdmin = require('../../../middleware/isAdmin');
const User = require('../../../models/UserModel');

router.get('/', function(req, res){
	
    User.findOne({_id: req.session.userId}, {_id: false, password_hash: false, __v: false}, (err, user) => {
        if(err) return res.sendStatus(500);

        res.json(user);
    })
    
});

router.post('/delete', isAdmin, function(req, res){
    User.deleteOne({login: req.body.login}, function(err, result){
        if(err) return res.sendStatus(500);

        res.json(result);
    });
});

module.exports = router;