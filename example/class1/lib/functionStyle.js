module.exports = function(firstName, lastName, title){
	var nickName = '뽕따';
	var friend = '으리';

	var getFullName = function() {
		return firstName + lastName;
	} 

	var getFullNameWithTitle = function() {
		return title + firstName + lastName;
	}

	return {
		"friend" : friend,
		"getFullName" : getFullName,
		"getFullNameWithTitle" : getFullNameWithTitle
	}
	/* Same with

 	var obejct = {
		"friend" : friend,
		"getFullName" : getFullName,
		"getFullNameWithTitle" : getFullNameWithTitle
	}
	return object;
	
	*/
}