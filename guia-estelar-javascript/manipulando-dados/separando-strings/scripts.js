// Manipulando Strings e Arrays

// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _ (underscore / underline)

let phrase = "Eu quero viver o Amor!"

// String para array
let myArray = phrase.split(" ")

// Array para string com underscore (underline)
let phraseWithUnderscore = myArray.join("_")

// resultado + lowercase
console.log(phraseWithUnderscore.toLocaleLowerCase())