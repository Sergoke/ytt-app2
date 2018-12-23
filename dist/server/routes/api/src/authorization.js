const router = require('express').Router();
const User = require('../../../models/UserModel');

router.post('/login', function(req, res){

	User.findOne({login: req.body.login}, (err, user) => {

		if(err) return res.sendStatus(500);

		if(user && user.checkPassword(req.body.password)){
			console.log(req.session);
			req.session.userId = user._id;
			res.redirect('/videos');
		}

		else{
			res.send('this user doesn\'t exist');
		}
	});

});

router.post('/sign-up', function(req, res){
	console.log('name: ' + req.body.name + ', surname: ' + req.body.surname + ', email: ' + req.body.email + ', login:' + req.body.login + ', password: ' + req.body.password);

	let user = new User({
		name: req.body.name,
		surname: req.body.surname,
		email: req.body.email,
		login: req.body.login,
		password: req.body.password
	});

	user.save(function(err, user){
		if(err) res.status(422).send('Error. Please, verify your login');
		res.redirect('/login');
	});
});

router.post('/log-out', function(req, res){

	req.session.destroy();
	res.redirect('/');

});

module.exports = router;