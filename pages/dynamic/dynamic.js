let newPara = document.createElement("p");
let parent = document.getElementById("parent");
parent.appendChild(newPara);

let contentParent = document.getElementById("content");
let anotherPara = document.createElement("p");
anotherPara.textContent =
  "Eu sou um parágrafo cujo texto foi adicionado via JS!";
contentParent.append(anotherPara);

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
