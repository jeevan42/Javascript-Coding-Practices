// ResizeObserver Example
const div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
document.body.appendChild(div);

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    console.log("Resized:", entry.contentRect);
  }
});
resizeObserver.observe(div);
