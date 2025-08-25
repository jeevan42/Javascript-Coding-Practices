// Warn before unload
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";
});