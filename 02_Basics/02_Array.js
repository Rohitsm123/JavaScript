const marvel_heros=["iron man","thor","hulk","captain america"];
const dc_heros=["superman","flash","batman"];
const cartoon_heros=["chotaBheem","mightyRaju"];

marvel_heros.push(dc_heros);// add dc_heros array as a single element
console.log(marvel_heros);
console.log(marvel_heros.length);//5

const all_heros=marvel_heros.concat(dc_heros,cartoon_heros);//merge two arrays
console.log(all_heros);

//spread operator
const all_heros2=[...marvel_heros,...dc_heros,...cartoon_heros];
console.log(all_heros2);

const another_array=[1,2,3,[4,5,6],7,8,[9,10,[11,12]]]
const new_array=another_array.flat(Infinity);//flattening the array into single level
console.log(new_array);

console.log(Array.isArray("Rohit"));//its not an array
console.log(Array.from("Rohit"));//converts string into an array of characters

console.log(Array.from({name:"Rohit"}));//converts object into an array but object has no iterable properties so it returns empty array

let score1=100
let score2=200
let score3=300

const scores=Array(score1,score2,score3);//creates an array from the given values
console.log(scores);



