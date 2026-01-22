const userEmail="Rohit@gmail.com"

if(userEmail){
    console.log("Got the User Email");
}
else{
    console.log("Don't have user Email");
}




const userEmail1= "" //if there is a space then it consider true.

if(userEmail1){
    console.log("Got the User Email");
}
else{
    console.log("Don't have user Email");
    
}


const userEmail2= []

if(userEmail2){
    console.log("Got the User Email");
}
else{
    console.log("Don't have user Email");
    
}


//falsy values in JavaScript

//1. false
//2. 0
//3. "" (empty string)
//4. null
//5. undefined
//6. NaN
//7. BigInt(0n)
//8. -0


//truthy values in JavaScript

//1. true
//2. "0" (non-empty string)
//3. "false" (non-empty string)
//4. " " (string with spaces)
//5. [] (empty array)
//6. {} (empty object)
//7. function(){} (empty function)
//8. Any non-zero number (e.g., 42, -3.14)
//9. BigInt other than 0n (e.g., 1n, -1n)


if(userEmail2.length===0){//empty array
 console.log("Array is empty");
 
}

const emptyObj={}//empty object

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}


//Nullish Coalescing Operator (??):null or undefined

let val1;
// val1=10??20  //it returns 10 because 10 is neither null nor undefined
// val1=null??20  //it returns 20 because the first operand is null
// val1=undefined??20 //it returns 20 because the first operand is undefined
// val1=false??20 //it returns false because false is neither null nor undefined
// val1=null??undefined??0??''??'Hello World' //it returns 0 because all previous operands are either null or undefined
// val1= null ?? 'Default Value' //it returns 'Default Value' because the first operand is null
val1= undefined ?? 10??20 //it returns 10 because the first operand is undefined

console.log(val1)


//Ternary Operator Syntax

// condition ? expressionIfTrue : expressionIfFalse 

//example

const age=18;
age <=18 ? console.log("Minor Student") :console.log("Adult Student");

const price=999;
price <=99 ?console.log("Price is High"): console.log("Price is low");