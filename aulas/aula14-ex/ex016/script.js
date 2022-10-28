function contar() {
    var txtInicio = document.getElementById('itxtinicio')
    var txtFim = document.getElementById('itxtfim')
    var txtPasso = document.getElementById('itxtpasso')

    var inicio = Number(txtInicio.value)
    var fim = Number(txtFim.value)
    var passo = Number(txtPasso.value)

    var res = document.getElementById('res')

    if (txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        if (inicio == 0 && fim == 0) {
            res.innerHTML = '0!'
            return
        } else if (fim == 0 && inicio < fim) {
            alert('Fim inválido!')
            return
        } else if (passo <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        
        res.innerHTML = 'Contando... </br>'
        if (inicio < fim) {
            for (var count = inicio; count <= fim; count += passo) {
                res.innerHTML += ` ${count} \u{1F449}`
            }            
        } else {
            for (var count = inicio; count >= fim; count -= passo) {
                res.innerHTML += ` ${count} \u{1F449}`
            }  
        }
        res.innerHTML += ` &#x1F3C1`
    }
    
}