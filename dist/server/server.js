const express = require('express'),
	path = require('path'),
	session = require('express-session'),
	mongoose = require('mongoose'),
	mongoStore = require('connect-mongo')(session),
	config = require('./config/config');

var app = express();

app.use(require('cors')());//tmp

var sessionStore = new mongoStore({mongooseConnection: mongoose.connection});

app.use(session({
	secret: config.session.secret,
	key: config.session.key,
	saveUninitialized: false,
	resave: false,
	cookie: config.session.cookie,
	store: sessionStore
}));

app.use((req, res, next) => {//tmp
	console.log(req.session.numVisited);
	req.session.numVisited = req.session.numVisited + 1;
	next();
});

app.use(express.static(__dirname + '/../' + config.staticFolder));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.set('debug', true);
mongoose.connect(config.dbHost, {useNewUrlParser: true });

app.use('/api', require('./routes/api/index'));
app.use(require('./routes/angular/index'));

mongoose.connection.on('open', function(){

	app.listen(config.port, config.host, function(){
		console.log('server is listening on: http://' + config.host + ':' + config.port);
	});

});

mongoose.connection.on('error', function(error){
	console.error('mongoose connection error: ', error);
});