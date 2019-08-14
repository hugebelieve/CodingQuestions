// Call ---------------------------------------------
// used to pass "this" to a function
let print = function(city){ console.log(this.name + " " + city); }
//name is not a part of this
let nom = {name: "Bishal"}
//user call
print.call(nom, "Mumbai"); // "Bishal Mumbai"

//Put ---------------------------------------------
//same as call just argument passing is array
print.call(nom, ["Mumbai"]); // "Bishal Mumbai"

//Bind ---------------------------------------------
//same as call but gives a cloned function in return and then you invoke it later with your argument
let newPrint = print.bind(nom); //print is function 1
newPrint("Mumbai") // "Bishal Mumbai" //new print is function 2

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

// aync and defer while loading script ---------------------------------------------
// <script src="ex.js"></script> ==> stops html parsing for both
// download and execution of js happens in between
// <script async src="ex.js"></script> ==> stop html parsing for executing
// download async and execution of js happens in between and sometimes fails to run js code in given sequence
// <script defer src="ex.js"></script> ==> html parsing doesn't stop
// download async and execution only after all html is parsed and also run js code in give sequence

// Prototype ---------------------------------------------
[""].__proto__.__proto__  // - gives an object of many functions and properties

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
// It is used to make clones of function with saved scope/closure inside it
// We can use bind or closure
var funcToCurry = function( x, y) { return x*y; }
var multiplyByTwo = funcToCurry.bind(this, 2); //"this" can be any scope, and "2" becomes "BoundArgs"
multiplyByTwo(3) = 6; //can be done with closure as well
// So we can make different clone functions from one function which is currying

// CORS ---------------------------------------------
// Browser security for cross domain calls from browser itself
// CORS security makes preflight header calls to server of called domain to get allow header
// and then only makes the actual call for the code of website

// Debouncing ---------------------------------------------
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
