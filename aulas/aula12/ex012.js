var agora = new Date()

var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

/* Aula 12 - Ex012 - Condições 3
    hora >= 00 && hora < 12 Bom dia
    hora >= 12 && hora < 18 Boa tarde
    hora > 18 Boa noite

    -> Pegando a hora do sistema:
        -> var agora = new Date()

           var hora = agora.getHours()
*/

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}