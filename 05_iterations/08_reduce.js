//using reduce method to accumulate values in an array

const myNumber=[1,2,3,4,5]//inside the array is the currentValue

const totalNum=myNumber.reduce( function (accumulator,currentValue){
    console.log(`Accumulator:${accumulator} and Current Value:${currentValue}`);
return accumulator + currentValue
} ,0 )// 0 is the initial value of accumulator
console.log(totalNum);


//another way of writing reduce method

const TotalNum1=myNumber.reduce( (acc,curval)=> acc+curval,0 )//using arrow function
console.log(TotalNum1);


const shoppingCart=[
    {
        itemName:"javaScript",
        price:999
    },
    {
        itemName:"python",
        price:2999
    },
    {
        itemName:"java",
        price:3999
    },
    {
        itemName:"dataScience",
        price:12999
    },
]

const totalAmount=shoppingCart.reduce(  (acc,item)=>acc+item.price,0 )//this is the one way of calculating total amount in the cart by ussing arrow function.
console.log(`${totalAmount} total Amount to pay`);

let totalCartValue=shoppingCart.reduce(function(acc,value){//this is the another by using explicit return type 
    return acc + value.price
},0)
console.log(`The Total Cart Value is:${totalCartValue}`)