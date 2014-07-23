module.exports.firstName = '따봉';
module.exports.lastName = '박';
module.exports.title = 'Mr.';
module.exports.getFullName = function() {
	var that = module.exports; 
	return that.firstName + that.lastName;
};
module.exports.getFullNameWithTitle = function(title) {
	var that = module.exports; 
	return title + that.firstName + that.lastName;
};