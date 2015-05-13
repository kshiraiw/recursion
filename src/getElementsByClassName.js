// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
	var results = traverseElement(document.body, className);
	return results;
};

var traverseElement = function(element, className) {
	var elements = [];
	var classes = element.classList;
	if (classes) {
		for (var j = 0; j < classes.length; j++) {
			if (classes[j] == className) {
				elements.push(element);
			}
		}
	}
	var nodes = element.childNodes;
	for (var i = 0; i < nodes.length; i++) {
		var elm = traverseElement(nodes[i], className);
		for (var k = 0; k < elm.length; k++) {
			elements.push(elm[k]);
		}
	}
	return elements;
}