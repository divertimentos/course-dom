let div = document.getElementsByTagName("div")[0];

let ancestor = div.parentNode;
ancestor.style.backgroundColor = "cornflowerblue";

let joke = document.querySelector(".joke");
let sibling = joke.nextSibling.nextSibling;
sibling.style.border = "5px solid firebrick";
console.log(sibling);
