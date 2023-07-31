const painter = (className, colorName) => {
  document.getElementsByClassName(className)[0].style.backgroundColor =
    colorName;
};

function green() {
  painter("green", "green");
}

function blue() {
  painter("blue", "blue");
}

function red() {
  painter("red", "red");
}

function undo() {
  const elems = document.getElementsByClassName("undo");
  for (let i = 0; i < elems.length; i++) {
    elems[i].style.backgroundColor = "black";
  }
}
