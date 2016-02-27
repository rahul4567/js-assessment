exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	var refrence = Math.pow(2,bit-1),
  		temp = num & refrence;
  
  	return temp >> bit-1;
  },

  base10: function(str) {
  	return parseInt(str, 2);
  },

  convertToBinary: function(num) {
  	return ("000000000" + num.toString(2)).substr(-8);
  },

  multiply: function(a, b) {
  		console.log(b.toString().split('.'));
  		console.log(parseInt(b+''.split('.').length-1))
  		console.log((a*b).toFixed(parseInt(b.toString().split('.').length-1)));
  		return parseFloat((a*b).toFixed(parseInt(b.toString().split('.')[1].length)));
  }
};
