# Document Object Model (DOM) studies
Este repositório contém exemplos práticos de código e também anotações sobre meus estudos de DOM.

A DOM é uma estrutura arbórea gerada a partir do HTML para que linguagens de script — como o JavaScript — possa interpretá-lo e fazer modificações nele a partir dela. Essa abstração é necessária porque, a princípio, o JS não entende HTML, mas entende objetos. Transformando o HTML em uma árvore com forma de objetos faz com que o JS acesse seus nós da mesma forma como acessa seus objetos nativos.

![Lightbox](https://media.geeksforgeeks.org/wp-content/uploads/DOM.png)
## Métodos
### getElements
O objeto `document`, portanto, possui métodos relacionados a seus filhos, netos e assim por diante. Por exemplo, para encontrar elementos pertencentes a ids ou classes específicas, basta usar:

```javascript
document.getElementById('algumId') // para retornar um elemento com o id passado

document.getElementsByName('algumNome') // para retornar um elemento com a propriedade "name" correspondente

document.getElementsByTagName('nomeDaTag') // retorna uma lista (que não é um array) de todas as tags correspondentes

document.getElementsByClassName('nomeDaClasse') // retorna uma lista (que não é um array) de todos os elementos pertencentes à classe correspondente

```

### querySelector()
Existe também um multiuso, o `querySelector()`. Ele é usado para retornar seletores CSS (ids e classes) e também tags HTML
```javascript

document.querySelector('.nomeDaClasse')

document.querySelector('#nome-do-id')

document.querySelector('div')


```

Para retornar uma lista com todos os elementos do documento — e não apenas o primeiro —, utilize o `document.querySelectorAll()`.

Ou seja, se, por exemplo, você quiser saber quantos inputs o seu documento possui, é só conferir usando `document.querySelectorAll('input')`.

Uma vantagem do `querySelectorAll()` é que ele devolve uma coleção que possui o método `.forEach()`, diferentemente dos métodos que devolvem coleções, mencionados anteriomente.

## Modificando elementos
```javascript
const elem = document.querySelector('.className') // pegando uma classe cujo filho seja um texto/string

elem.textContent // retorna o texto do elemento
elem.innerText = "Novo texto dentro de elem" // atribui uma nova string ao elem

// Essa mesma sintaxe pode ser aplicada para várias outras operações:

elem.innerHTML = "<h1>Novo texto grandão!!!</h1>"
```

Podemos fazer o mesmo para modificar estilos:
```javascript

const elem = document.querySelector('.className')

const whiteElem = elem.style.backgroundColor = "whitesmoke" // Importante: no DOM, o método background-color precisa estar em camelCase, jamais em kebab-case.

```

## Navegando pelos elementos

Quando você pede o `.children` de um elemento, ele retorna uma *HTMLCollection* com os elementos imediatamente abaixo na árvore. Isso te dá a possibilidade de aplicar alterações em elementos a partir de seus pais.

```html
<body>
  <div class="parent">
    <div>
      <p>Hello World!</p>
    </div>
    <div>
      <p>Another world!</p>
    </div>
  </div>

  <script>
    const father = document.querySelector('.parent')
    const child = father.children[0]
    child.style.border = "solid purple 1px"
    child.style.padding = "1rem"
    child.innerHTML += "<p> I am a child generated by JS</p>"
  </script>
</body>


```

Também podemos brincar com pais e filhos:

```html

<body>
  <div class="parent">
    <div>
      <h1>Hello World!</h1>
    </div>
    <div class="secondChild">
      <h2>Another world!</h2>
    </div>
  </div>

  <script>
    const father = document.querySelector('.parent')
    const child = father.children[0]
    child.style.border = "solid purple 3px"
    child.style.padding = "1rem"
    child.innerHTML += "<h2> I am a child generated by JS</h2>"
    child.style.marginBottom = "1rem"

    const secondChild = document.querySelectorAll('h2')[1]
    const secondChildParentNode = secondChild.parentNode
    secondChildParentNode.style.border = "3px solid green"
  </script>
</body>



```

![parent-node](https://github.com/divertimentos/JS-DOM-Studies/blob/main/media/parent-node.png)

Com irmãos também, através do `.nextSibling`. Essa propriedade é read-only e meio esquisita. Não consegui usá-la para nada. Ela considera espaços vazios como irmãos, então em meus testes ela por veze retornada "\\n " como resultado. :shrug:

## Criando elementos

```html
<body>
  <div>
    <input id="input" name="input" placeholder="Nomeie o elemento">
    <button onclick=handleClick() name="button" value="GO!">GO</button>
  </div>
  <div id="lista">
    <p>Lista:</p>
  </div>
</body>

```

```javascript
 function handleClick() {
  
  // pega o valor presente no input
  let inputValue = document.getElementById("input").value 

  // cria um elemento li
  const li = document.createElement("li") 

  // cria um texto como valor do input
  const liText = document.createTextNode(inputValue) 
  
  // adiciona esse text dentro do li criado
  li.appendChild(liText) 

  // adiciona o elemento criado como filho de "lista"
  document.getElementById("lista").appendChild(li) 

  // limpa o input após o clique
  document.getElementById("input").value = '' 
 }

```

## Retornando atributos
Simplesmente retorna propriedades de elementos. Por exemplo:

```html
<body>
  <div>
    <input id="input" name="input" placeholder="Eu sou o atributo!">
    <button onclick=handleClick() name="button" value="GO!">GO</button>
  </div>
</body>
```

```javascript
  function handleClick() {
    const input = document.querySelector("input"
    console.log(input.getAttribute("placeholder"))

   // essa função deve devoler:
   // "Eu sou o atributo!"
 }


```