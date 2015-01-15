//1)
function maxOfTwoNumbers (a,b) {
	if (a > b) {
		console.log (a);
	} 
	else {
		console.log (b);
	}
};
maxOfTwoNumbers(2,3);


//2)
function maxofThree (a,b,c) {
	if (a > b && a > c) {
		console.log (a);	
	}
	
	else if (b > a && b > c) {
		console.log (b);
	}
	else {
		console.log (c);
	}
};

maxofThree(4,5,6)


//3)
function letter (a) {
	var vowels= [ "a", "e", "i", "o", "u"];
    if (vowels.indexOf(a)> -1) {
		console.log ("true");
	}
	else {
	    console.log ("false");
	}
};
letter("a");

//4)
array  = [1,2,3,4];

function sumArray(arr) {
	var total = 0;
	for (var i = 0; i < arr.length; i++){
		total += arr[i]
	}
	console.log(total);
};

sumArray(array);

array  = [1,2,3,4];

function sumArray(arr) {
	var total = 0;
	for (var i = 0; i < arr.length; i++){
		total += arr[i]
	}
	console.log(total);
};


array  = [1,2,3,4];

function multiplyArray(arr) {
	var total = 1;
	for (var i = 0; i < arr.length; i++){
		total *= arr[i];
	}
	console.log(total);
}

multiplyArray(array);









for (var i = arr.length - 1; i >= 0; i--) {
	arr[i]
};