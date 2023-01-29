// Criando e adicionando elementos

// createElement
const div = document.createElement('div')
div.innerText = "Olá devs!"
const div2 = document.createElement('div')
div2.innerText = "Cabeçalho"

// append prepend
const body = document.querySelector('body')

body.append(div)
body.prepend(div2)