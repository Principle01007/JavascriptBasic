let edad = 15;
if (edad >= 18) {
    console.log('Eres mayor de Edad.');
} else {
    console.log('Eres menor de Edad.');
}

// la accion es de alguien por ejemplo juan, el debe de hacer una accion( DiseñarDesarrollarIdearInnovarPlanificar)
let usuario = 'Juan';
let accion = 'Diseñar';

switch (accion) {
    case 'Diseñar':
        console.log(`A ${usuario} le toca Diseñar`);
        break;
    case 'Desarrollar':
        console.log('La accionde Desarrollar');
        break;
    case 'Crear':
        console.log('La accion de crear');
        break;
    default :
        console.log('Se encuentra de vacaciones');
}

let numero = 8;
let resultado = numero % 2 !== 0 ? 'Numero ingresado es impar' : 'Numero ingresado es par';
console.log(resultado);
