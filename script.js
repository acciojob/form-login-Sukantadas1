function getFormvalue() {
    //Write your code here
	    // Get the form element by its ID
    var form = document.getElementById('myForm');

    // Access the input fields by their names
    var firstName = form.elements['firstName'].value;
    var lastName = form.elements['lastName'].value;

    // Display the values using alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);

}
