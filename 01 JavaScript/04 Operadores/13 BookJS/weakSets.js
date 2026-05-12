let usuarios = new WeakSet ();

let usuarios1 = {nombre: 'Sara', edad: 20};
let usuarios2 = {nombre: 'Jimmy', edad: 25};

usuarios.add(usuarios1);
usuarios.add(usuarios2);

console.log(usuarios.has(usuarios1));
console.log(usuarios.has(usuarios2));
