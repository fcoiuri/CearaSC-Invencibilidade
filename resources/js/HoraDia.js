function tempo() {
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();
    var dia = data.getDate()
    var mes = data.getMonth() + 1
    var ano = data.getFullYear()

    minuto = checarTempo(minuto);
    segundo = checarTempo(segundo);
    mes = checarTempo(mes)
    dia = checarTempo(dia)

    document.getElementById('textoP').innerHTML =
        "Hora: " + hora + ":" + minuto + ":" + segundo + "<br>" +
        `Dia: ${dia}/${mes}/${ano}`;
    var t = setTimeout(tempo, 500);
}

function checarTempo(i) {
    if (i < 10) { i = "0" + i };
    return i;
}