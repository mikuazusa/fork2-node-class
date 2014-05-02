function Class(method){
	if(method.initialize){
		klass = method.initialize;
	} else{
		klass = function(){}
	}

	for (var property in method){
		if (property != "initialize")
		klass.prototype[property] = method[property];
	}

	return klass;
};

module.exports = Class;
