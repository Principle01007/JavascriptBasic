
// function presentar(ciudad, pais) {
//     console.log(
//         `Soy ${this.nombre}, vivo en ${ciudad}, ${pais}`
//     );
// }

// const datos = ["Lima", "Peru"];

// const persona = {
//     nombre: "Bekam"
// };

// presentar.apply(persona, datos);

// function saludar() {
//     console.log(`Hola, soy ${this.nombre}`);
// }

// const persona = {
//     nombre: "Bekam"
// };


// // saludar.call(persona);
// const nuevafuncion = saludar.bind(persona);

// nuevafuncion();


// function saludar() {
//     console.log(`Hola ${this.nombre}`);
// }

// const persona = {
//     nombre: "Bekam"
// }

// saludar.call(persona);

// function presentar (ciudad, pais){
//     console.log(`${this.nombre} vive en ${ciudad}, ${pais}`);
// }

// const persona = {
//     nombre: "Bekam"
// };

// const datos = ["Arequipa", "Peru"];


// function despedirse() {
//     console.log(`Adios ${this.nombre}`);
// }

// const persona = {
//     nombre: "Bekam"
// };

// const despedirseSave = despedirse.bind(persona);

// despedirseSave();

// function presentar(ciudad, pais){
//     console.log(
//         `${this.nombre} vive en ${ciudad}, ${pais}`
//     );
// }

// const datos = ["Madrid", "España"];

// const persona = {
//     nombre: "Bekam"
// }



// // presentar.apply(persona, datos);
// const presentarPersona = presentar.bind(persona);  // , datos[0], datos[1]


// presentarPersona("Lima", "Peru");
// presentarPersona("Madrid", "España");

function suma(a,b) {
    return a + b;
}

function sumaConCall(num1, num2){
    console.log(suma.call(null, num1, num2));
}

// const numeros = [1, 10];
function sumaConApply(num1, num2){
    console.log(suma.apply(null, [num1, num2]));
}

function sumaConBind(num1, num2){
    const sumaBind = suma.bind(null, num1, num2);
    console.log(sumaBind());
}

sumaConCall(10, 5);

sumaConApply(10, 30);

sumaConBind(10,44);