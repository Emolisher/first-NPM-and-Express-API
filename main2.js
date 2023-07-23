var moment = require('moment'); // require
var unique = require('uniq');


var myDate = new Date();
var myCoolDate = moment(myDate).format('LL');

var myList = [1,2,1,1,3,1,3,4,4,5,6,4,3];
// a lot of numbers we don't want, we want Unique
var myUniqueList = unique(myList)

console.log(myUniqueList);
console.log(myCoolDate);
