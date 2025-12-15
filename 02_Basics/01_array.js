//array

const myarr=[0,1,2,3,4,5];
console.log(myarr);
console.log(myarr[1]);//accessing array element at index 1
console.log(typeof myarr);//array is object in js

const myarr2=new Array(0,1,2,3,4,5)//another way to create an array
console.log(myarr2);

//array methods

myarr.push(6);//add 6 at the end of the array using push method
myarr.push(7);//add 7 at the end of the array using push method
console.log(myarr);

myarr.pop();
console.log(myarr);//remove last element from the array using pop method

myarr.unshift(9)//add 9 at the beginning of the array using unshift method
console.log(myarr);

myarr.shift();//remove first element from the array using shift method
console.log(myarr);

console.log(myarr.includes(3));//checks if 3 is present in the array in boolean form
console.log(myarr.indexOf(4));//gives index 4 in the array

const newArray=myarr.join();//converts array into string
console.log(newArray);
console.log(typeof newArray);


//slice and splice

console.log("A",myarr);
const myn1=myarr.slice(1,3);//retturns a new array from index 1 to index 3 but does not modify the original array
console.log(myn1);
console.log(myarr);


console.log("B",myarr);
const myn2=myarr.splice(1,3);//removes elements from index 1 to index 3 and modifies the original array
console.log(myn2);
console.log(myarr);








