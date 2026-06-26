// function saludar(nombre, callback) {
//     const mensaje = "¡Hola, " + nombre + "!";
//     callback(mensaje);
// }

// function mostrarEnMayusculas(texto) { 
//     console.log(texto.toUpperCase());
// }

// saludar("Maria", mostrarEnMayusculas);
function Username(usuario, callback){
    switch(usuario) {
        case "Gabriel":
            console.log(usuario + " Bienvenido ahora ingresa tu contraseña");
            callback(usuario, "1234");
            break;
        case "Oscar":
            console.log(usuario + " Bienvenido ahora ingresa tu contraseña");
            callback(usuario, "123");
            break;
        default:
            console.log("No existe ese usuario, registrate");
    }
}

function Password(usuario, contraseña){
    if (usuario === "Oscar" && contraseña === "123"){
        console.log("Ingreso exitoso, buen dia " + usuario);
    } else if(usuario === "Gabriel" && contraseña === "1234"){
        console.log("Ingreso exitoso, buen dia " + usuario);
    } else {
        console.log("Contraseña incorrecta, intentalo de nuevo");
    }
}

Username("Oscar",Password);
