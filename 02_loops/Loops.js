function repeat(word, numberOfTimes) {
	//create empty string to hold concat string
	var entireString = "";

	//loop through and add specified word the specified number of times
	for(var i=0; i<numberOfTimes; i++) {
		entireString += word;
	};

	return entireString;
};

function join(myArray, delimiter) {
	//create empty string to hold concat string
	var myString = "";

	//if statement to test for delimiter.  If no delimiter, then...
	if(delimiter == undefined) {
		//loop through array and add current array item to string
		for(var i=0; i<myArray.length; i++) {
			myString += myArray[i];
		}

		return myString;
	}
	// if a delimiter is defined, then do the same thing as above, but now add a delimiter between items
	else {
		for(var i=0; i<myArray.length; i++) {
			myString = myString + myArray[i];

			//only add delimiter IF we are not on the last item in the array
			if(i < myArray.length - 1) {
				myString += delimiter;
			};
		};

		return myString;
	};
};


function sum(arrayOfNumbers) {
	//create a variable to hold the sum of all numbers
	var total = 0;

	//iterate through the array and add the current number to the current total
	for(var i=0; i<arrayOfNumbers.length; i++) {
		total += arrayOfNumbers[i];
	};

	return total;
};


function paramify(myObject) {
	
	//create string to hold final concat string
	var myString = "";
	
	//create array to change the object into an array in order to concatenate it,
	//find its length, and be able to sort it
	var holdingArray = [];

	for(var prop in myObject) {
		//if myObject actually has the specified property (it's not inherited from somewhere else),
		// then add that item to the array
		if(myObject.hasOwnProperty(prop)) {
			holdingArray.push(prop + "=" + myObject[prop]);
		};
	};

	//sort the array to satisfy one of the specs
	holdingArray.sort();

	//iterate through the array and add each array item to the concat string
	for(var i=0; i<holdingArray.length; i++) {
		myString += holdingArray[i];

		//only add an & sign IF we aren't on the last item in the array
		if(i<holdingArray.length -1) {
			myString += "&";
		};
	};

	return myString;
}


function factorial(number) {
	//create a holding tank.  Because 0 factorial is 1, we will start this off at one.
	// also, because we multiply our first number by this number, it has to be one, not 0
	var total = 1;

	if(number == 0) {
		return total;
	}
	else {
		for(var i =number; i>0; i--) {
			total *= i;
		};
	};
	
	return total;
};




























