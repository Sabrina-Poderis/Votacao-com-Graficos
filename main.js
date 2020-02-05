//variaveis principais
let elementoQtdMelancia = document.getElementById("votoMelancia"),
    elementoQtdUva = document.getElementById("votoUva"),
    elementoQtdBanana = document.getElementById("votoBanana");
let qtdMelancia = 0,
    qtdUva = 0,
    qtdBanana = 0;
let elementoBarraMelancia= document.getElementById("barraMelancia"),
    elementoBarraUva = document.getElementById("barraUva"),
    elementoBarraBanana = document.getElementById("barraBanana");
let elementoPorcMelancia= document.getElementById("porcMelancia"),
    elementoPorcUva = document.getElementById("porcUva"),
    elementoPorcBanana = document.getElementById("porcBanana");

//votos
function votarMelancia(){
    qtdMelancia++;
    elementoQtdMelancia.innerHTML = qtdMelancia;
    grafico();
}
function votarUva(){
    qtdUva++;
    elementoQtdUva.innerHTML = qtdUva;
    grafico();
}
function votarBanana(){
    qtdBanana++;
    elementoQtdBanana.innerHTML = qtdBanana;
    grafico();
}

//reseta a página
function resetar(){
    //reseta vars
    qtdMelancia = qtdUva = qtdBanana = 0;
    //reseta quantidade
    elementoQtdMelancia.innerHTML = "0";
    elementoQtdUva.innerHTML = "0";
    elementoQtdBanana.innerHTML = "0";
    //reseta grafico
    elementoBarraMelancia.style.width = "1px";
    elementoBarraUva.style.width = "1px";
    elementoBarraBanana.style.width = "1px";
    //reseta porcentagem
    elementoPorcMelancia.innerHTML = "0%";
    elementoPorcUva.innerHTML = "0%";
    elementoPorcBanana.innerHTML = "0%";
}

function grafico(){
    //calcula as porcentagens
    let total = qtdMelancia + qtdUva + qtdBanana;
    let porcMelancia = qtdMelancia/total,
        porcUva = qtdUva/total,
        porcBanana = qtdBanana/total;
    let pxMelancia = porcMelancia * 500,
        pxUva = porcUva * 500,
        pxBanana = porcBanana * 500;
    
    //monta o gráfico
    elementoBarraMelancia.style.width = pxMelancia + "px";
    elementoBarraUva.style.width = pxUva + "px";
    elementoBarraBanana.style.width = pxBanana + "px";
    
    elementoPorcMelancia.innerHTML = (porcMelancia  * 100).toFixed(2) + "%";
    elementoPorcUva.innerHTML = (porcUva * 100).toFixed(2) + "%";
    elementoPorcBanana.innerHTML = (porcBanana * 100).toFixed(2) + "%";
}