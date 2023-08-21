let paragraph = document.querySelector("p");
let heading = document.getElementsByTagName("h2")[1];

let ancestor = paragraph.parentNode;
ancestor.style.backgroundColor = "#BADFD1";

let descendant = heading;
descendant.parentNode.style.backgroundColor = "#F2B4B8";

let joke = document.querySelector(".joke");
let sibling = joke.nextSibling.nextSibling;
sibling.style.border = "5px solid cornflowerblue";

let bodyChildren = document.body.children;

for (let i = 0; i < bodyChildren.length; i++) {
  let child = bodyChildren[i];
  console.log("child:");
  console.log(child);
  // child.style.color = "#4a4e69";
  child.style.backgroundColor = "#9CC0EB";
}

let h1 = document.getElementsByTagName("h1");
// console.log(h1[0].firstChild); // returns the text inside <h1 />
// console.log(h1[0].firstElementChild); // returns null because you anted a child that is an element;
