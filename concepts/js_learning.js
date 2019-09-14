// var vs let ---------------------------------------------
// var is function-scope
function varS(){
    for(var i=0; i<3;i++) console.log(i);
    
    console.log(i); //gives 2 and no error
}
// let is block-scope
function varS(){
    for(let i=0; i<3;i++) console.log(i);
    
    console.log(i); //gives error i not defined
}

// Primitive values and Reference values
// Primitive - number, string, bool, null, undefined - her directly value placed in stack and directly value referenced
// Reference - object - this actually creates a pointer in stack and then pointer ref to value

// Callback, promise and Observer and async/await ---------------------------------------------
// Callback are basic for solving async activity - pass in anonymous function
// Promise is just a better way to avoid callback inside callback -  you can chin with then
// Observer are things you can subscribe to - like IntersectionObserver in website
// async/await used promises again but gives much cleaner code for calling it
//     use try/catch with it or it will throw error for reject

// Call ---------------------------------------------
// used to pass "this" to a function
let print = function(city){ console.log(this.name + " " + city); }
//name is not a part of this
let nom = {name: "Bishal"}
//user call
print.call(nom, "Mumbai"); // "Bishal Mumbai"

//Apply ---------------------------------------------
//same as call just argument passing is array
print.apply(nom, ["Mumbai"]); // "Bishal Mumbai"

//Bind ---------------------------------------------
//same as call but gives a cloned function in return and then you invoke it later with your argument
let newPrint = print.bind(nom, "Mumbai"); //print is function 1
newPrint() // "Bishal Mumbai" //new print is function 2
// Mumbai goes to BoundArgs in "newPrint" variable

// Polyfill for bind  ---------------------------------------------
//create your own bind to a function used when bind is not available in old browser
Function.prototype.myBind = function(...args){ //function 1
    let ref = this; // print reference //keep this in variable because later in 2nd function you won't have it
    return function(...newArgs){ //function 2
        args[0].some = ref; //making this print as args[0] part so ref/print will have args[0] as parent/this
        return args[0].some(...args.splice(1), ...newArgs);
        return ref.call(args[0], ...args.splice(1), ...newArgs); //this also works
    }
}

// async and defer while loading script ---------------------------------------------
// <script src="ex.js"></script> ==> stops html parsing for both
// download and execution of js happens in between
// <script async src="ex.js"></script> ==> stop html parsing for executing (sequence can be messed up while execution)
// download async and execution of js happens in between and sometimes fails to run js code in given sequence
// <script defer src="ex.js"></script> ==> html parsing doesn't stop
// download async and execution only after all html is parsed and also run js code in give sequence

// Prototype & "new" ---------------------------------------------
// It is part of function useful for "new" Object creation
function Dog(){ this.getBreed = function(){return this.breed;} }
Dog.prototype.breed = "Bull";
let myDog = new Dog();
myDog.getBreed(); //=>Bull ==> powerful breed value coming from __proto__ since not found in myDog object 
// "new" does 5 things
// ==> Creates a new empty object
// ==> Runs the function as a constructor
// ==> Attach all "this" variables inside newly created object
// ==> Delegated all "prototype" variables to the __proto__ of newly created object
// ==> Returns the newly created object
// This is same thing happening in class Main{} syntax

// Prototypal inheritance ---------------------------------------------
// It is delegation of object, variables and functions thats it
[""].__proto__.__proto__  // - gives an object of many functions and properties
// * So __proto__ use reduce amount of new values created and save resources lost
// __proto__ - anything in proto can be changed globally
var foo = function(){
    let closureForThis = "closure_value"; //closure are fixed once called new or return
    this.getClosure = function(){ return closureForThis; }
}
foo.prototype.goingToProto = "value_seen_in__proto__";
let functionC = new foo();
// getClosure is part of functionC
// closureForThis is closure for getClosure function
// goingToProto is in __proto__ of functionC

// Event Propagation - bubbling and capturing/trickling ---------------------------------------------
document.querySelector("#child").addEventListener('click',(e)=>{e.stopPropagation()}, false); //capturing false
//Event always does both capturing and bubbling on click and then call callbacks accordingly

