// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

const Person = function(firstAndLast) {
  let [firstName, lastName] = firstAndLast.split(" ");

  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };

  this.getFirstName = function() {
    return firstName;
  }
  this.getLastName = function() {
    return lastName;
  }
  this.setFirstName = function(first) {
    firstName = first;
  }
  this.setLastName = function(last) {
    lastName = last;
  }
  this.setFullName= function(firstAndLast) {
    [firstName, lastName] = firstAndLast.split(" ");
  }
};

const bob = new Person('Bob Ross');
bob.getFullName();