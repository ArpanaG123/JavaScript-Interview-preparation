//Question1:What is a Temporal Dead Zone?
//It is the area of block where a variable is inaccessible until the computer initializes it with a value.
//TDZ occurs when we declare a variable a let and const keyword.

function add(){
    console.log(a);//undefined
    //console.log(b);//Reference error.
    var a = 10;
    let b = 20;

}
add();

// console.log(a);//This comes under TDZ.
// var a = 12;

//Question2:What is the for-in loop in JavaScript? Give its syntax?
//The for loop repeats a block of code as long as a certain condition is met. 
//It is typically used to execute a block of code for certain number of times. 

//syntax:
//for (statement 1; statement 2; statement 3) {
    // code block to be executed
//}


//Question3:Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript?
//local scope or functional scope:
//Variables declared inside a function is inside the local scope.
//They can only be accessed from within that function, that means they can’t be accessed from the outside code.
//e.g
function greet() {
    var greeting = 'Hello World!';
    console.log(greeting);//hello world
  }
greet();

//console.log(greeting);// Uncaught ReferenceError: greeting is not defined

//Block scope:Variables like let and const,can’t be accessed from outside that pair of curly braces.
//e.g
{
    let greeting = 'Hello World!';
    var lang = 'English';
    console.log(greeting); // Prints 'Hello World!'
  }

console.log(lang);  // Prints 'English
//console.log(greeting);// Uncaught ReferenceError: greeting is not defined

//scope chain:When a variable is used in JavaScript, the JavaScript engine will try to find the variable’s value in the current scope.
//If it could not find the variable, it will look into the outer scope and will continue to do so until it finds the variable or reaches global scope.
//e.g
let foo = 'foo';
function bar() {
  let baz = 'baz';
  console.log(baz);// Prints 'baz'
  console.log(foo);//Prints 'foo',as it is going into global scope.
}
bar();

//Question4:What is difference between null and undefined and where to use what?
//null:In JavaScript,null is an object.
//null in JavaScript is an assignment value. You can assign it to a variable.

//undefined:In JavaScript, undefined is a type.
//It means a variable declared, but no value has been assigned a value.


//Question5:what is Symbol?
//Symbol is a primitive data type of JavaScript, along with string, number, boolean, null and undefined.
//It was introduced in ECMAScript 2015, so just a few years ago.
//Once you create a symbol, its value is kept private and for internal use.
//syntax:
const mySymbol = Symbol()

//Question6:Write code to explain map and filter in arrays.
//map()
//map() are array method in JavaScript.
//The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
//e.g
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled);//2,4,6,8

//filter():It is the array method in JavaScript.
//The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array.
//If the condition returns false, the element does not get pushed to the output array.
//e.g
const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
  
  const studentGrades = students.filter(student => student.grade >= 90);
  //return studentGrades;//[ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]

//Question7:Explain passed by value and passed by reference?
//Pass By Value: In Pass by value, function is called by directly passing the value of the variable as an argument. So any changes made inside the function does not affect the original value.
//In Pass by value, parameters passed as an arguments create its own copy. So any changes made inside the function is made to the copied value not to the original value .

//Pass by Reference: In Pass by Reference, Function is called by directly passing the reference/address of the variable as an argument. So changing the value inside the function also change the original value.
//In JavaScript array and Object follows pass by reference property.
//In Pass by reference, parameters passed as an arguments does not create its own copy, it refers to the original value so changes made inside function affect the original value.


//Question8:Please explain Self Invoking Function and its code.
//A self-invoking (also called self-executing) function is a nameless (anonymous) function that is invoked immediately after its definition.
//code:
(function(x){
	console.log(x);//hello world
})("Hello, World!");






  