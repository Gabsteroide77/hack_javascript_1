/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let log = console.log;
let result = [7,5,3,1];

let nuevoArray = result.map((x) => x)
log(nuevoArray);


//export result
module.exports = result;