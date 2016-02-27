exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /\d+/.test(str);
  },

  containsRepeatingLetter : function(str) {
    return /([a-zA-Z]).*?\1/.test(str);
  },

  endsWithVowel : function(str) {
    var reverseStr = str.split('').reverse().join('');
    return /[aeiouAEIOU]$/.test(str)
  },

  captureThreeNumbers : function(str) {

    if(/\d{3}/.test(str)) {
      var xxx =str.replace(/[a-zA-Z]/g , "");
       xxx = xxx.substring(0,3);
       return xxx;
    }else{
      return false;
    }
      
  },

  matchesPattern : function(str) {
    return /^(?:\s*)\d{3}-\d{3}-\d{4}(?:\s*)$/.test(str);
  },
  isUSD : function(str) {
    var x = str.split('.');
    if (x.length === 2 && x[1].length !== 2) {
      return false;
    }
    return (str.charAt(0) === '$') ? /^\$?\d+(,\d{3})*\.?[0-9]?[0-9]?$/.test(str) : false;
  }
};
