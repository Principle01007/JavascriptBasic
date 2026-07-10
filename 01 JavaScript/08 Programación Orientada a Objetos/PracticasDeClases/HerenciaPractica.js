function Animal (nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

function Perro (nombre, edad) {
    Animal.call(this, nombre, edad);
}

// Perro.prototype = Animal.prototype;


Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.ladra =  function() {
    console.log(`${this.nombre} de ${this.edad} años esta ladrando`);
}


Animal.prototype.respirar = function() {
    console.log(`El animalito llamado ${this.nombre} esta respirando`);
}

const animal = new Animal("León", 5);
const perro = new Perro("Max", 12);


console.log(animal);
console.log(perro);

animal.respirar();
perro.respirar();
perro.ladra();