// Event Delegation - use event bubbling in useful way ---------------------------------------------
// keyup in parent form and use data-uppercase to auto uppercase in callback

// Closure ---------------------------------------------
var closure = function(preserver) { return function(newVal){ return newVal + preserver; } }
var newPreserveFunction = new Closure(4); // "4" becomes closure value
// here newPreserveFunction preserves "4" which is closure in function scope

// Curring ---------------------------------------------
// It is used to create function with partial argument saved in it inside with scope/closure
// We can use bind or closure
var funcToCurry = function( x, y) { return x*y; }
funcToCurry.length //=>2
var multiplyByTwo = funcToCurry.bind(this, 2); //"this" can be any scope, and "2" becomes "BoundArgs"
multiplyByTwo.length //=>1
multiplyByTwo(3) = 6; //can be done with closure as well
// So we can make different clone functions from one function which is currying

// CORS ---------------------------------------------
// Browser security for cross domain calls from browser itself
// CORS security makes preflight header calls to server of called domain to get allow header
// and then only makes the actual call for the code of website

// Debouncing ---------------------------------------------
// Fixing time between two *consecutive* action
// Optimization technique // this consider a delay between two calls and clears previous calls
// onkeyup search suggestion
var suggestionAPI = function(val1, val2) {}
var debounceFunc = function(fn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.call(this,...args);
        },300);
    }
}
var newSuggestionAPIFunction = debounceFunc(suggestionAPI, 300);

// Throttling ---------------------------------------------
// Fixing time between two action, may not be consecutive
// Optimization technique // this consider a delay between two calls and a definite call after time
// onkeyup search suggestion
var throttleFunc = function(fn, delay){
    let lastTime = (new Date()).valueOf();
    return function(...args){
        let newTime = (new Date()).valueOf();
        if(newTime - lastTime >= delay){
            lastTime = newTime;
            fn.call(this,...args);
        }
    }
}
var throttleFunc2 = function(fn, delay){
    let flag = true;
    return function(...args){
        if(flag){
            flag = false;
            setTimeout(()=>{
                flag = true;
            },delay);
        }
    }
}

// Cookies ---------------------------------------------
// Support by older browser and 4kb storage
// Stored in string form with expiry date
// Goes with every web request
// Used to understand the user
document.cookie = "key1=value2; expires=Wed, 31 Oct 2020 08:50:17 GMT; path=/index.html; domain=example.com"

// Local Storage ---------------------------------------------
// for storing any data and never expires if not set
localStorage.setItem("key","value");
localStorage.getItem("key");

// Session Storage ---------------------------------------------
// for storing any data but expires in every session of a specific tab
sessionStorage.setItem("key","value");
sessionStorage.getItem("key");

// Hoisting ---------------------------------------------
// it is feature of js which takes var and function at top of code initially
// not exactly top of code but add to top of its own function scope


// Critical Rendering Path ---------------------------------------------
// steps for browser rendering
// DOM tree(Tokenizing,Lexing) -> CSSOM tree -> Combine them -> Compute Geometry -> Painting/Rasterizing
// Critical path before first paint 
// Use media="paint" for CSS non blocking
// Use async(or better deffer) in script for non blocking
// HTML will be that way only one critical path
// Giving critical inline css saves second network round trip

// HTTP2 ---------------------------------------------
// Binary Framing - HEADER FRAME & DATA FRAME
// One TCP connection to one origin and parallel server call will still be on one TCP streaming
// Stream prioritization
// Server push - server can push addition css and js time resources on one html call saved 2 network round trip
// Header Compression

// WebPacks ---------------------------------------------
// They are just bundler for your html, css/scss and js files
// these web packs bundle them in few files with auto minified and ES5+ compatibility
// and feature like tree shaking
// This all helps in Web Performance and for developer to use new ES6+ as they use polyfills as needs

