let firtsmessage = "¡Hola Mundo!";
let myName = "Soy Bekam";
let arrayList = [1, 2, 3, 4, 5];
let text = 'La lluvia en Sevilla es una maravilla';
let myNameAlone = myName.slice(4); //bekam
let textfound = text.match(/lluvia/);

console.log(firtsmessage, myName);
// console.log(myName[0]);
console.log(myNameAlone);
console.log("Mi nombre en mayúsculas es:", myNameAlone.toUpperCase());
console.log("Mi nombre en minúsculas es:", myNameAlone.toLowerCase());
console.log("El mensaje de '¡Hola Mundo!' tiene", firtsmessage.length ,"caracteres");
console.log("El tercer número del array con los valores '1,2,3,4,5' es:", arrayList[2]);
console.log("Se añade el número que sigue en orden al final del arreglo y es:", arrayList.push(6));
console.log("Se encontro el patron 'lluvia' en el texto 'La lluvia en Sevilla es una maravilla', por lo que el resultado es:", textfound[0]);


