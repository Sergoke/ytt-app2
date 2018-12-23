module.exports = function(req, res, next){
    if(req.session.userId){
        return res.sendStatus(400);
    }

    next();
}