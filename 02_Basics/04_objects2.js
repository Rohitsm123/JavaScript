const tinderUser=new Object()//singleton object
console.log(tinderUser);

const tinderUser2={}
tinderUser2.id="Rohit123"
tinderUser2.name="Rohit"
tinderUser2.isLoggedIn=false
console.log(tinderUser2);//non-singleton object

const regularUser={
    email:"rohit@gmail.com",
    fullName:{  //there is an object and inside there is an another object
        userFullName:{
            firstName:"Rohit",
            lastName:"Murdeshwar"
        }
    }
    }
 console.log(regularUser.fullName.userFullName.firstName);//accessing values from the multiple objects

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}
const obj3={obj1,obj2,obj4}//combining objects
console.log(obj3);

const obj=Object.assign({},obj1,obj2,obj4)//combining objects using assign property
console.log(obj);

const obje={...obj1,...obj2,...obj4};//combining objects using spread operator
console.log(obje);


const users=[
    {
        id:"123",
        email:"R@gmail.com"
        },
         {
        id:"123",
        email:"R@gmail.com"
        },
 {
        id:"123",
        email:"R@gmail.com"
        }

]

users[1]
console.log(users);//returns the first key values from the array of objects

console.log(tinderUser2);  
console.log(Object.keys(tinderUser2));//accesing keys from the tinderUser2
console.log(Object.values(tinderUser2));//accesing values from the tinderUser2
console.log(Object.entries(tinderUser2));//returns keys and values as a pair of arrays in a single array
console.log(tinderUser2.hasOwnProperty("id"));//checks whether the id or element is present in the tinderUser2 by returning the boolean values
   
const course={
    courseName:"JavaScript",
    coursePrice:"999",
    courseInstructor:"Rohit"
}

console.log(course.courseInstructor);//simple way of accessing the values

const {courseInstructor:instructor}=course //we can change the values by using destructure method
console.log(instructor);

// {
//     "name":"Rohit",
//    "courseName":"JavaScript",
//     "price":"free"
// }//JSON(JavaScript Object Notation) API 

[
    {},
    {},
    {}
]//JSON API