# Pseudo-classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele.

Pseudo-classes começam com 2 pontos seguido do nome da pseudo class
`:pseudo-class-name`

## Selecionando elementos com pseudo-classes

* :first-child <!-- ex: ul li:first-child -->
* :nth-of-type() <!-- ex: ul li:nth-of-type(3) -->
* :nth-child() <!-- ex: ul li:nth-child(2) / ul li:nth-child(odd) / ul li:nth-child(even) -->

## Ações do usuário

* :hover
* :focus

## Atributos

* :disabled
* :required

## Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes