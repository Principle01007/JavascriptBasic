const libro = {
    _titulo: "Padre rico Padre poor",
    _autor: "Rober Kiyosaki",

    get infoLibro() {
        console.log("Autor del libro " + this._autor + " Y el nombre del libro: " + this._titulo)
    },

    set actualizarLibro(valor){
        const slitValor = valor.split(" ");

        this._autor = slitValor[0];
        this._titulo = slitValor[1];
    },

    set actualizarAutor(Dato) {
        this._autor = Dato;
    },

    set changeInfoLibro(Datos) {
        this._titulo = Datos.titulo;
        this._autor = Datos.autor;
    }
};

libro.infoLibro;

// libro.actualizarLibro = "HarryPotter Rowling";
// libro.actualizarAutor = "Cristiano Ronaldo"
libro.changeInfoLibro = {
    titulo: "Mundial 2026",
    autor: "Leo Messi"
};

libro.infoLibro;
