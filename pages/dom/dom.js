// getElementById
function changeBackgroundById(idName, color) {
  const elem = document.getElementById(idName);
  elem.style.color = color;
  elem.style.textTransform = "uppercase";
  elem.style.fontStyle = "italic";
}

// getElementsByClassName
function changeBackgroundByClass(className, color) {
  const classElements = document.getElementsByClassName(className);
  for (let i = 0; i < classElements.length; i++) {
    classElements[i].style.backgroundColor = color;
  }
}

// querySelector
function changeBackgroundByQuerySelector(targetName, color) {
  const queryElement = document.querySelector(targetName);
  queryElement.style.backgroundColor = color;
  queryElement.style.color = "black";
}

// querySelectorAll
function changeBackgroundByQuerySelectorAll(targetName, color) {
  const queryElement = document.querySelectorAll(targetName);
  queryElement.forEach((elem) => {
    elem.style.backgroundColor = color;
  });
}

changeBackgroundById("header", "#9CC0EB");
changeBackgroundByClass("header", "#EEB3C6");
changeBackgroundByQuerySelector("#query", "#C9CEDE");
changeBackgroundByQuerySelectorAll(".query-all", "#ACCCF1");
