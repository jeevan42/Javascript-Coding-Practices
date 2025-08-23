// MutationObserver Example
const target = document.body;
const observer = new MutationObserver((mutations) => {
  mutations.forEach(m => console.log("Mutation:", m));
});

observer.observe(target, { childList: true, subtree: true });
document.body.appendChild(document.createElement("p"));
