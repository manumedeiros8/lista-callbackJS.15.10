function processarNumero(numero, callback) {
    callback(numero);
}

processarNumero(2, (n) => console.log("Triplo:", n * 3));
processarNumero(5, (n) => console.log("Triplo:", n * 3));
processarNumero(10, (n) => console.log("Triplo:", n * 3));