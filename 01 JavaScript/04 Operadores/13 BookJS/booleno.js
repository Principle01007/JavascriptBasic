var igual = 5 ==5;
console.log(igual);
//  Un booleano olo puede tener dos valores TRUE o FALSE 
let puedesIngresar = false;

let x;
console.log(x); // esto nos imprime un valor indifinido
let sumar;
console.log(sumar);

const miSimbolo = Symbol();
console.log(miSimbolo);

let simbolo1 = Symbol("miSImbolo");
let simbolo2 = Symbol("miSimbolo");

let texto = "cadena de texto";

console.log(simbolo1);
console.log(texto);
console.log(simbolo1 == simbolo2);

let id = Symbol("id");
let usuario = {
    nombre: "Carlos",
    [id]: 123
}

console.log(usuario);