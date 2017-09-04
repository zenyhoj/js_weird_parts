function buildFunctions(){
    var arr = [];

    for(var i = 0; i<3; i++){ //pushed a value into an array
        arr.push(function () {
            console.log(i) //at the time of loop expiration, 3 is the last value and it is stored in memory as a value of i
            
            
        });
    }

    return arr; //return the value of i which is 3 at the time of execution
    console.log(/*----------------------------*/);
    
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




