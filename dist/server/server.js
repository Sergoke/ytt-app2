const express = require('express'),
	path = require('path'),
	mongoose = require('mongoose'),
	auth = require('./routes/authorization'),
	translate = require('./routes/translate'),
	videosData = require('./routes/videosData');

const cors = require('cors');//tmp

const VideoModel = require('./models/VideoModel');

var app = express();

app.use(cors({
	origin:['http://localhost:4200']
}));//tmp

var host = 'localhost',
	port = '2500';

app.use(express.static(__dirname + '/../ytt-app2'));

app.use(express.urlencoded({extended: false}));

app.use(auth);
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
	res.sendFile(path.join(__dirname, '/../yt-app/index.html'));
});

mongoose.connect('mongodb://localhost:27017/videos');

mongoose.connection.on('open', function(){
	app.locals.db = mongoose.connection;

	app.listen(port, host, function(){
		console.log('server is listening on: http://' + host + ':' + port);
	});
});

mongoose.connection.on('error', function(error){
	console.error(error);
});