//for In syntax:

// for (const key in object) {
    
// }


const myObj={
    js:"JavaScript",
    py:"Python",
    cpp:"C++",
    java:"Java"
}

for (const key in myObj) {//for in loop to iterate over object properties
    console.log(key);
  console.log(`${key} Shortcut for: ${myObj[key]}`);//accessing values using keys

}


function myName(){//for in loop to iterate over functions
    console.log("Rohit")
}
myName()

for(const name in myName()){
    console.log(name)
}


const proLanguages=['JavaScript','Python','C++','Java','Ruby']

for (const key in proLanguages) {//for in loop to iterate over array indices
 
    console.log(`${proLanguages[key]} is in ${key} index`);//accessing values using index
   
}

const arr=['a','b','c','d','e']

for(const index in arr){//for in loop to iterate over array indices
    console.log(index,arr[index]);//prints index and corresponding value
    
}

//***********************Interesting********************

const myMap=new Map()
myMap.set('IN','India')
myMap.set('US','United States')
myMap.set('FR','France')
myMap.set('IN','India')

for (const key in myMap) {//for in loop doesnot work with maps because maps are not enumerable
    console.log(key);
    
}