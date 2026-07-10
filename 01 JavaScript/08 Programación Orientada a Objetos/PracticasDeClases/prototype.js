function Auto (modelo, año, marca) {
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
    // this.info = function(){
    //     return this.modelo + "-" + this.año + "-" + this.marca;
    // }
}


Auto.prototype.info = function(){
        return this.modelo + "-" + this.año + "-" + this.marca;
    }

const auto1 = new Auto("Model S", 2021, "Tesla");

console.log(auto1.info());
