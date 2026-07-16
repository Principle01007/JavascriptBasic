// const promesa = new Promise((resolve, reject) => {
//     reject("No")
// });

// promesa.then(texto => console.log(texto))
//     .catch(error => console.log("Error"));

// const promesaJs = new Promise((resolve, reject) => {
//     resolve("Bienvenido a Javascript");
// });

// promesaJs.then(Afirmativo => console.log(Afirmativo))
//     .catch(error =>);

// const promesa = new Promise((resolve, reject) => {
//     reject("Error al iniciar sesion");
// });
// promesa.then(mensaje => console.log(mensaje))
//     .catch(error => console.log(error));


let nota = 15;
const promesa = new Promise((resolve, reject) => {
    if(nota >= 11) {
        resolve("Aprobaste");
    } else if(nota < 11) {
        reject("Desaprobaste");
    }
});

promesa.then(resultadoPositivo => console.log(resultadoPositivo))
    .catch(resultadoNegativo => console.log(resultadoNegativo));