//while loop

// Syntax:
// while (condition) {
    // code block to be executed
// }

let i=2;//declaring a varable and assigning a value
while (i<=20) {
    console.log(i);
    i=i+2
    
}

let myArray=['apple','banana','cherry'];
let j=0;
while(j<myArray.length){
    console.log(myArray[j]);
    j++
}

//do while loop
// Syntax:

// do {
    // code block to be executed
// } while (condition);


let num=2 //declaring a variable
do {     //it executes first do block then checks the condition in while
    console.log(`The number is:${num}`);
   num=num+2
} while (num<=20);