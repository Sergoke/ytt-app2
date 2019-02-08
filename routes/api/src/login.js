const router = require('express').Router();

const User = require('../../../models/UserModel');

router.post('/', function(req, res){

	console.log(req.body);

	User.findOne({login: req.body.login}, (err, user) => {

		if(err) return res.sendStatus(500);

		if(user && user.checkPassword(req.body.password)){
			console.log(req.session);
			req.session.userId = user._id;
			res.json({roleCode: user.roleCode});
		}

		else{
			res.status(422).send('this user doesn\'t exist');
		}
	});

});

module.exports = router;