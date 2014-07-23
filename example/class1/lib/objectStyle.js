module.exports = {
	"firstName" : "따봉",
	"lastName" : "박",
	"getFullName" : function() {
		// @see http://bonsaiden.github.io/JavaScript-Garden/ko/#function.this
		var that = module.exports; 
		return that.firstName + that.lastName;
	} ,
	"getFullNameWithTitle" : function(title) {
		var that = module.exports; 
		return title + that.firstName + that.lastName;
	}
}
