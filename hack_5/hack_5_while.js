/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let log = console.log;
let result = [];

var i = 7;
while (i >= 1){
    result.push(i);
    i-=2;
}
log(result);
//export result
module.exports = result;