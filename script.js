function getFormvalue() {
    //Write your code here
	    // Get the form element by its ID
    var form = document.getElementById('form1');

    // Access the input fields by their names
    var firstName = form.elements['fname'].value;
    var lastName = form.elements['lname'].value;

    // Display the values using alert
    alert(" " + firstName + " " + lastName);

}
