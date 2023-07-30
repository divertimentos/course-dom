function newWindow() {
  let url = "https://dictionary.com/browse/shivoo?s=t";
  window.open(url, "", "width=500, height=800");
  // close the new window after 5 seconds:
  // WARNING: It doesn't work in Firefox

  setTimeout(() => {
    window.close(this);
  }, 5000);
}

// getElementById
function changeBackgroundById(idName, color) {
  const header = document.getElementById(idName);
  header.style.backgroundColor = color;
}

changeBackgroundById("header", "cornflowerblue");

function changeBackgroundByClass(className, color) {
  const header = document.getElementsByClassName(className);
  console.log(header);
}

changeBackgroundByClass("header", "orange");
