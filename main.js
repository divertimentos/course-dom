function newWindow() {
  let url = "https://dictionary.com/browse/shivoo?s=t";
  window.open(url, "", "width=500, height=800");
  // close the new window after 5 seconds:
  // WARNING: It doesn't work in Firefox

  setTimeout(() => {
    window.close(this);
  }, 5000);
}
