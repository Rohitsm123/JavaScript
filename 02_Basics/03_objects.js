//singleton object 
//object.create()


//object literals

const mysym=Symbol("key1")//defining a symbol

const person={
    name:"Rohit",
    [mysym]:"mykey1",//syntax for symbol
    age:21,
    location:"karnataka",
    email:"rohitsm@gamil.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]

}
console.log(person);

console.log(person.name);//accessing using dot notation
console.log(person["name"]);//accessing using bracket notation
console.log(person["lastLoginDays"]);
console.log(person[mysym]);

person.email="rohitsm125@gmail.com" //to change the email
Object.freeze(person)//doesnot modify it freezes the contents and stops modifying the contents
person.email="rohitsm33@gmail.com"
console.log(person);

person.greeting=function(){
    console.log("hello Rohit");
    
}
console.log(person);
console.log(person.greeting());

person.greetingtwo=function(){
    console.log(`hello JS user this is ${this.name}`);//to use same object as a reference key we use a this keyword
}
console.log(person.greetingtwo());
console.log(person);










