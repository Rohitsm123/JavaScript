//while loop

// Syntax:
// while (condition) {
    // code block to be executed
// }

let i=2;
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


let num=1
do {     //it executes first do block then checks the condition in while
    console.log(`The number is:${num}`);
   num=num+1
} while (num<=5);