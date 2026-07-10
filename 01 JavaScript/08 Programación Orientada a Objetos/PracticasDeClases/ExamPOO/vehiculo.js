class Vehiculo {
    constructor(numRuedas, tipoVehiculo) {
        this.tipoVehiculo = tipoVehiculo;
        this.numRuedas = numRuedas;
    }

    info () {
        console.log(`El vehículo ${this.tipoVehiculo} tiene ${this.numRuedas} ruedas`);
    }
}

class Carro extends Vehiculo{
    constructor(numRuedas, tipoVehiculo, capacidadPasajeros){
        super(numRuedas, tipoVehiculo);
        this.capacidadPasajeros = capacidadPasajeros;
    }

    mostrarDetalles() {
        console.log(`El vehículo tiene ${this.numRuedas} ruedas. Puede transportar ${this.capacidadPasajeros} pasajeros.`);
    }
}

class Bicicleta extends Vehiculo{
    constructor(numRuedas, tipoVehiculo, tipoBici){
        super(numRuedas, tipoVehiculo);
        this.tipoBici = tipoBici;
    }

    showDetails() {
        console.log(`El vehículo tiene ${this.numRuedas} ruedas. Es una ${this.tipoVehiculo} de tipo ${this.tipoBici}.`);
    }
}

const carro1 = new Carro(4, "sedán", 5);
const bicicleta1 = new Bicicleta(2, "Bicicleta", "Montaña");

carro1.info();
carro1.mostrarDetalles();

bicicleta1.info();
bicicleta1.showDetails();
