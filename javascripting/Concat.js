
n push(toArray, fromArray) {     
	for(let i = 0, len = fromArray.length; i < len; i++) {
		toArray.push(fromArray[i]);
	}      return toArray;
}

var array1 = [1,2,3,4,5];
var array2= [6,7,8,9,10];
var array3 = [];

push(array1, array3);
push(array2, array3);
console.log(push([ 1, 2, 3 ], [ 4, 5, 6 ]));
