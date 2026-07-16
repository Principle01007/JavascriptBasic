// class Libro {
//     constructor(titulo, autor, paginas){
//         this.titulo =  titulo;
//         this.autor = autor;
//         this.paginas = paginas;
//     }

//     mostrarInfo() {
//         console.log(`El libro ${this.titulo} fue escrito por ${this.autor} y tiene ${this.paginas} páginas.`);
//     }
// }

// const libro1 = new Libro("Clean Code", "Robert C. Martin", 464);

// libro1.mostrarInfo();



//web API
console.log('antes');
setTimeout(()=>{
    console.log('Cualquier codigo');
},3000)
console.log('despues');

//guardando para que sea reutilizable

console.log('antes');
let timeout = setTimeout(()=>{
    console.log('Cualquier codigo');
},3000)
console.log('despues');

clearTimeout(timeout); //cancela el timeout


