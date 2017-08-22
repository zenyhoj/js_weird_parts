var joe = {
    firstName: 'joe',
    lastName: 'balingit',
    address: {
        street: 'purok 6',
        barangay: 'rizal'
    }
};

//function to accept an object as an argument
function greet(firstname,  lastname){
    console.log(joe.firstName + ' ' + joe.lastName);

}

greet(joe);//property firstName from Object joe is pass as a value to a function greet();
greet({firstname: 'eddie', lastname: 'apatan'}); //creates property on the fly and pass it to a function greet();


    


