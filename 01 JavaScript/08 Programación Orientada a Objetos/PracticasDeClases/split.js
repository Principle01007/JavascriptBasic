
const persona = {
    _nombre: "Bekam",
    _edad: "21",
    get info() {
        console.log("Usuario: " + this._nombre + " su edad: " + this._edad);
    },
    set actualizaDatos(valor) {

        const splitvalor = valor.split(" ");

        this._nombre = splitvalor[0];
        this._edad = splitvalor[1];
    }
}

persona.info;

persona.actualizaDatos = "Cristiano 17";

persona.info;


