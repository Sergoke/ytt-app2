const User = require('./../models/UserModel');

module.exports = function(req, res, next){
    if(!req.session.userId){
        return res.sendStatus(403);
    }

    User.findOne({_id: req.session.userId}, (err, user) => {
        if(err) return res.sendStatus(500);

        if(user.role === 'admin'){
            return next();
        }

        res.sendStatus(403);
    });
}