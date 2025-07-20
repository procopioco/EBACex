function saudacao(nome) {
    console.log("Olá " + nome + "!");
    return "Olá " + nome + "!";
}

function calcularSoma(a, b) {
    var resultado = a + b;
    console.log("A soma de " + a + " + " + b + " = " + resultado);
    return resultado;
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log("Você é maior de idade");
        return true;
    } else {
        console.log("Você é menor de idade");
        return false;
    }
}

saudacao("EBAC");
calcularSoma(10, 5);
verificarIdade(25); 