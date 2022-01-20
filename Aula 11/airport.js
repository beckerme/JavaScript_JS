function validar(){
    var nacionalidade = document.querySelector('input.principal_input')
    var resul = document.querySelector('div.resposta')
    if (nacionalidade == 'EUA'){
        resul.innerHTML('Você é nativo, siga pelo portão 4')
    }else {
        resul.innerHTML('Você é estrangeiro, siga pelo portão 6')
    }
}