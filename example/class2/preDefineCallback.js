var request = require('request');
var baseUrl = 'http://capi.coupang.com';

request.get({ "url" : baseUrl + '/v3/intro', "json" : true}, function (error, response, body) {
	if(error) {
		throw new Error(error);
	}
	if(response.statusCode == 200) {
		var intro = body;
		var requestUrl = baseUrl + intro.rData.homeSectionList[0].requestUri;
		request.get({ "url" : requestUrl, "json" : true}, function (error, response, body) {
			var rData = body.rData;
			console.log('totalCount : ' + rData.totalCount);
		});
	} else {
		throw new Error(response.statusCode);
	}
});