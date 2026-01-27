//for Each syntax:

// array.forEach( function(currentValue, index, array) {
    
// } );


const coding=["JavaScript","Python","C++","Java","Ruby"]

coding.forEach( function (item){ //here items are inside the array
    console.log(item);
    
} )


coding.forEach((item)=>{  //arrow function in forEach loop
    console.log(item);
    
})


function printMe(item){//callback function
    console.log(item);
    
}
coding.forEach(printMe)//passing function as callback function


coding.forEach( (item,index,array) =>{//arrow function as callback function
    console.log(item,index,array);//prints item,index and whole array
    
} )


const myCoding=[
    {
        name:"JavaScript",
        fileName:"js"
    },
    {
        name:"Java",
        fileName:"java"
    },
    {
        name:"Python",
        fileName:"py"
    },
]//array of objects


myCoding.forEach(function(item){//we can access each object of array using forEach loop
    console.log(item);
    
})


myCoding.forEach(function(item){//we can access each object of array using forEach loop
    console.log(item.name);
    
})

