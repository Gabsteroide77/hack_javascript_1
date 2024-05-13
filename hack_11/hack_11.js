/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let log = console.log;
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

var cambioA = /a/gi;
var cambioE = /e/gi;
var cambioO = /o/gi;
var cambioB = /b/gi;
var cambioX = /x/gi;
    
for (let i = 0; i < stringArray.length; i++){
    stringArray[i] = stringArray[i].replace(cambioO,0).replace(cambioE,3);
    stringArray[2] = stringArray[2].replace(cambioA,"@");
    stringArray[1] = stringArray[1].replace(cambioB,"B");
    stringArray[3] = stringArray[3].replace(cambioX,"X");
}
    
    
numberArray[0] = "one";
numberArray[2] = "three";
numberArray[4] = "five";
    
    
result = numberArray.concat(stringArray);
result.push("h@ck");
result.unshift("h@ck");
result.splice(6,0,"h@ck");
    
log(result);

//export result
module.exports = result;