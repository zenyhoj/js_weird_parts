var greetFunc = function(name){
    return {name: 'Property'}
    
}();//immediately calls the function and stores the value to a variable.
console.log(greetFunc);//outputs the variable and return and object.


(function(firstname){ //also an IIFE. This becomes a function expression by wrapping function with ()
    var greeting = "hello ";
    console.log(greeting + firstname);
}('joe'));

console.log(greeting);//refers to global execution context. outside of the function expression. could be referring to other script

//It's also possible to override global value/object within a function
(function(global, firstname){ //also an IIFE. This becomes a function expression by wrapping function with ()
    var greeting = "hello ";
    global.greeting = "hello "
    console.log(greeting + firstname);
    console.log(global.greeting + firstname);
}(window, 'joe'));

console.log(greeting);//refers to global execution context. outside of the function expression. could be referring to other script
//value of greeting which is supposed to be hola will be changed to hello -> 
//
