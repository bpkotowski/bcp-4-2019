function greetMe() {
    console.log('greet function called');
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value; 

    var greeting = 'Hello'  + firstName + lastName + '!';

    console.log(greeting);

    console.log(firstName,  lastName);


}

greetMe();