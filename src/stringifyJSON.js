// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
 	if (typeof(obj) == "number" || typeof(obj) == "boolean" || !(obj)) {
 		return '' + obj;
	} else if (typeof(obj) == "string") {
		return '"' + obj + '"';
	} else if (obj.constructor == Array) {
		var string = "[";
		for ( var i = 0; i < obj.length; i++) {
			if (i !== 0) {
				string += "," + stringifyJSON(obj[i]);
			} else {
				string += stringifyJSON(obj[i]);
			}
		}
		return string + "]";
	} else if (typeof(obj) == "object") {
		var string = "{";
		var keys = Object.keys(obj);
		for (var i = 0; i < keys.length; i++) {
			if (obj[keys[i]] === undefined || typeof(obj[keys[i]]) == "function") {

			} else {
				string += stringifyJSON(keys[i]) + ":" + stringifyJSON(obj[keys[i]]);
				if (i !== keys.length - 1 && keys.length !== 1) {
					string += ",";
				}		
			}
		}
		return string += "}";
	} else {
		return undefined;
	}
}
