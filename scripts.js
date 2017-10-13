var person = {

    firstname: 'John',
    lastname: 'Doe',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var loggedName = function(args1, args2){
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

var addToThis = function(x, y){
    return this.num + x + y;
}

console.log(addToThis.call(obj, 1, 5));
console.log(addToThis.apply(obj, [1, 5]));

var bound = addToThis.bind(obj);//using, first bind the target object 
console.log(bound(1, 5));//then bound accepts arguments(1) and pass it to the calling method 

