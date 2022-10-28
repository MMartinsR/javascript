function tabuada() {
    let txtNumber = document.getElementById('itxtnum')
    let select = document.getElementById('seltab')

    if (txtNumber.value.length > 0) {
        let number = Number(txtNumber.value)

        select.innerHTML = ''
        for (let count = 1; count <= 10; count++) {
            let option = document.createElement('option')
            //option.setAttribute('value', `${count}`)
            option.text = `${number} x ${count} = ${number * count}`
            option.value = `tab${count}`
            select.appendChild(option)
        }
    } else {
        alert('Por favor, digite um número')
    }

}