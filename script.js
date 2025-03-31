let saldo = 0;

document.getElementById("saldo").innerHTML = `<p>R$ ${saldo}</p>`;

function adicionaDinheiro(valor){
    saldo += valor;
    document.getElementById("saldo").innerHTML = `<p>R$ ${saldo}</p>`;
}


function compraDoce(tipoDoce){
    if(tipoDoce == "A"){
        if(saldo >= 6){
            alert("Comprou Doce A.");
            saldo -= 6;
            document.getElementById("saldo").innerHTML = `<p>R$ ${saldo}</p>`
        } else {
            alert("Saldo Insuficiente.");
        }
    }
    if(tipoDoce == "B"){
        if(saldo >= 7){
            alert("Comprou Doce B.");
            saldo -= 7;
            document.getElementById("saldo").innerHTML = `<p>R$ ${saldo}</p>`
        } else {
            alert("Saldo Insuficiente.");
        }
    }
    if(tipoDoce == "C"){
        if(saldo >= 8){
            alert("Comprou Doce C.");
            saldo -= 8;
            document.getElementById("saldo").innerHTML = `<p>R$ ${saldo}</p>`
        } else {
            alert("Saldo Insuficiente.");
        }
    }
}
