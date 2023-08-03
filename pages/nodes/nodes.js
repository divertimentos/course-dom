function hideNodes() {
  let nodeToHide = document.querySelector(".hidable");
  if (nodeToHide.style.display === "none") {
    nodeToHide.style.display = "block";
  } else {
    nodeToHide.style.display = "none";
  }
}
