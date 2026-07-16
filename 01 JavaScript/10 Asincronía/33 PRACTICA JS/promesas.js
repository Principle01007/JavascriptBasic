// console.log("Inicio");


// console.log("Proceso");


// console.log("Fin");

// setTimeout();

// console.log("Inciio");

// setTimeout(() => {
//     console.log("Hola");
// }, 2000);

// console.log("Fin");


// const promesa = new Promise((exito, error) => {

// });

let promesa = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(() => {
        reciboDatos("hay datos");
    }, 5000);
});


promesa
    .then(texto => texto.toUpperCase())
    .then(texto => texto + "!!!")
    .then(texto => console.log(texto))
    .catch(problema => console.log("Error: " + problema))
    .finally(() => console.log("Todo listo")); //promesa completo totalmente


    console.log("Quiero ejecutar lo mas pronto posible");
