//for of syntax:

// for (const element of object) {
    
// }

const arr=[1,2,3,4,5]

for (const element of arr) {//arr is an iterable object where you declare that outside the loop
    console.log(element);//prints each element of array
    
    
}


const str="Hello World"

for (const values of str) {//str is an iterable object where you declare that outside the loop
    console.log(`The Characters are:${values}`);//prints each character of string
    
}


//Maps:
// A Map is a collection of key data items, just like an Object. 
// But the main difference is that Map allows keys of any type.
// It doesnot add duplicate keys.

const myMap=new Map()
myMap.set('IN','India')
myMap.set('US','United States')
myMap.set('FR','France')
myMap.set('IN','India')//duplicate key will not be added because keys are unique in map

console.log(myMap);

for (const [key,value] of myMap) {//destructuring assignment to get key and value without using destructuring assignment we cannot get key and value both together.
    console.log(`Keys are:${key} , Values are:${value}`);//prints key and value pairs
        
}
    


const myObj={
    name:"Rohit",
    age:21,
    city:"Mangalore"
}

// for (const details of myObj) {
//     console.log(`the details are as follows:${myObj}`);
    
// } this is not possible because objects are not iterable

//we cannot use for of loop with objects directly because objects are not iterable.