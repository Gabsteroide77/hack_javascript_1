/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let log = console.log;
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

arr.shift();
arr.pop();

i = 0;
while (i < 2){
    let buscaLetra = arr.map(function(elemento){
        return elemento.replace(/a/g, "@");
    })
    result.push(buscaLetra[i]);
    i++;
}

for (i = 2; i == 2; i++){
    let convertirEnMayuscula = arr.map(x => x.toUpperCase());
    result.push(convertirEnMayuscula[i]);
}
log(result);

//export result
module.exports = result;