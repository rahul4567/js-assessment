exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
  	function Module(name,greeting) {
  		this.name = name;
  		this.greeting = greeting;
  		this.sayIt = function () {
  			return this.greeting+', '+this.name;
  		}
  	}
  	return new Module(str2,str1);
  }
};
