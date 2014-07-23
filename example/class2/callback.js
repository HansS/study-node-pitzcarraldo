var request = require('request');

request.get('http://capi.coupang.com/v3/intro', function (error, response, body) {
	setTimeout(null, 5000);
	console.log('callback1');
	if(error) {
		throw new Error(error);
	}
	if(response.statusCode == 200) {
		console.log(body);
	} else {
		throw new Error(response.statusCode);
	}
	console.log('\n\n\n');
});

var callback = function (error, response, body) {
	console.log('callback2');
	if(error) {
		throw new Error(error);
	}
	if(response.statusCode == 200) {
		console.log(body);
	} else {
		throw new Error(response.statusCode);
	}
	console.log('\n\n\n');
};
request.get('http://capi.coupang.com/v3/intro', callback);