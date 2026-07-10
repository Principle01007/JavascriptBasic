function info(a) {
    console.log(this, a);
}

let auto = {
    modelo: "Modelo 3",
    año: 2021,
    marca: "tesla",
    info: info
}

// bind, call, apply
info.call(auto, 10);