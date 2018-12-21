const router = require('express').Router();
const User = require('./../../../models/UserModel');

router.get('*', function(req, res){

    if(!req.session.userId){
        return res.send({role: 'guest'});
    }

    User.findOne({_id: req.session.userId}, (err, user) => {

        if(err) return res.sendStatus(500);
        
        res.send({role: user.role});
        
    });
  
});

module.exports = router;