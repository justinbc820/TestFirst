function Calculator() {
	total = 0;

	this.value = function() {
		return total;
	};

	this.add = function(number) {
		total += number;
		return total;
	};

	this.subtract = function(number) {
		total -= number;
		return total;
	}
};



