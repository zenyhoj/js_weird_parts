var joe = {
    firstName: 'joe',
    lastName: 'balingit',
    address: {
        street: 'purok 6',
        barangay: 'rizal'
    }
};


var eddie = { 
    firstName: 'eddie', 
    lastName: 'apatan', 
    address: {
        street: 'purok nangka',
        barangay: 'Poblacion 4'
        }
    };


//accepts joe object 
//accepts object created on the fly
function greet(person){
    console.log(person.firstName + ' ' + person.lastName + ' ' + person.address.street + ' ' + person.address.barangay);

}


greet(joe);//property firstName from Object joe is pass as a value to a function greet();
greet(eddie);
// greet({ 
//     firstName: 'eddie', 
//     lastName: 'apatan', 
//     address: {
//         street: 'purok nangka',
//         barangay: 'Poblacion 4'
//     }
// }); //creates property on the fly and pass it to a function greet();





