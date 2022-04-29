# Document Object Model (DOM) studies
Este repositório contém exemplos práticos de código e também anotações sobre meus estudos de DOM.

A DOM é uma estrutura arbórea gerada a partir do HTML para que linguagens de script — como o JavaScript — possa interpretá-lo e fazer modificações nele a partir dela. Essa abstração é necessária porque, a princípio, o JS não entende HTML, mas entende objetos. Transformando o HTML em uma árvore com forma de objetos faz com que o JS acesse seus nós da mesma forma como acessa seus objetos nativos.

![Lightbox](https://media.geeksforgeeks.org/wp-content/uploads/DOM.png)
## Métodos
O objeto `document`, portanto, possui métodos relacionados a seus filhos, netos e assim por diante. Por exemplo, para encontrar elementos pertencentes a ids ou classes específicas, basta usar:

```javascript
document.getElementById('algumId') // para retornar um elemento com o id passado

document.getElementsByName('algumNome') // para retornar um elemento com a propriedade "name" correspondente

document.getElementsByTagName('nomeDaTag') // retorna uma lista (que não é um array) de todas as tags correspondentes

document.getElementsByClassName('nomeDaClasse') // retorna uma lista (que não é um array) de todos os elementos pertencentes à classe correspondente

```

Existe também um coringa, o `querySelector()`. Ele é usado para retornar seletores CSS (ids e classes) e também tags HTML
```javascript

document.querySelector('.nomeDaClasse')

document.querySelector('#nome-do-id')

document.querySelector('div')


```

Para retornar uma lista com todos os elementos do documento — e não apenas o primeiro —, utilize o `document.querySelectorAll()`.

Uma vantagem do `querySelectorAll()` é 