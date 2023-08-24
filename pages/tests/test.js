const painter = (className, colorName) => {
  document.getElementsByClassName(className)[0].style.backgroundColor =
    colorName;
  document.getElementsByClassName(className)[0].style.color = "whitesmoke";
};

function green() {
  painter("green", "#BADFD1");
}

function blue() {
  painter("blue", "#ACCCF1");
}

function red() {
  painter("red", "#F2B4B8");
}

function undo() {
  const elems = document.getElementsByClassName("undo");
  for (let i = 0; i < elems.length; i++) {
    elems[i].style.backgroundColor = "#fbe9ec";
    elems[i].style.color = "#4a4e69";
  }
}
