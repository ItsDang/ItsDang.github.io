var submitButton = document.getElementById("SubmitButton");

//When Submit Pressed
var submit = function() {
	console.log("Submitting data.");
	var requiredFieldSet = document.getElementById("required");
	var requiredInputs = requiredFieldSet.getElementsByTagName("input");

	var additionalFieldSet = document.getElementById("additional");
	var additionalInputs = additionalFieldSet.getElementsByTagName("input");

	var companiesFieldSet = document.getElementById("companies");
	var companiesInputs = companiesFieldSet.getElementsByTagName("input");
	//Read in Required Fields
	var fnamedata = requiredInputs[0].value;
	console.log(fnamedata);
	var lnamedata = requiredInputs[1].value;
	console.log(lnamedata);
	var emaildata = requiredInputs[2].value;
	console.log(emaildata);
	var phonedata = requiredInputs[3].value;
	console.log(phonedata);
	if (fnamedata==""||lnamedata==""||emaildata==""||phonedata=="") {
		console.log("A required field is empty!");
		alert("A required field is empty!");
	}

	//Read in Files

	//Read in what companies are selected
	// console.log(companiesInputs);
	// window.open();
	for (var i = companiesInputs.length - 1; i >= 0; i--) {
		if(companiesInputs[i].checked) {
			console.log(companiesInputs[i].value);
			window.open(companiesInputs[i].value);
		}
	}
	// window.open();
}

//Set Button Click to submit function
submitButton.onclick = submit;