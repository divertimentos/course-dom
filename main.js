// setTimeout()
function newWindow() {
  let url = "https://dictionary.com/browse/shivoo?s=t";
  window.open(url, "", "width=500, height=800");
  // NOTE: It doesn't work in Firefox

  setTimeout(() => {
    window.close(this);
    // close the new window after 5 seconds:
  }, 5000);
}

// getElementById
function changeBackgroundById(idName, color) {
  const header = document.getElementById(idName);
  header.style.backgroundColor = color;
}

// getElementsByClassName
function changeBackgroundByClass(className, color) {
  const classElements = document.getElementsByClassName(className);
  for (let i = 0; i < classElements.length; i++) {
    classElements[i].style.backgroundColor = color;
  }
}

function changeBackgroundByTagName(tagName, color) {
  const tagElements = document.getElementsByTagName("p");
  for (let i = 0; i < tagElements.length; i++) {
    tagElements[i].style.backgroundColor = color;
  }
}

changeBackgroundById("header", "#EAE4E9");
changeBackgroundByClass("header", "#BEE1E6");
changeBackgroundByTagName("p", "#FAD2E1");
