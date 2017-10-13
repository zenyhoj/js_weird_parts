var person = {

    firstname: 'John',
    lastname: 'Doe',
    getFullName: function () {
        return this.firstname + ' ' + this.lastname;
    }
}

var loggedName = function (args1, args2) {
    console.log(this.getFullName());
    console.log(args1 + ' ' + args2);
    console.log('--------------');
}.bind(person); //binds whatever properties and methods within the person object.
//without .bind, this.getFullName() will throw an error



loggedName('args1', 'args2');
loggedName.call(person, 'args1', 'args2');
loggedName.apply(person, ['args1', 'args2']); //arguments must be an array
// var logPerson = loggedName.bind(person);

// logPerson();



var obj = {
    num: 2
}

var addToThis = function (x, y) {
    return this.num + x + y;
}

console.log(addToThis.call(obj, 1, 5));
console.log(addToThis.apply(obj, [1, 5]));

var bound = addToThis.bind(obj); //using, first bind the target object 
console.log(bound(1, 5)); //then bound accepts arguments(1) and pass it to the calling method 


///-------------------------------------/
// Use case
//1. function currying - creating a copy of a function but with some preset parameters

function multiply(a, b) {
    return a * b;
}
var multiplyByTwo = multiply.bind(this, 2); //2 is called preset parameters. it could be omitted
                                            //this refers to multiply function        
console.log(multiplyByTwo(6));

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(6));


// 2. Function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

//person2 object borrows a method getFullName from person object and use it to display property values
console.log(person.getFullName.apply(person2)); //provide that, person2 properties === to person