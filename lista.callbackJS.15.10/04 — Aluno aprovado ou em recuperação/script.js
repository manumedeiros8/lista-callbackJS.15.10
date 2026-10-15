function verificarNota(nota, callback) {
    callback(nota);
}

function resultadoNota(nota) {
    if (nota >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Recuperação");
    }
}

verificarNota(8, resultadoNota);
verificarNota(4, resultadoNota);