function addBulletsTo(text) {
	return " - " + text.trim().split("\n").join("\n - ")
}

var el = document.activeElement;
var start = el.selectionStart;
var end = el.selectionEnd;

var selectedText = el.value.slice(start, end);
var before = el.value.slice(0, start);
var after = el.value.slice(end);

var text = before +  addBulletsTo(selectedText) + after;
el.value = text;

