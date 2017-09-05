/*What is a closure?
A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.
The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s arguments object, however, even though it can call the outer function’s parameters directly.*/

function buildFunctions(){
    var arr = [];

    for(var i = 0; i<3; i++){ //pushed a value into an array
        arr.push(function () {
            console.log(i) //at the time of loop expiration, 3 is the last value and it is stored in memory as a value of i
            
            
        });
    }

    return arr; //return the value of i which is 3 at the time of execution

    
}

var fs = buildFunctions(); //this does not output the console.log(i);
console.log(fs); //returns an array of functions
fs[0](); //first index in a buildFunction array
         //(); invokes the anonymous function and outputs the stored value which is 3

fs[1](); //second index in a buildFunction array
         //(); invokes the anonymous function and still outputs the stored value which is 3

fs[2](); //second index in a buildFunction array
         //(); invokes the anonymous function and still outputs the stored value which is 3*/


function buildFunc2(){

    var arr2 = [];

    for(var i=0; i<3; i++){
        arr2.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))
        )
    }
    return arr2;

}
var fs2 = buildFunc2();
fs2[0]();
fs2[1]();
fs2[2]();

//end of buildFunc example

function adder(x){
    return function(y){
        return x + y;
    }

}

var add5 = adder(5)//PASSED INTO adder function
console.log(add5(5));//INVOKES AN ANONYMOUS FUNCTION AND PASSED IN 5 as a value for y and outputs 15
var add15 = adder(15)
console.log(add15(5));
//end of adder example

function greeting(greet){
    var greetName = function(name){
        console.log(greet + ' ' + name);
    }
    return greetName;

}

var sayHi = greeting('Hi');
sayHi('Joe'); //invokes the anonymous fuction and passed a value into name
sayHi('Eddie');
sayHi('Edmar');

//a closure is a feature in javascript that a variable within a function or a global variable is accessible through an inner function


// var greetJoe = greeting('Hi');
// greetJoe('Joe');


function someFunc(hello){
 var greetings = ' there '    
 return function sayName(name){
        console.log (hello + greetings + name);
    }   
 

}
var sayHi = someFunc('Hello');
sayHi('Joe');











