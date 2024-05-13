/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let log = console.log;
let result = [];

var i = 1;
while (i <= 7){
    result.push(i);
    i+=2;
}
log(result);

//export result
module.exports = result;