const router = require('express').Router();
const User = require('./../../../models/UserModel');

router.get('*', function(req, res){

    if(!req.session.userId){
        return res.send({roleCode: 0});
    }

    User.findOne({_id: req.session.userId}, (err, user) => {

        if(err) return res.sendStatus(500);
        
        res.send({roleCode: user.roleCode});
        
    });
  
});

module.exports = router;