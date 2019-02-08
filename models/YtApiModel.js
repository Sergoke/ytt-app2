const https = require('https');

const ApiUrl = "https://www.googleapis.com/youtube/v3/videos";
const ApiKey = "AIzaSyBLVlx_YeT_1BFQOyBmFzg9HZsf7a8UuL4";

module.exports.getVideos = function(ids){
	let url = ApiUrl + '?key=' + ApiKey + '&part=snippet, statistics' + '&id=';

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
						id: video.id,
						title: video.snippet.title,
						channel: video.snippet.channelTitle,
						thumbnail: video.snippet.thumbnails.medium.url,
						popularity: video.statistics.viewCount / 1000000000 * 100
					});
				});

				resolve(videos);
			});
		});
	}

	return new Promise(getData);
}


