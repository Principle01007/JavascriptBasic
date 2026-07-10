// function Perro(nombre, raza) {
//     this.nombre = nombre;
//     this.raza = raza;

//     // this.ladrar = function() {
//     //     console.log("Guau!");
//     // };
// }

// Perro.prototype.ladrar = function() {
//     console.log("Guau");
// }

// const perro1 = new Perro("Max", "Jack russel terrier");
// const perro2 = new Perro("Firulais", "dalmata");

// perro1.ladrar();



// function Persona (nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
// }

// Persona.prototype.saludar = function() {
//     console.log("Hola, soy ", this.nombre, " y tengo ", this.edad, " años.");
// }

// const persona1 = new Persona("Haaland", 25);
// const persona2 = new Persona("Messi", 39);

// console.log(persona1);
// console.log(persona2);

// persona1.saludar();


// function Libro(titulo, autor, paginas) {
//     this.titulo = titulo;
//     this.autor = autor;
//     this.paginas = paginas;
// }

// const libro1 = new Libro("Padre Rico", "Robert Kiyosaki", 300);

// Libro.prototype.mostrarLibro = function(){
//     console.log("El ", this.titulo, " tiene ", this.paginas, " páginas y fue escrito por ", this.autor ,".");
// }

// Libro.prototype.leer =  function() {
//     console.log("Estoy leyendo ", this.titulo);
// }

// libro1.mostrarLibro();
// libro1.leer();

// function Celular (marca, modelo, bateria) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.bateria = bateria;
// }

// const celular1 = new Celular("Samsung", "S24", 100)
// Celular.prototype.encender = function() {
//     console.log(this.marca," ", this.modelo, " encedido.");
// }

// Celular.prototype.estadoBateria = function() {
//     console.log("Batería: ", this.bateria, "%");
// }

// celular1.encender();
// celular1.estadoBateria();




// function CuentaBancaria(titular, saldo) {
//     this.titular = titular;
//     this.saldo = saldo;
// }

// CuentaBancaria.prototype.depositar = function(monto){
//     if(monto === 0){
//         console.log("No hay modificaciones: ", this.saldo);
//     } else {
//         this.saldo += monto;
//         console.log("Saldo actual modificado: ", this.saldo);
//     }
// }

// CuentaBancaria.prototype.retirar = function(monto) {
//     if(monto === 0){
//         console.log("No hay modificaciones", this.saldo);
//     } else {
//         this.saldo -= monto;
//         console.log("Saldo actual segun retiro: ", this.saldo);
//     }
// }


// const cuenta1 = new CuentaBancaria("Bekam Huaracha", 1000);
// const cuenta2 = new CuentaBancaria("Cristiano Del Mar", 1500);
// console.log(cuenta1);
// cuenta1.depositar(500);
// cuenta1.retirar(200);
// cuenta1.depositar(1000);

// console.log(cuenta2);
// cuenta2.depositar(300);
// cuenta2.retirar(900);


// function VideoJuego(nombre, nivel){
//     this.nombre = nombre;
//     this.nivel = nivel;
// }

// VideoJuego.prototype.subirNivel = function (){
//     // this.nivel++;
//     if(this.nivel >= 0){
//         this.nivel += 1;
//         return this.nivel;
//     } else {
//         this.nivel = 1;
//         return this.nivel;
//     }
// }

// VideoJuego.prototype.reiniciarNivel = function(){
//     this.nivel = 1;
//     return this.nivel;
// }

// VideoJuego.prototype.mostrarNivel = function(){
//     console.log(`${this.nombre} está en el nivel ${this.nivel}.`);
// }

// const juego1 = new VideoJuego("Mario Bros", 10);
// const juego2 = new VideoJuego("Valentina", 5);
// console.log("Nivel actualizado: ", cuenta1.subirNivel());

// console.log("Se reinicio nivel: ", cuenta2.reiniciarNivel());
// juego2.mostrarNivel();
// juego1.mostrarNivel();
// juego1.mostrarNivel();


// 

function Auto (marca, modelo, velocidad) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidad = velocidad;
}

Auto.prototype.acelerar = function() {

}

const auto1 = new Auto("Toyota", "corolla", 0);








