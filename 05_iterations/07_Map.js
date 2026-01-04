const numbers=[1,2,3,4,5,6,7,8,9,10];

const myNums1=numbers.map( function(num){// here we are using regular function so we need to use return keyword
    return num+10  } )
console.log(myNums1);

const myNums=numbers.map( (num)=>num+10  )// here we are using implicit return type of arrow function so we dont need to use return keyword and scope braces
console.log(myNums);

const myNums2=numbers.map( (num)=>{//here we are using explicit return type of arrow function so we need to use return keyword and scope braces
    return num+10
} )
console.log(myNums2);


const myNumber=numbers.map(  (num)=>num * 10  ).map( (num)=>num+1 ).filter( (num)=>num>=40 )//chaining multiple array methods
//  means first we are multiplying each number by 10 then adding 1 to each result and finally filtering the results which are greater than or equal to 40
console.log(myNumber);


const numValue=[]//empty array to store the values
numbers.forEach( (num)=>{//using forEach loop to achieve the same functionality as map method
   numValue.push(num+10)//pushing the values to the empty array

} )
console.log(numValue);
