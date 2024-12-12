// singleton
// Object.create


// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Gungun",
    "full name" : "Gungun saikia",
    [mySym]: "myKey1",
    age: 18,
    location: "jaipur",
    email: "Gungun@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Gungun@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Gungun@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user ");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

