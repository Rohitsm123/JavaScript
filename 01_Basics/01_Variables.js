const accountId=144553
let accountEmail="rohitsmurdeshwar245@gmail.com"
var accountPassword="12345" //not to use var keyword
accountCity="Jaipur"
let accountState;


// accountId=2 //not allowed

accountEmail="hc@hc.com"
accountPassword="212121"
accountCity="Bangalore"

console.log(accountId);

/*
Prefer not use var
Because of issue in bloack scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])