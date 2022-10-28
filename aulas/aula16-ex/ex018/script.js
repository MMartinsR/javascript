var num = document.getElementById('itxtnum')
var selectVet = document.getElementById('selvet')
let res = document.querySelector('div#res')
var numArray = []

function isNumero(numero) {
    if (Number(numero) >= 1 && Number(numero) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(numero, lista) {
    if (lista.indexOf(Number(numero)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    
    if (isNumero(num.value) && !inLista(num.value, numArray)) {
        numArray.push(Number(num.value))
        var option = document.createElement('option')
        option.text = `valor ${num.value} adicionado`
        selectVet.appendChild(option)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
    /* if (txtNum.value.length == 0) {
        alert('Por favor, insira um número!')
    } else {
        var num = Number(txtNum.value)

        if (num < 1 || num > 100) {
            alert('Valor inválido')
        } else {

            for (var i = 0; i < numArray.length; i++) {
                if (numArray.indexOf(num) == -1 || numArray.length == -1){
                    var option = document.createElement('option')
                    option.text = `valor ${num} adicionado`
                    selectVet.appendChild(option)
                    numArray.push(num)
                } else {
                    alert('Valor já existe na lista!')
                }
            }
            
            
        }        
    }     */
}

function finalizar() {
    if(numArray.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = numArray.length
        let maior = numArray[0]
        let menor = numArray[0]
        let soma = 0
        let media = 0

        for (let pos in numArray) {
            if (numArray[pos] > maior){
                maior = numArray[pos]
            }

            if (numArray[pos] < menor){
                menor = numArray[pos]
            }
            soma += numArray[pos]
        }
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }

}