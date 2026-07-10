// class Auto {
//     constructor(modelo, año, marca){
//         this.modelo = modelo;
//         this.año = año;
//         this.marca = marca;
//     }

//     info() {
//         return this.modelo + " . " + this.marca + " - " + this.año;
//     }
// }

// const auto1 = new Auto("Takoma", 2026, "Toyota");


// console.log(auto1.info());


class Canal {
    constructor(canal, tipo, espectadores, url){
        this.canal = canal;
        this.tipo = tipo;
        this.espectadores = espectadores;
        this.url = url;
    }
    ir() {
        console.log(this.url);
    }
}

const canal = new Canal('RollingStone', 'Music', 1432, 'https://www.twitch.tv/rollingstone');

console.log(canal);
canal.ir();
