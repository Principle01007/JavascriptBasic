// let objeto = {'uno': 1, 'dos dos': {} };
//  Creando una etiqueta o llave y dandole su valor
let objeto = {
    numero: 1,
    texto: 'texto',
    'lista': [],
    boolean: true,
    objeto: {
        objeto2: 'hola'
    }
};

let usuario = {
    nombre: 'Bekam',
    apellidos: 'Huaracha Cabrera',
    Profesion: 'Gestor de Activos de renta Variable'
}

// Si queremos acceder a cada uno d eestos eleemntos
// console.log(objeto.numero);
// console.log(objeto.objeto.objeto2);
//  otra forma de escribir esto
// console.log(objeto['objeto']['objeto2']);
//  borrar alguna de estas propiedades
delete objeto['objeto'];
// console.log(objeto);

// let numero1 = 1;
// let numero2 = numero1;
// numero2 = 3;
// console.log(numero1, numero2);

// let usuario2 = usuario;
// usuario2.Profesion = 'Ingeniero de software';
// console.log(usuario);

let usuario2 = JSON.parse(JSON.stringify(usuario));
usuario2.Profesion = 'Ingeniero de software';
console.log(usuario);
console.log(usuario2);
