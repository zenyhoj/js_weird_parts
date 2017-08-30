var arr = [
    1,
    false,
    {
        name: 'joe'
    },
    function(name){
        console.log('Hello ' + name);
    },
    "string"
];
console.log(arr);
//invoking a function within an array an passing the name property to a function as a parameter
arr[3](arr[2].name);

