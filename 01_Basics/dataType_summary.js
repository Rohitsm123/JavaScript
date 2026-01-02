// primitive dataTypes

//7 Types: String, Number, Boolean, Null,Undefined, Symbol,BigInt

const score =100;//number
const scoreValue =100.3;//number
const isLoggedIn =false;//boolean
const outsideTemp=null;//object
let userEmail;//undefined

const id=Symbol("123");
const anotherId=Symbol("123");
console.log(id===anotherId);//Symbol are unique

const bigNumber=234746239943265213n; 
console.log(typeof bigNumber);//bigInt grater than 2 to the power 53 or write last n as a bigInt.


//Reference Type or non-Primitive dataTypes

//array, objects, functions

const heros=["shaktiman","nagraj","doga"];//declaring or defining an array
console.log(heros);


const myObj={
    name:"Rohit",
    age:21,
}
console.log(myObj);//declaring or defining an object


const myFunction=function(){//creating or declaring a functions
    console.log("Hello World");
 }
 myFunction();//returning an function



 //2 types of memory 
 // 1) heap 
 // 2) stack

 //stack(Primitive)
 //heap(Non-Primitive/Reference)
 