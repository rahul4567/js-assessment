exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum = 0;
    for(var i=0;i<arr.length;i++) {
      sum +=arr[i];
    }
    return sum;
    /*var sum=0;
    arr.reduce(function(previousValue, currentValue, currentIndex, array) {
      sum=  parseInt(previousValue) + parseInt(currentValue);
    });
    console.log(sum);
    return sum;*/
  },

  remove : function(arr, item) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var resultArray = arr1.concat(arr2);
    return resultArray;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
   var count = arr.reduce(function(n, value) {
        return n + (value === item);
    }, 0);
    return count;
  },

  duplicates : function(arr) {
    var sorted_arr = arr.sort(),
        results = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            if(results.indexOf(sorted_arr[i])==-1) {
              results.push(sorted_arr[i]);
            }
            
        }
    }
    console.log(results);
    return results;
  },

  square : function(arr) {
    results = [];

      for (var i = 0, len = arr.length; i < len; i++) {
          results.push(arr[i] * arr[i]);
      }
      console.log(results);
      return results;     
    },

  findAllOccurrences : function(arr, target) {
        var indexes = [], i = -1;
        while ((i = arr.indexOf(target, i+1)) != -1){
            indexes.push(i);
        }
        console.log(indexes)
        return indexes;
  }
};
