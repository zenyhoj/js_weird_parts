var arr = [1,false,{ name: 'joe'}, function(name) { console.log('Hello ' + name); },"string"]; //function could contain one of the following values
console.log(arr);
//invoking a function within an array an passing the name property to a function as a parameter
arr[3](arr[2].name);

var arrayOne = ['brown', 'fox'];
var arrayTwo = ['the', 'quick', ...arrayOne];//...spread operator, used to insert a value of an array to another array element
console.log(arrayTwo);

//adding numbers using spread operator
function addNumbers(one, two, three){
    console.log(one+two+three);
}
var numbers = [1,2,31];
addNumbers(...numbers);

//looping through an array
var Person = function (name, age, group = "default") {
    this.name = name,
        this.age = age,
        this.group = group
}

var ArrPerson = [];
debugger;
ArrPerson.push(new Person("john", 12, "M1"));
ArrPerson.push(new Person("sam", 2, "M0"));
ArrPerson.push(new Person("joe", 33, )); //if group is empty, outputs default

for (var key in ArrPerson) {
    // if(ArrPerson[key].age === 12){
    //do something
    // debugger;
    // if(ArrPerson[key].group===""){

    console.log(ArrPerson[key].name + '|' + ArrPerson[key].age + '|' + ArrPerson[key].group);
    // console.log(ArrPerson[key].age);
    // console.log(ArrPerson[key].group);
    //}
}
