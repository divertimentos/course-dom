let newPara = document.createElement("p");
let parent = document.getElementById("parent");
parent.appendChild(newPara);

// ESCOLHENDO ONDE INSERIR ELEMENTOS-FILHOS
let contentParent = document.getElementById("content");
let anotherPara = document.createElement("p");
anotherPara.textContent =
  "Eu sou um parágrafo cujo texto foi adicionado via JS!";
contentParent.append(anotherPara);

// node.insertBefore() e node.removeChild()
let olFather = document.getElementById("ol-father");
let afterBefore = document.getElementById("after-before");

let liElement = document.createElement("li");

function insertBeforeFunc() {
  liElement.textContent = "Eu sou o li adicionado com o insertBefore()";
  olFather.insertBefore(liElement, afterBefore);

  liElement.style.fontWeight = "bold";
  liElement.style.color = "#9CC0EB";
}

function removeBeforeFunc() {
  if (olFather.children.length === 3) olFather.removeChild(liElement);
}

// remove()
function removeFunc() {
  let fatherRemoval = document.getElementById("removal-ol");
  console.log(fatherRemoval.children.length);
  if (fatherRemoval.children.length >= 1)
    fatherRemoval.children[fatherRemoval.children.length - 1].remove();
}

function restore() {
  let parent = document.getElementById("removal-ol");

  for (let i = 0; i < 6; i++) {
    if (parent.children.length < 6) {
      let element = document.createElement("li");
      element.textContent = `Item a ser removido ${parent.children.length + 1}`;
      parent.appendChild(element);
    }
  }
}

// cloneNode()
function clone() {
  let cloneParent = document.querySelector("#clone-parent");
  let murilo = document.querySelector("#murilo");
  let clonedMurilo = murilo.cloneNode(true);

  cloneParent.appendChild(clonedMurilo);
}

let intervalId = 0;

function interval(time = 500) {
  intervalId = setInterval(clone, time);
}

function stopClone() {
  let cloneParent = document.querySelector("#clone-parent");
  let stop = document.createElement("li");
  stop.textContent = "Parei de clonar!";

  clearInterval(intervalId);
  cloneParent.appendChild(stop);
}

// Exercise (Animals)
let animalsArray = [
  "Dog",
  "Cat",
  "Warthog",
  "Eagle",
  "Elephant",
  "Giraffe",
  "Lion",
];

function addAnimals() {
  let animalsParent = document.querySelector("#animals-parent");

  for (let i = 0; i < animalsArray.length; i++) {
    let item = document.createElement("li");
    item.textContent = `${animalsArray[i]}`;
    animalsParent.appendChild(item);
  }
}
