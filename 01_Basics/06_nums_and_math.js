const score=400
console.log(score);//prints the score i.e 400


const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);//tells the length of an Number

console.log(balance.toFixed(2));//decimal points

const otherNumber=123.8966
console.log(otherNumber.toPrecision(3));//total digits

const anotherNum=1000000
console.log(anotherNum.toLocaleString('en-In'));//loacale formatting

// ++++++++++++++++ maths ++++++++++++++++++++++++++++++++

console.log(Math); //math is an inbuilt object

console.log(Math.abs(-4));//absolute value 

console.log(Math.round(4.3));//rounding off
console.log(Math.round(4.6));

console.log(Math.ceil(4.2));//ceil means round off to next integer
console.log(Math.ceil(4.7));

console.log(Math.floor(4.3));//floor means round off to previous integer
console.log(Math.floor(4.9));

console.log(Math.sqrt(25));//sqare root

console.log(Math.min(4,5,6));//minimum value
console.log(Math.max(4,5,6));//maximum value

console.log(Math.random());
console.log(Math.random()*6);//random number between 0 to 6
console.log(Math.random()*6+1);//random number between 1 to 6

console.log(Math.floor(Math.random()*6+1));//random integer between 1 to 6 without decimal points ussing floor method

const min=1
const max=6

console.log(Math.floor(Math.random()*(max-min+1)+min));//random integr between min to max