// Tree Shaking ---------------------------------------------
import { sortBy } from "lodash"; //still takes in full library as some dependency of function is present
import * as utils from "../utils";
// with tree shaking <<<<====
import sortBy from "lodash-es/sortBy";
import { simpleSort } from "../utils";
// This is helpful as bundler will only take one function from library instead of taking full library
// Tree shaking removed and falls the unwanted node/leaves/code

// Web Worker ---------------------------------------------
// Lets you to run js longer code in background
// which free UI thread

// Reduce complexity of CSS ---------------------------------------------
// use BEM (Block, Element, Modifier)
// ".card" for main block
// ".card--dark" for modifiers
// ".card__img" for child of card

// Render Optimise ---------------------------------------------
// Avoid using Layout(Re Geometry) and Paint
// Let only Composite work for update
//  Use transform which is handled by the Composite only and we can achieve 10ms per frame mark

// Unsplash.it/100/100

// stopPropagation Vs preventDefault ---------------------------------------------
// preventDefault stops browser default event like "a" tag click and its href behaviour
// stopPropagation stops Bubbling and Capturing

// Destructuring & Spread ---------------------------------------------
function InArg(a, ...args){
    // args is array
}
InArg(1,2,4,5);
// --
let {a,b,...z} = {a:1,b:2,c:3,d:4}
// a -> 1, b -> 2, z -> {c:3, d:4}
// --
function desT({ x, y, ...z }){}

// Pure functions ---------------------------------------------
// It is a function which gives you the same result
// for a given same argument
// it means there is nothing extra element to change logic inside it

// Powerful string concatenation ---------------------------------------------
"1" + true //=> "1true" -- literal double quotes on secong
"1" + ["few;","more"] //=> "1few;,more"

// Window.onload and document onload ---------------------------------------------
// Document load happens first when ll elements re placed in DOM.
// Window load happens when all resources of webpage is loaded like images and all, so it is slower
// window.onunload, we can do something there that doesn’t involve a delay, like closing related popup windows or local storage.

// With in JS ---------------------------------------------
function getPI(){
    with (Math) {
        return PI; //Auto attach Math in front
    }
}

//"use strict" ---------------------------------------------
// Stays in function scope, used for actual resource optimization
function test(){
    b= 5; //won't create a global variable automatically and will give error when call test()
}
var obj = {};
Object.defineProperty(obj,"x", {value: 2, writable: false});
obj.x = 3; //this will give error in strict and won't execute if not strict mode
function getPI(){
    with (Math) { // with not allowed in Strict
        return PI;
    }
}

// Why Functional programming ---------------------------------------------
// Higher order functions -  function can be values and you can pass then around
// So you can do compose and make small functions inside a function
// Maybe more pure/reuseable functions make it faster for development and bug free

// Higher order function ---------------------------------------------
// Function which takes in a function as argument like "Filter"
// Can happen in functional programming since function are values in that.

// Persistent vs non-persistent data
// Persistent is data available even after closing
// Non-Persistent is when data not available after closing

// Object.create(obj); ---------------------------------------------
// let newObj = Object.create(obj);
// let newFun = Object.create(oldFunc); // create newObj with oldFunc inside __proto__
// newObj becomes {} and obj get delegated to newObj as __proto__

// Object oriented in JS ---------------------------------------------
let obj = {
    get year() {  return this.year; },
    set year(newY) { this.year = newY; }
}
obj.year = 89; //==> obj.year(89) will give exception
obj.year //==> 89
// **** above will give max callback stack error
// because you are making a loop by calling the same thing inside
let obj2 = {
    get year1() {  return this.year; },
    set year2(newY) { this.year = newY; }
}
obj2.year2 = 90; //set
console.log(obj2.year2); //totally undefined ** for interview
console.log(obj2.year); //==> 90
Object.defineProperty(obj2, 'fixedVal', {
    value: 42,
    writable: false
  });
obj.fixedVal = 90;
console.log(obj.fixedVal); //==> 42

// LRU Cache ---------------------------------------------
// we want a DS with search complexity O(1) and add/remove complexity also O(1)
// This can be achieved by combining multiple D
// Here we can achieve with HashMap and Doubly-link-list

// Big O ---------------------------------------------
// How does the runtime of the function grows as the Input grows?