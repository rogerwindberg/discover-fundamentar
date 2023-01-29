// Criando e adicionando elementos

// createElement
const div = document.createElement('div')
div.innerText = "Olá devs!"

// insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)

// simulando um "insertAfter"

const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)