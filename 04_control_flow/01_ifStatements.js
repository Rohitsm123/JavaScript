//if statement Syntax

// if (condition) {
    
// }


// if (true){
    //if true then this block will be executed
// }


// if (false){
    // if false then this block will not be executed
// }

//<,>,<=,>=,==,!=,===,!==


const temperature=35;
if(temperature<=50){
    console.log("less than 50");
    
}
else{
    console.log("Temperature is greater than50");
}


const score=200
if(score>100)
{
    const power="fly"
    console.log(`User has power ${power}`);
}


const balance=1000

if(balance>500)console.log(" balance"),console.log(" balance2");//unreadable code better to use blocks


//nested if else

const balance1=1000

if(balance1<500){
    console.log("Balance is less than 500");
}
else if(balance1<700){
    console.log("Balance is less than 700");
}
else if(balance1<900){
    console.log("Balance is less than 900");
}
else {
    console.log("Balance is greater than or equal to 900");
}


const userLoggedIn=true;
const debitCard=true;

if(userLoggedIn && debitCard){//logical and operator here it checks both conditions and if both are true then only block will be executed
    console.log("allow to purchase");
    
}


const loggenInFromGoogle=false;
const loggenInFromEmail=true;

if(loggenInFromGoogle || loggenInFromEmail){//logical or operator here it checks both conditions and if any one is true then block will be executed
    console.log("User Loggen-In");
    
}

