function parimpar(n) {
    if (n%2 == 0) {
        return 'par!'
    } else {
        return 'ímpar!'
    }
}

var res = parimpar(2)
console.log(res)
console.log(`valor 223 é ${parimpar(223)}`)