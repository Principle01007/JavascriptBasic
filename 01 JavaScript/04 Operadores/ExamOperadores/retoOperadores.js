



let mayorNum = 10;
let menorNum = 5;
let uno = 1;
let dos = 2;
let texto1 = "Hola Mundo";
let texto2 = "Como estas";
let lista1 = [1, 2, 3, 4];
let lista2 = [1, 2, 3, 4];

const x = 10;
const y =  3;
let suma = x + y;
let resta = x - y;
let multiplicacion = x * y;
let division = x / y;
let modulo = x % y;


console.log('¿El número 10 es mayor que el número 5? ', mayorNum > menorNum);
console.log('¿El número 10 es menor que el número 5?', mayorNum < menorNum);
console.log('¿El número 1 es igual al número 2?', uno === dos);
console.log('¿El texto 1 es igual al texto 2?', texto1.toUpperCase() === texto2.toUpperCase());
// console.log('¿Los objetos son iguales?', lista1 === lista2);
console.log('¿Los objetos son iguales?', JSON.stringify(lista1) === JSON.stringify(lista2));
console.log('AND lógico:', (MayorNum < dos && MenorNum <= MayorNum));
console.log('OR lógico:', (!(uno > dos) || texto1 === texto2));
console.log('La suma de 10 + 3:', suma);
console.log('La resta de 10 - 3:', resta);
console.log('La multiplicación de 10 * 3:', multiplicacion);
console.log('La división de 10 / 3', division);
console.log('10 módulo de 3:', modulo);