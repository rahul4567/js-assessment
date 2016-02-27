exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
  	var interval = setInterval(function(){
  		
  		if(start!=end) {
  			console.log(start);	
  			start++;
  		}
  		
  	},100);
  	return {
  		cancel:function(){
  			clearInterval(interval);
  		}
  	}
  	//return {cancel: function(){interval.cancel())};
  }
};
