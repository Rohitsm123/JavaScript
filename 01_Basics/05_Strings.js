const name="Rohit"
const course="JavaScript"

console.log(name+course);//Dont use this syntax 

console.log(`Hello this is ${name} and i am learning ${course}`);//use this syntax for more readablability

const gameName=new String("GTA-V-Rohit");//Declaring a String Ussing Object Syntax

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('T'));


const newString=gameName.substring(0,5);
console.log(newString);//we cannot use negative indexing in substring

const anotherString=gameName.slice(-9,5);
console.log(anotherString);//can use negative indexing in slice

const stringName="   Rohit   "
console.log(stringName);
console.log(stringName.trim());//removes spaces from starting and ending

const url="https://www.RohitPortfolio.com//Rohit%20sm"
console.log(url);
console.log(url.replace('%20','-'));
console.log(url.replaceAll("//","-"));


console.log(url.includes("Rohit"));
console.log(url.includes("rohit"));

console.log(gameName.split("-"));//splits the string into array based on given separator
console.log(gameName.split("-",2));

console.log(gameName.at(1));//gives character at given index

console.log(gameName.charCodeAt(3,7))//gives the unicode value of character at given index

console.log(gameName.codePointAt(0,4));

console.log(gameName.concat());

console.log(gameName.toLocaleUpperCase());

console.log(gameName.isWellFormed());












