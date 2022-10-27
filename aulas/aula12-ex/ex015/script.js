function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > anoAtual) {
        res.innerHTML = '[ERRO] Verifique os dados e tente novamente!'
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                genero = 'criança'
                img.setAttribute('src', 'bebe-homem.png')
            } else if (idade < 21) {
                //Jovem
                genero = 'homem jovem'
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 50) {
                // Adulto
                genero = 'homem adulto'
                img.setAttribute('src', 'adulto-homem.png')
            } else {
                //Idoso
                genero = 'homem idoso'
                img.setAttribute('src', 'idoso-homem.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                genero = 'criança'
                img.setAttribute('src', 'bebe-mulher.png')
            } else if (idade < 21) {
                //Jovem
                genero = 'mulher jovem'
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade < 50) {
                // Adulto
                genero = 'mulher adulta'
                img.setAttribute('src', 'adulto-mulher.png')
            } else {
                //Idoso
                genero = 'mulher idosa'
                img.setAttribute('src', 'idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}