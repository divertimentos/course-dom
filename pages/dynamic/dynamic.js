let newPara = document.createElement("p");
let parent = document.getElementById("parent");
parent.appendChild(newPara);

let contentParent = document.getElementById("content");
let anotherPara = document.createElement("p");
anotherPara.textContent =
  "Eu sou um parágrafo cujo texto foi adicionado via JS!";
contentParent.append(anotherPara);
