const router = require('express').Router();
const User = require('./../models/UserModel');

module.exports = router.use(function(req, res, next){
	next();
});

router.post('/login', function(req, res){
	console.log('login:' + req.body.login + ', password: ' + req.body.password);

	User.findOne({
		login: req.body.login,
		password: req.body.password
	})
	.then( user => {
		if(user){
			res.send('successfully logined');
		}

		else{
			res.send('this user doesn\'t exist');
		}
	});
});

router.post('/signup', function(req, res){
	console.log('name: ' + req.body.name + ', surname: ' + req.body.surname + ', email: ' + req.body.email + ', login:' + req.body.login + ', password: ' + req.body.password);

	let user = new User({
		name: req.body.name,
		surname: req.body.surname,
		email: req.body.email,
		login: req.body.login,
		password: req.body.password
	});

	user.save(function(){
		res.redirect('/');
	});
});