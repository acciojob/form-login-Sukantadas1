function getFormvalue() {
    //Write your code here
	    // Get the form element by its ID
    var form = document.getElementById('form1');

    // Access the input fields by their names
    var FirstName = form.elements['fname'].value;
    var LastName = form.elements['lname'].value;

    // Display the values using alert
    alert(" " + FirstName + " " + LastName);

}
