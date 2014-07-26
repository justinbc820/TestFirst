var finalWord = "";
var wordsArray =[];
var nextSpacePosition;
var currentSpecCounter = 0;
var qInWord;
var qWordHolder = {
	qWord:"",
	qPlaceInSentence:0,
};

function translate(word) {
	finalWord = word;
	wordsArray = [];
	nextSpacePosition = 0;
	needsToBeSplit(word);
	containsQ(wordsArray);
	convertWords(wordsArray);
	if(qInWord) {
		//add splice to put new word back into array
	}
	console.log(finalWord);
	return finalWord;
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

function convertWords(wordsArray) {
	finalWord = "";
	for(var i=0; i<wordsArray.length; i++) {
		var beginningConsonants = howManyConsonants(wordsArray[i]);
		var firstLetter;
		var remainingWord;


		if(beginningConsonants == 0) {
			if(i < wordsArray.length-1) {
				finalWord += wordsArray[i] + "ay ";
			}
			else {
				finalWord += wordsArray[i] + "ay";
			}

		}
		else {
			firstLetter = wordsArray[i].slice(0, beginningConsonants);
			remainingWord = wordsArray[i].slice(beginningConsonants);
			if(i < wordsArray.length-1) {
				finalWord += remainingWord + firstLetter + "ay ";
			}
			else {
				finalWord += remainingWord + firstLetter + "ay";
			}

		}
	}
}

function concatenate() {
	
}

function howManyConsonants(currentWord) {
	var beginningConsonants = 0;
	var currentLetter;
	for(var i=0; i<currentWord.length; i++) {
		currentLetter = currentWord.charAt(i);
		if(currentLetter == "a" || currentLetter == "e" || currentLetter == "i" || currentLetter == "o" || currentLetter == "u") {
			return beginningConsonants;
		}
		else {
			beginningConsonants++;
		}
	}
	return beginningConsonants;
}

function containsQ(wordsArray) {
	qInWord = false;
	for(var i=0; i<wordsArray.length; i++) {
		for(var j=0; j<wordsArray[i].length; j++) {
			if(wordsArray[i][j] == "q") {
				qInWord = true;
				dealWithQs(wordsArray[i],i,j);
			}
		}
	}
}

function dealWithQs(word, wordNumber, letter) {
	qWordHolder.qWord = word;
	qWordHolder.qPlaceInSentence = wordNumber;
	wordsArray.splice(wordNumber,1);
	//convert the words to pigLatin
	console.log(wordsArray);
}