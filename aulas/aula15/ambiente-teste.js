/** Aula 15 - Arrays
 *  -> let num = [5, 8, 2, 9, 3]
 *  -> num.push(7)
 *  -> num[5] = 6
 *  -> num.sort() 
 */

let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)

num[5] = 6

console.log(`Nosso vetor é o ${num}`)

num.push(7)

console.log(`Nosso vetor é o ${num}`)

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

num.sort()

console.log(`Nosso vetor ordenado é ${num}`)

let pos = num.indexOf(4)

if(pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}


