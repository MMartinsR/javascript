function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minutos} horas.` 
    if (hora >= 0 && hora < 12) {
        img.src = 'manha-250px.png'
        document.body.style.background = '#efcca2'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde-250px.png'
        document.body.style.background = '#ffb183'
    } else {
        img.src = 'noite-250px.png'
        document.body.style.background = '#273140'
    }
}

