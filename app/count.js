exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
  	/*var fnc = function(){
    return function(){
         if(start==end) {
	  			
	  		}else{
	  			console.log(start);	
	  			start++;
	  		}
    }
};

setInterval(fnc, 100);
return {
  		cancel:function(){
  			clearInterval(interval);
  		}
  	}*/
  	/*var xyz = function(value){
  		console.log(value  + 'chhhhheeeetttttaaannn');

  	}*/
  	//setInterval(xyz,100);
  	var that = window;
  	var interval = setInterval(function(){
  		(function(start){
	        if(start==end) {
	  			
	  		}else{
	  			that.console.log(start);	
	  			start++;
	  		}
        })(start);
  		
  		
  	},100);
  	return {
  		cancel:function(){
  			clearInterval(interval);
  		}
  	}
  	//return {cancel: function(){interval.cancel())};
	//alert('lll	');
	//console.log(value  + 'chhhhheeeetttttaaannn');
	/*xyz = function(value){
		if (value != end) {
			console.log(value);
		}
  	}
	//function myFunction() {
	    setInterval(function(){ 

	    	xyz(start); 
	    	start++;
	    }, 100);*/
	//}
  }
};
