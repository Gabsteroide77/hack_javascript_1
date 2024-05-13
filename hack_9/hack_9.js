/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let log = console.log;
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;
let acomodarArray = [];

for (let i = 0; i < arr.length; i++){
    if (arr[i].charAt(0) === "b") {
        result++;
        acomodarArray.push(arr[i]);
    }
}
log(acomodarArray);


/*let itemsConB = arr.filter(x => x.startsWith("b"));
result = itemsConB;
log(result);*/

//export result
module.exports = result;