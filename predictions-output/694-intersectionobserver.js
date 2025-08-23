// IntersectionObserver Example
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Element in view:", entry.target);
    }
  });
});

const el = document.createElement("div");
document.body.appendChild(el);
observer.observe(el);
