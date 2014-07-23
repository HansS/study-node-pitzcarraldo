var objectStyle = require('./lib/objectStyle');

console.log('* ObjectStyleModule');
console.log(objectStyle.firstName);
console.log(objectStyle.lastName);
console.log(objectStyle.getFullName());
console.log(objectStyle.getFullNameWithTitle('Mr.'));
console.log('\n');

var mixedStyle = require('./lib/mixedStyle');

console.log('* MixedStyleModule');
console.log(mixedStyle.firstName);
console.log(mixedStyle.lastName);
console.log(mixedStyle.getFullName());
console.log(mixedStyle.getFullNameWithTitle('Mr.'));
console.log('\n');

var seperatedStyle = require('./lib/seperatedStyle');

console.log('* SeperatedStyleModule');
console.log(seperatedStyle.firstName);
console.log(seperatedStyle.lastName);
console.log(seperatedStyle.getFullName());
console.log(seperatedStyle.getFullNameWithTitle('Mr.'));
console.log('\n');

var functionStyle = require('./lib/functionStyle')('따봉','박',"Mr."); //Require with constructor parameter

console.log('* FunctionStyleModule');
console.log(functionStyle.firstName); //undefined << firstName is private
console.log(functionStyle.lastName); //undefined << lastName is private
console.log(functionStyle.nickName); //undefined << nickName is private
console.log(functionStyle.friend); //undefined << friend is returned
console.log(functionStyle.getFullName());
console.log(functionStyle.getFullNameWithTitle());
console.log('\n');

var functionStyleWithTwoParameter = require('./lib/functionStyle')('따봉','박');
console.log('* FunctionStyleModuleWithTwoParameter');
console.log(functionStyleWithTwoParameter.getFullName()); //undefined << firstName is private
console.log(functionStyleWithTwoParameter.getFullNameWithTitle()); //undefined << firstName is private
console.log('\n');