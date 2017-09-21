var PESSOA = {
    nome: "Valdir",
    idade: 24
};

var ocupacao = "Programador";

function iniciar() {
    var ocupacao = "Manutenção"
    // ocupacao = "Nenhuma"; - Sobrescrevendo a variavel
    console.log(PESSOA, ocupacao);
};

iniciar();

console.log(ocupacao);