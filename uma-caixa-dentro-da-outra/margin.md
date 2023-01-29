## margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: `<length>` | `<percentage>` | auto

```css
div {
  /* shorthand */
  margin: 12px 16px 10px 4px;       /* Sentido horário: top, right, bottom, left */
  margin: 12px 16px 0px;            /* top, left e right, bottom */
  margin: 8px 16px;                 /* top e bottom, left e right */
  margin: 8px;                      /* margin igual para todas as direções */
}
```
* Cuidado com margin collapsing (top se ajunta ao bottom)

https://developer.mozilla.org/en-US/docs/Web/CSS/margin