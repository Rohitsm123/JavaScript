// {}//this is a scope normally it is used in the functions and if else satements

let a=300//outside the curly braces it is a global scope

if(true){
let a=10
const b=20
console.log("Inner is",a);

}//inside the curly braces it is block scope

console.log(a);
// console.log(b);
// console.log(c);
