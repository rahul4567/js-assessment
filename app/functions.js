exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    var xyz = fn(arr[0],arr[1],arr[2]);
    return xyz;
  },

  speak : function(fn, obj) {
    var results = fn.call(obj);
    console.log(results);
    return results;
  },

  functionFunction : function(str) {
    return function(str1) {
      return str+', '+str1;
    }
  },

  makeClosures : function(arr, fn) {
    var arrFun = [];
   
      for (var i = 0; i < arr.length; i++) {
        (function(x){
          arrFun.push(function(){return fn(arr[x])});
        })(i);
       
      }
      return arrFun;
  },

  partial : function(fn, str1, str2) {
    return function(part){
      return fn(str1, str2,part)
    }
  },

  useArguments : function() {
    var sum = 0,
        argLength = arguments.length;
    if(argLength>0){
      for(var i=0;i<argLength;i++) {
        sum += arguments[i];
      }
    }
    return sum;
  },

  callIt : function(fn) {
    if(arguments.length === 3){
      return fn(arguments[1], arguments[2]);
    }else if(arguments.length === 4){
      return fn(arguments[1], arguments[2], arguments[3]);
    }
  },

  partialUsingArguments : function(fn) {
      var arg = arguments;
      switch(arguments.length){
        case 1:
            return function(a,b,c){
              return fn(a,b,c);
            }
        case 2:
            return function(b, c){
              return fn(arg[1], b, c);
            }
        case 3:
            return function(c){
              return fn(arg[1], arg[2], c);
            }
        case 4:
            return function(){
              return fn(arg[1], arg[2], arg[3]);
            }
      }
  },

  curryIt : function(fn) {
    return function(a){
      return function(b){
        return function(c){
          return fn(a,b,c);
        }
      }
    }
  }
};
