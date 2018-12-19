const express = require('express'),
	path = require('path'),
	// cookieParserParser = require('cookie-parser'),
	session = require('express-session'),
	mongoose = require('mongoose'),
	mongoStore = require('connect-mongo')(session),
	config = require('./config/config'),
	auth = require('./routes/authorization'),
	translate = require('./routes/translate'),
	videosData = require('./routes/videosData');

const cors = require('cors');//tmp

const VideoModel = require('./models/VideoModel');

var app = express();

app.use(cors({
	origin:['http://localhost:4200']
}));//tmp



// app.use(cookieParser());

app.use(express.static(__dirname + '/../' + config.staticFolder));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/data', videosData);
app.use('/tr', translate);

app.use('/video/:id', function(req, res, next){
	VideoModel.findOne({videoId: req.params.id})
	.then((r) => {
		if(r !== null){
			return next();
		}
		
		res.redirect('/videos');
	});
});

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname, '/..' + config.indexHtml));
});

mongoose.set('debug', true);
mongoose.connect(config.dbHost, {useNewUrlParser: true });

mongoose.connection.on('open', function(){
	app.locals.db = mongoose.connection;

	var sessionStore = new mongoStore({db: mongoose.connection.db});

	app.use(session({
		secret: config.session.secret,
		key: config.session.key,
		cookie: config.session.cookie,
		store: sessionStore
	}));

	app.use((req, res, next) => {
		console.log(req.session);
		req.session.numVisited = req.session.numVisited + 1;
		next();
	});

	app.use(auth);

	app.listen(config.port, config.host, function(){
		console.log('server is listening on: http://' + config.host + ':' + config.port);
	});
});

mongoose.connection.on('error', function(error){
	console.error(error);
});