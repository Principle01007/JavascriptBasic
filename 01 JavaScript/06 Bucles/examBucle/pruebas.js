
let listNumeros = [ 1, 2, 3, 4, 5];

for (let suma of listNumeros){
    console.log(suma * 2);
}

let valor = 2;
let array = [];

for(let i = 0; i <= 8 ; i += 2){
    array.push(valor + i);
}
console.log(array);

let numero =  2;

while (numero <= 10){
    console.log(numero); // imprime 2, 4 , 6,  8, 10 muere
    numero += 2; // enpieza con 4, 6, 8, 10, 12
}
