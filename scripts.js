function greet(whattosay){
    return function(name){
          console.log(whattosay + ' ' + name);
    }
}

// greet('hello')('joe'); //invokes a function and returns another function by invoking it
var sayHi = greet('Hi'); //1. calls the greet function and passing a 'hi' value to whattosay parameter
                        //after performing the code, it pops out of stack but whattosay will remain in the memory space 
                           
sayHi('Joe'); //2. this calls the inside anonymous function and passing 'Joe' as a value for name parameter
                //then in console.log, the value of whattosay is still be accessible because it was
                //stored in the memory space, so will output 'Hi Joe';



