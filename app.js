const buttons = document.querySelectorAll("button");
const outputBox = document.querySelector("#output");
outputBox.readOnly = true;
for (let i of buttons) {
  i.addEventListener("click", () => {
    if (i.textContent === "XX") {
      outputBox.textContent = outputBox.textContent.slice(
        0,
        outputBox.textContent.length - 1
      );
    } else if (i.textContent === "↵") {
      outputBox.innerHTML += "\n";
    } else {
      outputBox.textContent += i.textContent;
    }
  });
}
