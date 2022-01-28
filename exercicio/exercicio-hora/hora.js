function carregar(e){
    var body = document.querySelector('body')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha-pq.png'
        body.style.background = '#9E8C7D'

    } else if (hora >= 12 && hora <= 18){
        img.src = 'imagens/tarde-pq.png'
        body.style.background = '#A8C7A7'
    } else {
        img.src = 'imagens/noite-pq.png'
        body.style.background = '#5F4E40'
    }
}