function repeat(word, numberOfTimes) {
	var entireString = "";

	for(var i=0; i<numberOfTimes; i++) {
		entireString = entireString + word;
	}

	return entireString;
};

function join(myArray) {
	var myString = "";

	for(var i=0; i<myArray.length; i++) {
		myString = myString + myArray[i];
	}

	return myString;
}