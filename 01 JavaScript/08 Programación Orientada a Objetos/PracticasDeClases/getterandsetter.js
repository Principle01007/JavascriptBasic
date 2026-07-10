const objeto = {
  a: 10,
  get b() {
    return this.a;
  },
  set b(x) {
    this.a = x;
  }
};

console.log(objeto.b); // leo b como si fuera una propiedad y retorna 10
objeto.b = 20; // modifico b como si fuera una propiedad
console.log(objeto.a) // ahora a es 20

const persona = {
    _nombre: "Bekam",
    _edad: 21,

    get infoPersona() {
        console.log(`Usuario: ${this._nombre} - Edad: ${this._edad}`);
    },

    set cambiarInfoPersona(datos) {
        this._nombre = datos.nombre;
        this._edad = datos.edad;

        console.log(`Nuevo usuario: ${this._nombre} - Edad: ${this._edad}`);
    }
};

// GET → imprime los valores originales
persona.infoPersona;

// SET → modifica e imprime los nuevos valores
persona.cambiarInfoPersona = {
    nombre: "Juan",
    edad: 25
};

// GET → imprime los valores ya modificados
persona.infoPersona;