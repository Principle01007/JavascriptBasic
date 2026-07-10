let auto = {
    modelo: "Modelo 3",
    año: 2021,
    marca: "Tesla",
    info: function() {
        return "Este es un auto " + this.marca
        + ", " + this.modelo + " del año " + this.año;
    }
};

console.log(auto.marca);
console.log(auto.info());


const item = {
    id: '1234556', 
    getId: function() { 
        console.log(this.id); 
    } 
};

item.getId();