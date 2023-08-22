let paragraph = document.querySelector("p");
let heading = document.getElementsByTagName("h2")[1];

let ancestor = paragraph.parentNode;
ancestor.style.backgroundColor = "#BADFD1";

let descendant = heading;
descendant.parentNode.style.backgroundColor = "#F2B4B8";

let joke = document.querySelector(".joke");
let sibling = joke.nextSibling.nextSibling;
sibling.style.border = "5px solid firebrick";

let bodyChildren = document.body.children;

for (let i = 0; i < bodyChildren.length; i++) {
  let child = bodyChildren[i];
  child.style.backgroundColor = "#9CC0EB";
}

let ul = document.getElementsByTagName("ul")[0];
ul.style.paddingLeft = "0";
ul.firstElementChild.style.backgroundColor = "#BADFD1";

let ulChildren = ul.children;
for (let i = 0; i < ulChildren.length; i++) {
  let li = ulChildren[i];
  li.style.border = "3px solid #4a4e69";
  li.style.padding = "5px";
  li.style.marginBottom = "5px";
  li.style.listStyleType = "none";
}

function elementCounter() {
  let newUl = document.querySelector("#item-ul");

  let answerElement = document.querySelector("#answer-element");
  let answerNode = document.querySelector("#answer-node");

  let newUlChildren = newUl.children;
  let newUlChildNodes = newUl.childNodes;

  let newUlChildrenLength = `Children Length: ${newUlChildren.length}`;
  let newUlChildNodesLength = `ChildNodes Length: ${newUlChildNodes.length}`;

  let elementChild = document.createTextNode(newUlChildrenLength);
  let nodeChild = document.createTextNode(newUlChildNodesLength);

  // Return the number of Element nodes within the <ul> tag
  answerElement.appendChild(elementChild);

  // Return the number of nodes (any type) within the <ul> tag
  answerNode.appendChild(nodeChild);
}

let siblingUl = document.getElementById("sibling");
let middle = siblingUl.children[1];
for (let i = 0; i < siblingUl.children.length; i++) {
  let child = siblingUl.children[i];
  child.style.border = "3px solid #4a4e69";
  child.style.marginBottom = "0.5rem";
}

middle.previousElementSibling.style.backgroundColor = "#F2B4B8";
middle.style.backgroundColor = "#ACCCF1";
middle.style.border = " #4a4e69 3px solid";
middle.nextElementSibling.style.backgroundColor = "#BADFD1";
