var pontuacao = 0;

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