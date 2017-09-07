//function factories

function makeGreeting(language){

    return function(firstname, lastname){

        if(language === 'en'){
            console.log('hello '+ firstname + ' ' + lastname);
        }

        if (language === 'es') {
            console.log('hola ' + firstname + ' ' + lastname);
        }
    }
}

var greetEnglish = makeGreeting('en');
greetEnglish('John', 'Doe');
var greetSpanish = makeGreeting('es');
greetSpanish('John', 'Doe');

