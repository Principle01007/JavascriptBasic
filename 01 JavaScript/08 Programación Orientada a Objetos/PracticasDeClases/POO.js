let auto1 = {
    modelo: "Modelo 3",
    año: 2021,
    marca: "Telsa"
};

let auto2 = {
    modelo: "Hummer EV",
    año: 2022,
    marca: "GMC"
};


let servicio = {
    nombre: "Tranforma modelos a mayusculas",
    transformar: function(auto) {
        auto.modelo = auto.modelo.toUpperCase();
    }
}

servicio.transformar(auto2);
console.log(auto2);