
// do not use reserved keyword for variable name & use meaningful
// do not start with the number or space or hyphen(-)
// const, let, var
let name = "Ian"; 
console.log(name)

// *************************
let interestRate = 0.3;
//const interestRate = 0.3;
interestRate = 1; 

console.log(interestRate);

// ************************* variables
let s = "string";
let age = 30;
let isApproved = false; 
let undefined_name = undefined;
// to clear the value of variable, use null
let firstName = null; 


// ************************* Objects *************************

let person = {
    name : 'Sai',
    age : 30 
};


console.log(person);
// dot notation to access the name 
person.name = 'John';
// or bracket notation; 
person['name'] = 'John'
console.log(person);

// ************************* Array *************************

let colors = ['red', 'blue'];
// we can store 1 and string in the same array
colors[2] = 1; 
console.log(colors.length)

colors.forEach(function(color){

    console.log(color); 
});

// ************************* functions *************************


function welcome(name){
    //body of the function
    console.log('Hello ' + name );
}

function sq(number){
    return number * number; 
}

welcome('John');
console.log(sq(2));