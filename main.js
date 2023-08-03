// Test
function isWorking() {
  console.log("Funcionanderson!!!");
}

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

// getElementsByTagName
function changeBackgroundByTagName(tagName, color) {
  const tagElements = document.getElementsByTagName(tagName);
  for (let i = 0; i < tagElements.length; i++) {
    tagElements[i].style.backgroundColor = color;
  }
}

changeBackgroundByTagName("p", "#BADFD1");
