const https = require('https');

const ApiUrl = "https://www.googleapis.com/youtube/v3/videos";
const ApiKey = "AIzaSyBLVlx_YeT_1BFQOyBmFzg9HZsf7a8UuL4";

module.exports.getVideos = function(ids){
	let url = ApiUrl + '?key=' + ApiKey + '&part=snippet' + '&id=';

	ids.forEach( (id, i) => {
		url += id;
		if(i !== ids.length - 1){
			url += ',';
		}
	});

	let getData = (resolve, reject) => {
			https.get(url, res => {
			let result = "";

			res.on('data', chunk => result += chunk);

			res.on('end', () => {

				var videosRaw = JSON.parse(result).items;
				var videos = [];

				videosRaw.forEach( video => {
					videos.push({
						'channel': video.snippet.channelTitle
					});
				});

				resolve(videos);
			});
		});
	}

	return new Promise(getData);
}


