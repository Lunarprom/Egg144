//Build a Suggestion Provider
function SuggestionProvider() {
	//initializations
}

SuggestionProvider.prototype.requestSuggestions = function (oAutoSuggestControl) {
	var aSuggestions = new Array();

	//determine suggestions for the control
	oAutoSuggestControl.autosuggest(aSuggestions);
}

