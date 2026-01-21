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


// ++++++++++++nested scope++++++++++++++

function one(){
    const username="Rohit"

    function two(){
        const website="YouTube"
        console.log(username);
    }
    // console.log(website);//this will not execute because it is not defined and it is outside the scope
    
    two()
}
one()


if(true){
    const username="Rohit"
if(username==="Rohit"){
    const website="Youtube"
    console.log(username+website);
    
}
// console.log(website);//this will not execute due to it is outside the scope

}
// console.log(username);//this will not execute due to it is outside the scope


//++++++++++++++++Interesting Topic++++++++++++++

console.log(addOne(5))//this will execute
function addOne(num){ //this is the type of function is created
    return num + 1
    
}

// console.log(addTwo(5));//this cannot access addTwo before initialization due to the holding (hoisting) it on a variable
const addTwo=function(num){//this is another type of creating a function
    return num + 2
}
console.log(addTwo(5));//it will execute