var object = {
	"firstName" : "따봉",
	"lastName" : "박",
	"getFullName" : function() {
		var that = module.exports; 
		return that.firstName + that.lastName;
	} 
}

object.getFullNameWithTitle = function(title) {
	var that = module.exports; 
	return title + that.firstName + that.lastName;
}

module.exports = object;