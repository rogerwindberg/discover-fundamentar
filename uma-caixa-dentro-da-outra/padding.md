## padding

Preenchimento interno da caixa

- padding-top | padding-right | padding-bottom | padding-left
- values: `<length>` | `<percentage>`

```css
div {
  /* shorthand */
  padding: 12px 16px 10px 4px;       /* Sentido horário: top, right, bottom, left */
  padding: 12px 16px 0px;            /* top, left e right, bottom */
  padding: 8px 16px;                 /* top e bottom, left e right */
  padding: 8px;                      /* padding igual para todas as direções */
}
```
* Padding poderá causar diferença na largura de um elemento

https://developer.mozilla.org/en-US/docs/Web/CSS/padding