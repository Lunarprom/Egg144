function AutoSuggestionControl(oTextbox, oProvider){
	this.provider = oProvider;
	this.textbox = oTextbox;
}

//Initialization of the control
AutoSuggestionControl.prototype.init = function () {
	var oThis = this;
	this.textbox.onkeyup = function (oEvent) {
		if (!oEvent) {
			oEvent = window.event;
		}
		oThis.handleKeyUp(oEvent);
	}
}

//Text Selection
AutoSuggestionControl.prototype.selectRange = function (iStart, iLength) {
	//For IE
	if (this.textbox.createTextRange) {
		var oRange = this.textbox.createTextRange();
		oRange.moveStart("Character", iStart);
		oRange.moveEnd("Character", iLength - this.textbox.value.length);
		oRange.select();
	} else if (this.textbox.setSelectionRange) { //For Mozilla
		this.textbox.setSelectionRange(iStart, iLength);
	}

	this.textbox.focus();
};


//Implementing Type Ahead
AutoSuggestionControl.prototype.typeAhead = function (sSuggestion) {
	//Check whether it is IE or Mozilla who support typeAhead function
	if (this.textbox.createTextRange || this.textbox.setSelectionRange) {
		var iLen = this.textbox.value.length;
		this.textbox.value = sSuggestion;
		this.selectRange(iLen, sSuggestion.length);
	}
};


//The autosuggest() Method
AutoSuggestionControl.prototype.autosuggest = function (aSuggestions) {
	if (aSuggestions.length > 0) {
		this.typeAhead(aSuggestions[0]);
	}
};

//Handle the autosuggest using keyup action
//Use keyCode to restrict the reaction for only character keys
AutoSuggestionControl.prototype.handleKeyUp = function (oEvent) {
	var iKeyCode = oEvent.keyCode;
	if (iKeyCode == 8 || iKeyCode == 46) { //backspace and delete keys
		this.provider.requestSuggestions(this, false); 
	} else if (iKeyCode < 32 || (iKeyCode >= 33 && iKeyCode <= 46) || (iKeyCode >= 112 && iKeyCode <= 123)) {
		//ignore the action
	} else {
		//for all the character keys, request suggestions
		this.provider.requestSuggestions(this, false);
	}
};































