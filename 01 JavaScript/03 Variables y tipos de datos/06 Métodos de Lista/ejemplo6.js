// Metodos de lista
let abecedario = ['c', 'b', 'a', 'z', 'y', 'o'];
// console.log(abecedario.length);
// console.log(abecedario[abecedario.length - 2]);
// Metodo sort: ordena la lista en este caso alfabetico
// console.log(abecedario.sort());
// Metodo include: este nos dira si el elemento por que estamos preguntado esta en la lista o no
// console.log(abecedario.includes('k'));
//  Metodo push: nos permite añadir un elemento al final de la lista
// abecedario.push('f')
// console.log(abecedario);
//  Metodo pop: retira el ultimo elemento de la lista
// abecedario.pop('o');
// console.log(abecedario);
// Metodo unshift: te permite añadir un elemento al inicio de la lista
// abecedario.unshift('x');
// console.log(abecedario);
//  Metodo shift: para remover el elemento del inicio de la lista
// abecedario.shift('x');
// console.log(abecedario);
// primer agurmento numero donde comienza, numero de elementos que quieres eliminar, 
console.log(abecedario);
let resultado = abecedario.splice(0,2);

console.log(resultado)