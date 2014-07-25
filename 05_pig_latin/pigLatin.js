var finalWord = "";
var wordsArray =[];
var nextSpacePosition;

function translate(word) {
	finalWord = word;
	wordsArray = [];
	nextSpacePosition = 0;
	needsToBeSplit(word);
	console.log(wordsArray);
}

function putIntoArray(word) {
	wordsArray.push(word);
}

function needsToBeSplit(word) {
	nextSpacePosition = word.indexOf(" ");
	if(nextSpacePosition == -1) {
		putIntoArray(word);
	}
	else {
		takeFirstWord(word);
	}
}

function takeFirstWord(word) {
	finalWord = word.slice(nextSpacePosition + 1);
	word = word.slice(0, nextSpacePosition);
	putIntoArray(word);

	if(finalWord.indexOf(" ") == -1) {
		wordsArray.push(finalWord);
	}
	else {
		needsToBeSplit(finalWord);
	}
}





	//Does it have multiple words?
		//Yes
			//Make array with one word per entry
			//Check Words
		//No
			//Check Words

	//Check Words
		//Does it contain "qu"
			//Yes
				//Is it at the beginning?
					//Yes - Count qu as one letter then translate
					//No -
			//No
		//Does it begin with a vowel or consonant?
			//Vowel- Translate
			//Consonant - Does it begin with one, two, or three consonants?
				//One - Translate
				//Two - 
					//Make first two consonants one word
					//Translate
				//Three -
					//Make first three consonants one word
					//Translate
