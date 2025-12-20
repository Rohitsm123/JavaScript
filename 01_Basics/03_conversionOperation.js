let score="33abc"

console.log(typeof score);
console.log(typeof (score));

let stringToNumber=Number(score)
console.log(typeof stringToNumber);

console.log(stringToNumber);

//"33"=> 33
//"33abc"=>NaN
//true=>1; false=>0


let isLoggedIn=1

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1=>true; 0=>false
//""=>false
//"Rohit"=>true


let someNumber=33

let numberToString=String(someNumber)
console.log(numberToString);
console.log(typeof numberToString)

//**************************Operation*****************************

let value=3
let negativeValue=-value;
console.log(negativeValue);

console.log(2+2);
console.log(2*2);
console.log(2%2);
console.log(2**2);
console.log(2/2);
console.log(2-2);


let str1="WELCOME TO"
let str2=" JAVASCRIPT WORLD"

str3=str1+str2
console.log(str3);


console.log(2+"2");
console.log("2"+2);
console.log(2+2+"2");

console.log((3+4)*5%3);

console.log(+true);
console.log(+"");


let gameCounter=100
++gameCounter;
console.log(gameCounter);

// PREFIX

x=2
y=++x
console.log(x,y);

x=2n
y=++x
console.log(x,y);

// POSTFIX

x=2
y=x++
console.log(x,y);

x=2n
y=x++
console.log(x,y);





