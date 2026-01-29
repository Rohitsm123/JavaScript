const coding=["JavaScript","Python","C++","Java","Ruby"]

const values=coding.forEach((item)=>{
    console.log(item);
    return item
    
} )
// console.log(values);


// filter method: if we are ussing filter method we need to use scope braces and the return keyword, if we didnot use anyone of this it will return undefined.

const myNums=[1,2,3,4,5,6,7,8,9,10]

let newNums2=myNums.filter( (num)=> num>4 )// here we are using implicit return type of arrow function so we dont need to use return keyword and scope braces
console.log(newNums2);


let newNums=myNums.filter((num)=>{
   num > 4
} )
console.log(newNums);//it will print undefined because filter method expects a return value to filter the array
//  but here we are not returning anything so it will return undefined


let newNums1=myNums.filter((num)=>{// if we are using filter method and we are using scope braces then we need to use return keyword to return the value
    return num > 4// we are returning the value which is greater than 4
} )
console.log(newNums1);//it will print [5,6,7,8,9,10] because we are returning the value which is greater than 4


//using forEach to achieve the same functionality as filter method.
const mynewNums=[]//empty aray to store the values greater than 4
myNums.forEach( (nums) =>{
    if(nums > 4){
      mynewNums.push(nums)//pushing the values greater than 4 to the empty array
    }
})
console.log(mynewNums);//it will print [5,6,7,8,9,10] because we are pushing the values which are greater than 4 to the empty array


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let myBooks=books.filter((book)=>book.genre==="History")// implicit return

myBooks=books.filter( (book)=>{// explicit return
  return book.publish>=1995 && book.genre==="History"
}  )
console.log(myBooks);