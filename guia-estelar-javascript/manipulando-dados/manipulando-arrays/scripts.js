// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")

// adicionar no começo
techs.unshift("sql")

// remover do fim
//techs.pop()

// remover do começo
//techs.shift()

// pegar somente alguns elementos
//console.log(techs.slice(1, 3))

// remover 1 ou mais items em qualquer posição do array
//techs.splice(1, 2)

// encontrar a posição de um elemento do array
let index = techs.indexOf("css")
console.log('A posição do CSS é ' + index)

console.log(techs)