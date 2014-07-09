function repeat(word, numberOfTimes) {
	var entireString = "";

	for(var i=0; i<numberOfTimes; i++) {
		entireString = entireString + word;
	}

	return entireString;
};

function join(myArray, delimiter) {
	var myString = "";

	if(delimiter == undefined) {
		for(var i=0; i<myArray.length; i++) {
			myString = myString + myArray[i];
		}

		return myString;
	}
	else {
		for(var i=0; i<myArray.length; i++) {
			myString = myString + myArray[i];

			if(i < myArray.length - 1) {
				myString = myString + delimiter;
			};
		};

		return myString;
	};
};

function sum(arrayOfNumbers) {
	var total = 0;

	for(var i=0; i<arrayOfNumbers.length; i++) {
		total += arrayOfNumbers[i];
	};

	return total;
};

function paramify(myObject) {
	var myString = "";
	var holdingArray = [];

	for(var prop in myObject) {
		
		if(myObject.hasOwnProperty(prop)) {
			holdingArray.push(prop + "=" + myObject[prop]);
		};
	};

	holdingArray.sort();

	for(var i=0; i<holdingArray.length; i++) {
		myString += holdingArray[i];

		if(i<holdingArray.length -1) {
			myString += "&";
		};
	};

	return myString;
}
