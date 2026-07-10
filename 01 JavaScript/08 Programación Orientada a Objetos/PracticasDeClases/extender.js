// class Animal {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }
  
//   hablar() {
//     console.log(`${this.nombre} hace un sonido.`);
//   }
// }

// class Perro extends Animal {  
//   hablar() {
//     console.log(`${this.nombre} ladra.`);
//   }
// }

// const miPerro = new Perro("Buddy");
// miPerro.hablar();  // Salida: Buddy ladra.

// class Padre{
//     constructor(nombre, apellido, soy) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.soy = soy;
//     }
//     saludo() {
//         console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`);
//     }

// }


// class Hijo extends Padre{
//     constructor(nombre, apellido, soy, tengo){
//         super(nombre, apellido, soy);
//         this.tengo = tengo;
//     }

//     saludoHijo(){
//         console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy} y tengo ${this.tengo}`)
//     }
// }


// const padre = new Padre("Bekam", "Cervantes", "Padre");
// const hijo = new Hijo("Daniel", "Lavessi", "hijo", 12);
// // console.log(padre);
// padre.saludo();
// // console.log(hijo);

// hijo.saludoHijo();


class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    area() {
        return this.ancho * this.alto;
    }
}


class Cuadrado extends Rectangulo{
    constructor(lado) {
        super(lado, lado);
    }
}

const rectangulo1 = new Rectangulo(40, 20);
console.log(rectangulo1.area());


const cuadrado1 = new Cuadrado(20);
console.log(cuadrado1.area());