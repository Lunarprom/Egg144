function getXmlHttpRequestObject() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest(); //For Firefox/Safari
	} else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP"); //For IE
	} else {
		alert("Error!");
	}
}

var searchReq = getXmlHttpRequestObject();