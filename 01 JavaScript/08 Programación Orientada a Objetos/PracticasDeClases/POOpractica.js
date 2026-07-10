// const nova = {
//   marca: 'Huawei',
//   modelo: 'Nova 10 Pro',
//   año: 2021
// }

// const iphone = {
//   marca: 'Apple',
//   modelo: 'iPhone 14 Pro',
//   año: 2022
// }

// const servicioActualizador = {
//   nombre: 'Actualiza a iPhone 14 Pro Max',
//   actualizar: function(celular) {
//     const copia = JSON.parse(JSON.stringify(celular));
//     copia.modelo = 'iPhone 14 Pro Max';
//     return copia;
//   }
// }

// console.log(iphone);
// console.log(servicioActualizador.actualizar(iphone));





const celular = {
    marca: "Apple",
    modelo: "Iphone12"
};

let texto = JSON.stringify(celular);

console.log(typeof texto);

let objetoAgain = JSON.parse(texto);

console.log(typeof objetoAgain);
console.log(celular);
console.log(objetoAgain); //este seria la copia 

if(celular === objetoAgain) {
    // console.log(`No son diferentes son iguales ${celular} y ${objetoAgain}`);
    console.log("Son igules", objetoAgain);
} else {
    // console.log(`Son distintos objetos ${celular} y ${objetoAgain}`);
    console.log("Son distintos objetos" + celular + " y " + objetoAgain);
}

const javascript = {
    nombre: "Javascript",
    año: 2012,
    autor: "Cristiano Ronaldo",
    obtenerInfo: function(){
        return `${this.nombre} fue creado en  ${this.año} por ${this.autor}.`;
    }
    // get obtenerInfo(){
    //     console.log(this.nombre,"fue creado en ", this.año, " por ", this.autor, ".");
    // }
};

console.log(javascript.obtenerInfo());