// Question: Why event delegation?
// (Pseudo example)
document.body.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked:", e.target.textContent);
  }
});

// Answer: Event delegation uses bubbling to handle events efficiently. 
// One listener on parent can manage multiple children.