var pontuacao = 0;
var numero = 1;

var pessoa = {
    primeiroNome: "Ilton",
    idade: 18,
    escolaridade: "Ensino medio"
};

console.log(pessoa)

function contador() {
    pontuacao +=1;
    document.getElementById("valor").innerHTML = "Valor: " + pontuacao;
} 
function contador2() {
    pontuacao += 5;
    document.getElementById("valor").innerHTML = "Valor: " + pontuacao;
}

function contador3() {
    pontuacao += 20;
    document.getElementById("valor").innerHTML = "Valor: " + pontuacao;
}


function objetoTeste() {

    document.getElementById("objeto").innerHTML = "Primeiro nome: " + pessoa.primeiroNome +
    "| Idade: " + pessoa.idade +"| Escoloridade: " + pessoa.escolaridade;
}

function adicionaTela(){
    var valor = [document.getElementById("inserir").value];

    var criar = document.createElement("li");
    var texto = document.createTextNode(valor);

    criar.appendChild(texto);
    //Colocar texto no input
    document.getElementById("colocaTexto").appendChild(criar)
    //Apagar o input
    document.getElementById("inserir").value = "";
    document.body.appendChild(criar)
    

}

function frequencia(){
    if(pontuacao > 50){
        var texto = "Você passou de 50, ual em";
        document.getElementById("motivador").innerHTML = texto;
    }
}

function frequencia2() {
    if (pontuacao >= 100) {
        var texto = "Sucesso, ja chegou em 100? caramba em";
        document.getElementById("motivador").innerHTML = texto;
    }
}