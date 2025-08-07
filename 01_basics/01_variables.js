const accountId = 14553
let accountEmail = "Sam@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" // A possibility but not recommended

let accountState;
console.log(accountState)
/*
Prefer not to use var
Because of Issue in block scope and functional scope
*/

// accountId = 2
accountEmail = "Sai@gmail.com"
accountPassword = "abcd"
accountCity = "Pune"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);


console.table([accountId, accountEmail, accountPassword, accountCity])

let water = 3
console.log(water)
console.log("Water is " + 3*water)

