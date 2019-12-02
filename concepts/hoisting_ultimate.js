console.log(x); // f() {} //hoisted with assignment since "x" is function
var x = 90;
function x() {}

console.log(a); // undefined // hoisting of child block-scope variable is never assigned not even if "a" is function
{
    console.log(a); // f(){}
    a = 50; //**while execution //since global scope "a" not assigned yet it takes the first assignment in this child-block
    console.log(a); // 50 // because value has been assigned to "a" already
    function a(){} // Ignored //function "a" was never hoisted over variable assignment
    console.log(a); // 50 // block scope has "a=50" attached to it
}
console.log(a); // 50 // global scope also has "a=50" attached to it


console.log(b) // undefined // hosting of child block-scope variable is never assigned not even if "a" is function
{
  console.log(b) // f () {}
  function b() {} // While hosting global scope and this block scope get "b" attached to their scope as a function
  b = 50 // var b is reassigned, but "b" attached to this block is only reassigned, since type is changed globally attached "b" is not reached
  console.log(b) // 50
}
console.log(b) // ƒ () {} // globally attached "b" is a function