//using reduce method to accumulate values in an array

const myNumber=[1,2,3,4,5]//inside the array is the currentValue

const totalNum=myNumber.reduce( function (accumulator,currentValue){
    console.log(`Accumulator:${accumulator} and Current Value:${currentValue}`);
return accumulator + currentValue
} ,0 )// 0 is the initial value of accumulator
console.log(totalNum);


//another way of writing reduce method
const totalNum1=myNumber.reduce( (acc,curval)=> acc+curval,0 )//using arrow function
console.log(totalNum1);


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

const TotalAmount=shoppingCart.reduce(  (acc,item)=>acc+item.price,0 )
console.log(`${TotalAmount} total Amount to pay`);
