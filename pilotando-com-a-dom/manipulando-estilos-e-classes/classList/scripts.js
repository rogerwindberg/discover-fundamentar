// Alterando estilos
// classList

const element = document.querySelector('body')

element.classList.add('active', 'green')
console.log(element.classList)

// remove - remove a classe
element.classList.remove('active')

// toggle - adiciona se não existir e remove se existir
element.classList.toggle('active')