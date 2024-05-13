/**
 * mediante el loop for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let log = console.log;
let result = [];

for (i = 1; i <= 5; i++){
    result.push(i);
}
log(result);

//export result
module.exports = result;