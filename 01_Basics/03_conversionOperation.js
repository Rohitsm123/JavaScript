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
