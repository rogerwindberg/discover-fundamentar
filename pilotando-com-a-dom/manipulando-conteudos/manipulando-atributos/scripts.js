// Manipulando conteúdo
// Atributos

const header = document.querySelector('header')

// atribuindo um atributo
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

// verificando o atributo
console.log(headerID.getAttribute('class'))

// removendo os atributos
header.removeAttribute('id')
header.removeAttribute('class')