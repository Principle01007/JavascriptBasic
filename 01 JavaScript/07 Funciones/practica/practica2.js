saludar();

function saludar() {
    console.log("Hola");
}


let suma = function( num, num1){
    console.log(num + num1);
}

suma(1, 7);

function factorial(n) {
    if(n === 0) {
        return 1;
    }
    return n * factorial(n-1); // 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 * 1
}

factorial(10);