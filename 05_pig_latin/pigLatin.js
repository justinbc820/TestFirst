function translate(word) {
	var firstLetter = word.charAt(0);
	var secondLetter = word.charAt(1);
	var translatedWord = ""

	if(firstLetter == ("a"||"e"||"i"||"o"||"u")) {
		word = word + "ay";
		return word;
	}
	else {
		if((firstLetter == "c" || firstLetter == "t") && secondLetter == "h") {
			firstLetter = firstLetter + secondLetter;
			word = word.slice(1);
		}
		for(var i=0; i<word.length; i++) {
			translatedWord += word.charAt(i+1);
		}

		translatedWord += firstLetter + "ay";

		console.log(translatedWord);

		return translatedWord;
	}
}
