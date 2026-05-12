let datosDeUsuario = new WeakMap();
let usuario1 = { nombre: 'Bernardo'};
let usuario2 = { nombre: 'Marcelo'};
datosDeUsuario.set (usuario1, { profesion: 'Diseñadora gráfica autónoma'});
datosDeUsuario.set (usuario2, { profesion: 'Ingenieria Civil'});

console.log(datosDeUsuario.get(usuario1));