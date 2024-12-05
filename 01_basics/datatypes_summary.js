//  primitive

//  7 types : string, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);


// const bigNumber = 3454667454774647456n


// Reference (Non primitive)

// Array,  Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name: "gungun",
    age: 22,
}

 const myFunction = function(){
 console.log("Hello world");
 }

 console.log(typeof id);
 

 //+++++++++++++++++++++++++++++++++++++++++++++++

 // stack(Primitive), Heap (Non-Primitive)

 let myYoutubename = "hiteshchoudharydotcom"

 let anothername = myYoutubename
 anothername = "chaiaurcode"

 console.log(myYoutubename);
 console.log(anothername);

 let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
 }

 let userTwo = userOne
 
 userTwo.email = "hitesh@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);
 


 