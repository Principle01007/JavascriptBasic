function Padre(nombre, apellido, soy){
    this.nombre = nombre;
    this.apellido = apellido;
    this.soy = soy;
}

Padre.prototype.saludo = function(){
    console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}.`);
}

function Hija(nombre, apellido, soy, tengo) {
    Padre.call(this, nombre, apellido, soy);
    this.tengo = tengo;
}

Hija.prototype = Padre.prototype;
Hija.prototype.saludoHijo = function(){
    console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy} y tengo ${this.tengo} años`);
}


const padre = new Padre("Ramon antonio Gerardo", "Estevez", "el padre");
const hijo = new Hija("Carlos Irwin", padre.apellido, "el hijo", 15);


// console.log(padre);
// console.log(hijo);

padre.saludo();
hijo.saludoHijo();
