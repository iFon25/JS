var num;
num = prompt('message', 0);
function isInteger(n) {
	'use strict';
	return (n ^ 0) === n;
}
alert(isInteger(num));