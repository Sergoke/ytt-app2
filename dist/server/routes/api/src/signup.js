const router = require('express').Router();

const User = require('../../../models/UserModel');

router.post('/', function(req, res){
	console.log('name: ' + req.body.name + ', surname: ' + req.body.surname + ', email: ' + req.body.email + ', login:' + req.body.login + ', password: ' + req.body.password);

	if(!/^[a-zA-ZА-Яа-яёЁ]{2,20}$/.test(req.body.name)) return res.status(400).send('Введено неправильное имя');

	else if(!/^[a-zA-ZА-Яа-яёЁ]{2,20}$/.test(req.body.surname)) return res.status(400).send('Введено неправильную фамилию');

	else if(!/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/.test(req.body.email)) return res.status(400).send('Введено неправильную почту');

	else if(!/^[a-zA-Z0-9]{4,8}$/.test(req.body.login)) return res.status(400).send('Введено неправильный логин');

	else if(!/^[\w]{6,20}$/.test(req.body.password)) return res.status(400).send('Введено неправильный пароль');

	let user = new User({
		name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1),
		surname: req.body.surname.charAt(0).toUpperCase() + req.body.surname.slice(1),
		email: req.body.email,
		login: req.body.login,
		password: req.body.password
	});

	user.save(function(err, user){
		if(err) return res.status(422).send('Данный логин занят, попробуйте другой');
		res.status(200).json({'success': 'true'});
	});
});

module.exports = router;