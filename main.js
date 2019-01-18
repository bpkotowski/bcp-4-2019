function greetMe() {
    console.log('greet function called');

    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value; 
    
    console.log(firstNameInput.value);

    var greeting = 'Hello ' + firstName + ' ' + lastName + '!';

    var greeter = document.getElementById('greeter');
    greeter.textContent = greeting;

    console.log(greeting);

    console.log(firstName, lastName);


}

greetMe();