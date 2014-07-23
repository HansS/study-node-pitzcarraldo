module.exports = {
	"firstName" : "따봉",
	"lastName" : "박",
	"getFullName" : function() {
		// @see http://bonsaiden.github.io/JavaScript-Garden/ko/#function.this
		return this.firstName + this.lastName;
	} ,
	"getFullNameWithTitle" : function(title) {
		return title + this.firstName + this.lastName;
	}
}
