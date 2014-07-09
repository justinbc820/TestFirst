function repeat(word, numberOfTimes) {
	var entireString = "";

	for(var i=0; i<numberOfTimes; i++) {
		entireString = entireString + word;
	}

	return entireString;
}