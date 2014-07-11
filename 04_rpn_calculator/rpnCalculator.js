function Calculator() {
	var myArray = [];
	var total = 0;

	this.push = function(number) {
		myArray.push(number);

		return myArray;
	};

	this.plus = function() {
		var tempSum = 0;

		for(var i=0; i<2; i++) {
			tempSum += myArray.pop();
		};

		myArray.push(tempSum);

		if(myArray.length == 1) {
			total = myArray[0];
			return total;
		}
		else {
			total += tempSum;
			return myArray;
		}
	};

	this.minus = function() {
		var tempSum = myArray.pop();
		var finalSum = myArray.pop() - tempSum;

		myArray.push(finalSum);

		if(myArray.length == 1) {
			total = myArray[0];
			return total;
		}
		else {
			total += finalSum;
			return myArray;
		};
	};

	this.divide = function() {
		var tempNumber = myArray.pop();
		var finalNumber = myArray.pop() / tempNumber;

		myArray.push(finalNumber);

		if(myArray.length == 1) {
			total = myArray[0];
			return total;
		}
		else {
			total += finalNumber;
			return myArray;
		};
	};

	this.times = function() {
		var tempNumber = myArray.pop();
		var finalNumber = myArray.pop() * tempNumber;

		myArray.push(finalNumber);

		if(myArray.length == 1) {
			total = myArray[0];
			return total;
		}
		else {
			total += finalNumber;
			return myArray;
		}
	}

	this.value = function() {
		return total;
	};
};