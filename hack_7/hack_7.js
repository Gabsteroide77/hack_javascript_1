/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let log = console.log;
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (i = 0; i < arr.length; i++){
let convertirEnMayuscula = arr.map(x => x[0].toUpperCase() + x.slice(1));
result.push(convertirEnMayuscula[i]);
}
log(result);

//export result
module.exports = result;