var finalWord = "";
var wordsArray =[];
var nextSpacePosition;
var qInWord;
var qPlaceInWord;
var qPlaceInSentence;

function translate(word) {
	wordsArray = [];
	nextSpacePosition = 0;
	needsToBeSplit(word);
	containsQ(wordsArray);
	convertWords(wordsArray,qPlaceInSentence, qPlaceInWord);
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
	var tempWord = word.slice(nextSpacePosition + 1);
	word = word.slice(0, nextSpacePosition);
	putIntoArray(word);

	if(tempWord.indexOf(" ") == -1) {
		wordsArray.push(tempWord);
	}
	else {
		needsToBeSplit(tempWord);
	}
}

function convertWords(wordsArray, word, letter) {
	for(var i=0; i < wordsArray.length; i++) {
		var beginningConsonants = howManyConsonants(wordsArray[i]);
		var firstLetter;
		var remainingWord;
		var tempWord = "";

		if(beginningConsonants == 0) {
			if(i < wordsArray.length - 1) {
				tempWord += wordsArray[i] + "ay ";
			}
			else {
				tempWord += wordsArray[i] + "ay";
			}
		}
		else {
			if(qInWord == true && i == word) {
				beginningConsonants = letter + 2;
				firstLetter = wordsArray[i].slice(0,beginningConsonants);
				remainingWord = wordsArray[i].slice(beginningConsonants);
				if(i < wordsArray.length - 1) {
					tempWord += remainingWord + firstLetter + "ay ";
				}
				else {
					tempWord += remainingWord + firstLetter + "ay";
				}
			}
			else {
				firstLetter = wordsArray[i].slice(0, beginningConsonants);
				remainingWord = wordsArray[i].slice(beginningConsonants);
				if(i < wordsArray.length - 1) {
					tempWord += remainingWord + firstLetter + "ay ";
				}
				else {
					tempWord += remainingWord + firstLetter + "ay";
				}
			}
		}
		wordsArray.splice(i,1,tempWord);
	}
	concatenate(wordsArray);
}

function concatenate(wordsArray) {
	finalWord = "";
	for(var i=0; i<wordsArray.length; i++) {
		finalWord += wordsArray[i];
	}
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
				qPlaceInSentence = i;
				qPlaceInWord = j;
			}	
		}
	}
}