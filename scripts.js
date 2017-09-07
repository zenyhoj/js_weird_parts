//function that returns a function and delays the output using the setTimeout method.

/*function sayLater(name){
    var greeting = 'hi';


     setTimeout(function () {
         console.log(greeting + name);

     }, 3000);
    

}

var sayName = sayLater('joe');*/

//callback

function callMe(callback){
    var initial = 'Im waiting';
    console.log(initial);

    callback();//calls the anonymous function as a parameter of callMe
}

callMe(function(){
    console.log('Im done');
});
