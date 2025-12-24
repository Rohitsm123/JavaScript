const user={
    username:"Rohit",
    price:999,
    
    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);//this is used to access the properties of the object within the current context
        console.log(this);//it will print the whole object
        
    }
}
// console.log(user);
console.log(user.welcomeMessage());//it will print the welcome message with username Rohit

user.username="Shet"
console.log(user.welcomeMessage());//it will change the username from Rohit to Shet


function chai(){
    let username="Rohit"
    console.log(this.username);//here it will print undefined because function is not inside any object so this will point to the global object window and window object does not have any property called username
    
}
chai()

const chai1=function(){ //this is the another way of creating a function
    let username="Rohit"
console.log(this.username);//here it will print undefined because function is not inside any object so this will point to the global object window and window object does not have any property called username
}
chai1()

const chai2 = () => {//this is the arrow function
    let username="Rohit"
    console.log(this.username);//here it will print undefined because arrow function does not have its own this so it will point to the global object window and window object does not have any property called username
}
chai()


const addTwo = (num1, num2) => {//this is basic arrow function syntax
    return num1+num2    

}
console.log(addTwo(5,10))


const addTwo1=(num1,num2)=>(num1+num2) //this is the another type of arrow function syntax this is the implicit return type of arrow function,
// in which we dont need to write return keyword and curly braces and when there is a curly braces we need to write return keyword and when there is a parenthesis we dont need to write return keyword 
console.log(addTwo1(20,30))


const addTwo2=()=>({username:"Rohit",price:999,email:"rohit@gmail.com"})//this is the another type of arrow function syntax to return an object we need to wrap the object with parenthesis otherwise it will give error
console.log(addTwo2())
