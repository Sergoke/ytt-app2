const https = require('https');

const apiUrl = 'https://translation.googleapis.com/language/translate/v2?';
const apiKey = 'AIzaSyCQb5uN3MO6uzT-_AsEmemduDdNyULtB9Y';

module.exports.translate = function(text){
	var request = apiUrl + 'q=' + text + '&source=' + 'en' + '&target=' + 'ru' + '&key=' + apiKey;

	var getTransl = (resolve, reject) => {
		https.get(request, res => {
			var result = '';
			res.on('data', chunk => result += chunk);
			res.on('end', () => {
				result = JSON.parse(result);
				
				if('data' in result){
					let tr = result['data']['translations'][0]['translatedText'];
					resolve(tr);
				}
				
				else if('error' in result){
					let err = result['error'];
					reject(err);
				}
	
				else{
					console.log(result);
					reject('error, go to console');
				}
			});
		});
	}

	return new Promise(getTransl);
}