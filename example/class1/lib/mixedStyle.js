var object = {
	"firstName" : "따봉",
	"lastName" : "박",
	"getFullName" : function() {
		var that = object; 
		return that.firstName + that.lastName;
	} 
}

object.getFullNameWithTitle = function(title) {
	var that = object; 
	return title + that.firstName + that.lastName;
}

module.exports = object;
