const regexArroba = /@/;
const regexCom = /\.com/;

 export function esCorreoValido(correo) {
    
    let validacion1 = regexArroba.test(correo);
    let validacion2 = regexCom.test(correo);
    if(validacion1 === true && validacion2 === true) {
        return true;
        // console.log(`Correo ${correo} es valido`);
    } else {
        return false;
        // console.log(`Correo ${correo} no es valido`);
    }
}

console.log(esCorreoValido("pepito@gmail.com"));
console.log(esCorreoValido("Hola"));
console.log(esCorreoValido("Siu.com"));
console.log(esCorreoValido("SIU@com"));