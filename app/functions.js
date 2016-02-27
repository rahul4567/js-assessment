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

  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
