// function expression
// function anonymous

// parâmetros da função (parameters)
const sum = function(number1, number2){
    total = number1 + number2
    return total // se não tiver o return, o sum retorna undefined
}

let number1 = 34
let number2 = 25

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma dos dois é ${sum(number1, number2)}`)

// após executar a função sum, o total pode ser visualizado mesmo sem ser uma variável (isso é um problema)
console.log(total);
// sempre atribua let ou const antes de usar o return