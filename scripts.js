function greet (firstname, lastname, language){//sets up default value if arguments in the function is empty
   
    if(arguments.length === 0){ //arguments are create after invoking a function
        console.log('Missing parameter');
        console.log("------------------------")
        return;
        //return; //breaks out of an if statment and continue to execute code
    }
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('arg 0: ' + arguments[0]);//used to access function arguments
    console.log("------------------------")
}

greet();
greet("Joe", "Balingit", "en");