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
