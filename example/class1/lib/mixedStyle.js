var object = {
	"firstName" : "따봉",
	"lastName" : "박",
	"getFullName" : function() {
		return this.firstName + this.lastName;
	} 
}

object.getFullNameWithTitle = function(title) {
	return title + this.firstName + this.lastName;
}

module.exports = object;
