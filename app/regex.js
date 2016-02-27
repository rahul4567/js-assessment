exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var regExpersion = new RegExp('^[0-9]$');
    console.log(/^\w+$/i.test(str));
    return regExpersion.test(str);
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
    console.log(str.replace(/,/g , ""));
    return /^\$?[0-9]+\.?[0-9]?[0-9]?$/.test(str.replace(/,/g , ""));
  }
};
