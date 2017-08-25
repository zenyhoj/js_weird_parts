/*var objectLiteral ={
    firstName: 'joe'
};

console.log(JSON.stringify(objectLiteral.firstName));



var jsonObject = JSON.parse('{"firstname": "joe"}'); 
console.log(jsonObject);

var aFunction = function(greet){
    

};
console.log(typeof aFunction);*/

/*function greet(){
    var person = {lastname: "balingit"};
    console.log(person.lastname)
}

greet();
console.log(greet.firstname = "joe");*/

//passing a function as an argument to a function


/*function greet(a){
    a(); //function call a() ->refers to a function that is passed inside a function greet();
}

greet(function(){
    console.log('hi');
});*/

//by Value vs. by Reference

/*/ by Value
var a = 5;
b = a;
console.log(b);
a = 3;
console.log(a);*/

//by Reference

var c = { greetings: "hi" };
var d;
d = c;
c.greetings = "hello"; //property change
console.log(c);
console.log(d);

//by reference even as paramaters
function changedGreeting (obj){ //l
    obj.greetings = "hola";
}
changedGreeting(d);
console.log(d);
console.log(c);

c = {greetings: 'howdy'};
console.log(c);//outputs howdy ->creates new location in memory
console.log(d);//outputs hola ->points to old location in memory














