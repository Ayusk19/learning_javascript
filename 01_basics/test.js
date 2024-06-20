const accountId = 144553
let accountEmail = "ayush@gmail.com"
var accountPassword = "12345"
accountcity = "jaipur"
let accountState;
// accountId = 2

accountEmail = "hc@hc.com"
accountPassword = "23292323"
accountcity = "Bengaluru"



/*
prefer not to use var 
beacuse of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountcity, accountState])