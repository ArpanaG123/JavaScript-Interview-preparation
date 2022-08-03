//Question1:What are promises and why do we need them?
//Promises are used to handle asynchronous operations in JavaScript and the return type of all the methods in the Promise object.
//Promises  have three stages:1.pending 2.Resolved(fulfilled) 3.Rejected.

//We use promises by following reasons:
//1.Use promises whenever you are using asynchronous or blocking code.
//2.resolve maps to then and reject maps to catch for all practical purposes.
//3.Make sure to write both .catch and .then methods for all the promises.
//4.If something needs to be done in both cases use .finally.
//5.We can add multiple handlers to a single promise.

//e.g
const getId = new Promise((resolve,reject)=>{//producer,executor
    setTimeout(() => {
        let id = [1,2,3,4,6];
        resolve(id);
        //reject("Error in fetching");
        
    },2000);
});

getId     //consumer
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})
.finally(() => {
    console.log("successfully executed");
})

//Question2:What is the purpose of async/await keywords?
//1.Async/Await is used to work with promises in asynchronous functions.
//2.Async/await is basically used to ignore promises.


//Question3:What is hoisting?
//In javascript,hoisiting means,a variable or function can be used before declaration.
//Only var supports hoisting.
//let and const doesn't supports hoisting.
//Note:Declaration part is hoisted only not initialization.

// a = 10 ;
// console.log(a);//10
// var a;

// var a;
// console.log(a);//undefined.
// a = 10;

//Question4:What is the DOM?
//DOM stands for Document Object Model.
//It is a programming interface that allows us to create, change, or remove elements from the document. 
//We can also add events to these elements to make our page more dynamic.
//The DOM views an HTML document as a tree of nodes. A node represents an HTML element.

//Question5:Difference between undefined vs not defined vs NaN?

//undefined:
//1.Whenever we declare a variable without assigning any value to it, javascript implicitly assigns its value as undefined.
let name;
console.log(name); //undefined
//2.When value is not assigned in array or object
let numArray = [1,2,,4];
console.log(numArray);  //[1, 2, empty, 4]
console.log(typeof(numArray[2]))//undefined
//3.When functions don’t have a return statement but are called for assigning a value to a variable.
let add = (a,b) => {
    let c = a+b;
    //return c;
}
let sum = add(2,3);
console.log(sum);


//Not defined:A not defined is a variable which is not declared at a given point of time with declaration keyword like var, let or const.
console.log(a);
var a = 5;

//console.log(b);//reference error as b is not defined.
b = 5;

//NaN:The NaN property represents a “Not-a-Number” value.NaN is a number that is not a legal number.

//Question6:How many operators do we have in JS ?
//Types of operators:
//1.Arithmetic Operators
//2.Comparison Operators
//3.Logical Operators
//4.Increment and decrement operators
//5.Bitwise operators
//6.conditional or ternary operators
//7.comma operators

//Question7:What are pure functions?
//This is a function which gives you same output for the same input passed everytime.
//It doesn't give differenct output for the same input everytime we call the functions.
//It doesn't depends on some variables whose value might change in the future, and therefore always gives u same values. 
//Examples a function which only uses constants in their body.

function area(r){
    let res = 3.14 * r * r;
    console.log(res);
}
area(3);
area(3);
area(3);
area(3);

//Question8:What is callback hell?
//Callbacks are just the name/conventions for using javaScript.It insted of immediately returning results like other functions,take the time to produce the results.so, if we stuck in some particular call which prevents us from making further calls ends us into callback hell.
//The structure of callback hell looks like pyramid/arrow shape.
//we should always try to avoid using multiple callbacks to end up falling into callback hell.


//Question9:What is promise chaining?
//JavaScript promise chaining pattern that chains the promises to execute asynchronous operations in sequence.

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});

p.then((result) => {
    console.log(result);//10//after 3sec
    return result * 2;
}).then((result) => {
    console.log(result);//10*2 = 20
    return result * 3;
});

//Questiom10:What are arrow functions?
//Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.

const functionTwo = (a,b) => {
    console.log('This is function2');
}
console.log(functionTwo);
functionTwo();

//Question11:Give an example of async/await?
//They are used to handle promises more efficently .The word async before a function always mean that the function always return a promise.
//so, we therefore use aysnc  before the function name to return a peomise instead of value.
//Await is used to wait for the result that it to be return from the promise.so,we await when we are calling a function which return a promise.
//Also,we can use them(async/await) for making API's calls.
//Await is always used with the keyword async.

async function example() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 2000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
    alert(result); // "done!"
}
example();
  




