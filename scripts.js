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

var greetEnglish = makeGreeting('en');//pass en into makeGreeting function argument
greetEnglish('John', 'Doe');//becomes a function that returns an anonymous function that accepts two arguments: firstname, lastname. en will be stored in memory and will be use for the first execution context.

var greetSpanish = makeGreeting('es');//pass es into makeGreeting function argument
greetSpanish('John', 'Doe');//becomes a function that returns an anonymous function that accepts two arguments: firstname, lastname. en will be stored in memory and will be use for the another execution context.

