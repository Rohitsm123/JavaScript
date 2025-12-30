//Dates

let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

console.log(typeof myDate);//date is an object

let myCreatedDate=new Date(2025,0,12);
console.log(myCreatedDate.toDateString());//months are started from 0 index

let myCreatedDate2=new Date(2025,2,12,7,30)
console.log(myCreatedDate2.toLocaleString());//prints date and time in local format

let myCreatedDate3=new Date("2025-01-14");//while creating date using string or YYYY-MM-DD format,months are started from 1
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4=new Date("01-14-2025")
console.log(myCreatedDate4.toLocaleString())

let myTimeStamp= Date.now()
console.log(myTimeStamp);//prints number of miliseconds passed since 1st Jan 1970

console.log(myCreatedDate4.getTime());//prints number of miliseconds passed since 1st Jan 1970 for the given date

console.log(Date.now());
console.log(Date.now()/1000);//prints seconds passed since 1st Jan 1970

console.log(Math.floor(Date.now()/1000));//prints seconds passed since 1st Jan 1970 without decimal values

let newDate=new Date();
console.log(newDate.getMonth());//prints current month in number format(0-11)
console.log(newDate.getDay());//prints current day of week in number format(0-6)
console.log(newDate.getDate());//prints current date in number format(1-31)

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    month:"short",
    year:"numeric",
    day:"numeric"
})) //custom format of date using toLoacaleString method using object method



