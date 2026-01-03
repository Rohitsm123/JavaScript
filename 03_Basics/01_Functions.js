function MyName(){
    console.log("R");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t");   
}
MyName()//prints the function by returning it

function addTwoNumbers(number1,number2){//inside the brackets are Parameters
   console.log(number1+number2);
}
addTwoNumbers(3,4)//inside the brackets are Arguments which we give input for the function to return its value


function addTwoNumbers(number1,number2){
   const result=number1+number2
   return result
   console.log("Rohit");//it doesont execute after the return statement
   return number1+number2 //we can use direct return statement to exceute...
}
const result=addTwoNumbers(3,4)
console.log("Result:",result);


function loginUserMessage(user){
    if(!user){
console.log("user is not found");
return
    }
    else{
        console.log("User Found");
    return `${user} just logged-in`
}}
console.log(loginUserMessage("Rohit"));


function calculateCartPrice(...num1){ //rest or spread operator based on the use case now it is rest operator
    return num1
}
console.log(calculateCartPrice(200,300,400));


function calculateCartPrice1(val1,val2,...num1){//in this case val1 takes the first value and val2 takes the second value and returns the specific argument 
    return num1
}
console.log(calculateCartPrice1(200,300,400,500,600));


//passing object in function
const user={ 
    username:"Rohit",
    subject:"JavaScript"
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the subject is ${anyObject.subject}`)
}
handleObject(user)
handleObject({
    username:"Rohit",
    subject:"JavaScript"
})//another way of getting object


//passing array in function
const myArray=[10,20,30]
function returnSecondValue(getArray){
    return getArray[2]    
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([10,20,30]));//another way of getting array

