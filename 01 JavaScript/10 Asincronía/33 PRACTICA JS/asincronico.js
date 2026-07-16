// function mostrarmensaje() {
//     console.log("Hola");
// }

// console.log("yo cruzo")
// // setTimeout(()=>{
// //     mostrarmensaje();
// // },2000)
// console.log("Ella me miro y dije");

// setTimeout(mostrarmensaje, 2000);


// let i = 0;
// let interval = setInterval(()=>{
//     console.log(i++);
// }, 2000)

// setTimeout(()=>{
//     clearInterval(interval);
// }, 5000);

const interval = setInterval(() => {
    console.log("Alarma");
}, 3000);

setTimeout(() => {
    clearInterval(interval);
}, 10000);
//esta corre muchas veces de acuerdo al tiempo que le des, cada 2 seg va a imprimir