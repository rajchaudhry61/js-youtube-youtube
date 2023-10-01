const accountId=222
let accountEmail="raj@gmail.com"
let accountPassword=1111
accountCity="Ghazipur"

//accountId=2    not allowed //

console.log(accountId,accountEmail,accountPassword,accountCity);

accountEmail="rasaj@gmal.com"
accountPassword=21
accountCity = "Kasimabad"


/*do not use var (use always let)
because of issue in block scope and functional scope */

console.table([accountId,accountEmail,accountPassword,accountCity])