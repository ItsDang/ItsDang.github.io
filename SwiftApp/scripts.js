// var inputs = document.getElementsByTagName("input");
var requiredFieldSet = document.getElementById("required");
var requiredInputs = requiredFieldSet.getElementsByTagName("input");

var additionalFieldSet = document.getElementById("additional");
// var additionalInputs = additionalFieldSet.getElementsByTagName("input");

var companiesFieldSet = document.getElementById("companies");
// var companiesInputs = companiesFieldSet.getElementsByTagName("input");

var submitButton = document.getElementById("SubmitButton");



//When Submit Pressed
var submit = function() {
	console.log("Submitting data.");
	//Read in Required Fields
	var fnamedata = requiredInputs[0].attributes;
	// for(var i = 0; i < requiredInputs.length; i++) {
	// 	console.log(i);
	// }

	//Read in Files

	//Read in what companies are selected
}

//Set Button Click to submit function
submitButton.onclick = submit;