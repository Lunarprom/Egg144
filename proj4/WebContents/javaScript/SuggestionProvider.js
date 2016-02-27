function getXmlHttpRequestObject() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest(); //For Firefox/Safari
	} else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP"); //For IE
	} else {
		alert("Error!");
	}
}

var suggestReq = getXmlHttpRequestObject();


//Build a Suggestion Provider
function StateSuggestions() {
	//initializations
}

StateSuggestions.prototype.requestSuggestions = function (oAutoSuggestControl, bTypeAhead) {
	var aSuggestions = [];
	var sTextboxValue = oAutoSuggestControl.textbox.value;

	if (sTextboxValue.length > 0){

		for (var i = 0; i < this.states.)
	}

	//determine suggestions for the control
	oAutoSuggestControl.autosuggest(aSuggestions, bTypeAhead);
};

