const express = require('express'),
	path = require('path'),
	session = require('express-session'),
	mongoose = require('mongoose'),
	mongoStore = require('connect-mongo')(session),
	config = require('./config');

var app = express();

app.use('*', function(req, res, next){
	if(req.headers.host === '3.17.160.130'){
		return res.redirect('http://langvy.ga' + req.url);
	}
	next();
});

app.use(require('cors')({
	origin: 'http://localhost:4200'
}));//tmp

var sessionStore = new mongoStore({mongooseConnection: mongoose.connection});

app.use(session({
	secret: config.session.secret,
	key: config.session.key,
	saveUninitialized: false,
	resave: false,
	cookie: config.session.cookie,
	store: sessionStore
}))

app.use(express.static(config.staticFolder));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.set('debug', true);
mongoose.connect(config.dbHost, {useNewUrlParser: true });

app.use('/api', require('./routes/api/index'));
app.use(require('./routes/angular/index'));

mongoose.connection.on('open', function(){

	app.listen(config.port, function(){
		console.log('server is listening on port: ' + config.port);
	});

});

mongoose.connection.on('error', function(error){
	console.error('mongoose connection error: ', error);
});
