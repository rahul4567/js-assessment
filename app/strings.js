exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var strArray =  str.split(''),
  		resultArray = [],
  		counter = 0;
  	for(var i=0;i<strArray.length;i++){
  		if(counter==0){
  			resultArray.push(strArray[i]);
  			counter++;
  		}
  		if(strArray[i]==strArray[i+1]) {
  			if(counter < amount){
  				resultArray.push(strArray[i]);
  				counter++;
  			}
  		}else if(strArray[i]!=strArray[i+1]) {
  			if(resultArray[resultArray.length-1]!=strArray[i] ){
  				resultArray.push(strArray[i]);
  			}
  			counter = 0;
  		}
  	}
  	console.log(resultArray);
  	return resultArray.join('');
  	
  },
  wordWrap: function(str, cols) {
  	return str.join('\n');
  },
  reverseString: function(str) {
  	var reverseStr = str.split('').reverse().join('');
  	return reverseStr;
  }
};
