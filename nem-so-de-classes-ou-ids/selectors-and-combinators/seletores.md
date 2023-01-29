# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento

## Tipos

* Element selector
    - Todos os elementos HTML
* ID Selector
    - Um elemento que tenha um atributo `id`
    - Cada id deverá ser único
* Class Selector
    - Os elementos que contenham um atributo `class`
    - Podemos ter uma ou mais classes
* Attribute selector
    - Um elemento que tenha um atributo específico
        exemplo:
        ```html
        <h1 id="titulo" title="Algum título">Título da página</h1>
        ```
        ```css
        [title] {
            color: orange;
        }
        ```
* Pseudo-class selector
    - Elementos em um estado específico (estado/condição, como "somente se o cursor estiver em cima")
        exemplo:
        ```html
        <h1>Título da página</h1>
        ```
        ```css
        h1:hover {
            color: orange;
        }
        ```
## Múltiplos

Você poderá selecionar múltiplos elementos e aplicar uma regra css para todos eles.

Usamos uma separação por vírgulas para isso

```css
h1, p, a {
    color: red;
}
```