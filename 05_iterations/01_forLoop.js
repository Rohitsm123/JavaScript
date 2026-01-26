//for loops syntax

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for (let i = 0; i <= 10; i++) {//prints the  0-10 numbers
    const element = i;
    if (element===5) { //if the loop enters to 5 then this condition will print
        console.log("5 is best number");  
    }
    console.log(element);
}


for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop value: ${i}`)//prints only outer loop values
    for (let j = 1; j <= 10; j++) {
    //  console.log(`Inner Loop value: ${j} and outer loop value: ${i}`)//prints both inner and outer loop values, A loop inside another loop must finish completely before the outer loop continues.
      console.log(i + '*' + j + '=' + i*j)//prints the table
      
    }
    
}

//Real-world analogy (simple)
// 🧺 Washing clothes

// Outer loop = each basket

// Inner loop = washing every cloth in that basket

// You finish all clothes in basket 1
// Only then you move to basket 2

// You don’t wash one cloth from each basket randomly.


const myArray=['batman','superman','flash','wonder']
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];//accessing each element of array using for loop
    console.log(element);
    
}


// keywords for For loop : break & continue

//1.break: It is used to terminate the loop entirely when a certain condition is met.
for (let i = 1; i <= 20; i++) {
    if(i===5){
        console.log("Stoped At 5 Beacuse 5 is the best");
        break              
    }
  console.log(`Value of i is:${i}`);   
    
}

//2.continue: It is used to skip the current iteration of the loop and move to the next iteration when a certain condition is met.
for (let i = 1; i <= 20; i++) {
    if(i===5){
        console.log("Stoped At 5 Beacuse 5 is the best");
        continue 
    }
  console.log(`Value of i is:${i}`);     
}