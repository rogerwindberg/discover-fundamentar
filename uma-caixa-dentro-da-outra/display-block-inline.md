# display: block vs display: inline

- Como as caixas se comportam em relação às outras caixas
- Comportamento externo das caixas

## display: block

* Ocupa toda a linha, colocando o próximo elemento abaixo desse
* width e height são respeitados
* padding, margin e border irão funcionar normalmente

## display: inline

* Elemento ao lado do outro
* width e height não funcionam
* Somente valores horizontais de padding, margin e border

# Exemplos

block: `<p> <div> <section>`, todos os headings `<h1><h2>...`
inline: `<a> <strong> <span> <em>`