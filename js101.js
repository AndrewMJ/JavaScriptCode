//printing stuff
console.log("Hello World");
//only in web browsers
//alert("Hello World");


//Variables
// SAME as in every other language. A var is a place to stash something
// (a number, string, etc)

// Data-types available:
// 1. string
// 2. number
// 2a. float, double
// 2b. int
// 3. Boolean - true, false
// 4. Array
// 5. Object
// 6. Symbol

// JavaScript uses camelCase
let name = "Drew Jackson";
name = "Drew Jackson";
name = "Drew \"A CRAZY GUY\" Jackson";
let age;
// var age
// const
let firstName = "Wiz";
let lastName = "Khalifa";
let fullName = firstName + " " + lastName;
console.log(fullName);
const awesomeGuy = `${firstName} ${lastName}`;


//Numbers
//No float, no double, just number
const theYear = 2018;
const shortPi = 3.14;
console.log(typeof(shortPi));

//Math is just like everyone else
const twoYearAgo = theYear - 2;
console.log(twoYearAgo);

//If you cast a string with a string with a different data type, string will always win
const theTruth = true;
const theLie = false;
console.log(typeof(theTruth));

//Incramenting
let num = 1;
num++;
console.log(num);
num--;
console.log(num);

//Conditionals
const classSize = 32;
if(classSize > 20){
	console.log("Wow that;s a big class")
}
if(classSize >= 32){
	console.log("At capacity ")
}

// == will compare the value WITHOUT respect to datatype
// === will compare value and datatype

//ARRAYS
let sudents = [];
students = [`Andrew`,`Bob`, `Tim`];
students.push(`Donell`);
console.log(students);

//.pop() will remove the element in array
// .shift() will remove and return the first element in the array.
// .slice() take two arguments: 1. index to start at. 2. index to stop at (does not mutate array)

// All arrays have a map method. MAp will loop through the array and return. Each time through a new element for the new array
 
// Splice is a prototype ofe all arrays... if you are an array.. you have
//Splice allows you to ass and remove from any index
// Splice take 3 arguments: 1. Where to start. 2. How many to delete 3.What to insert, if anything