const sizeBoxes = document.querySelectorAll(".size-box");
const checkbox = document.querySelector(".toggle");
const totalCost = document.getElementById("total");

let sizeBtnId = 4050;

sizeBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    removeClickedClass();
    box.classList.add("clicked");
    sizeBtnId = +box.id;
    changeTotalCost(sizeBtnId);
  });
});

checkbox.addEventListener("change", () => {
  checkbox.classList.toggle("colored");
  changeTotalCost(sizeBtnId);
});

function changeTotalCost() {
  if (sizeBtnId === 5070 && !checkbox.classList.contains("colored"))
    totalCost.textContent = 230 + " $ (CAD)";
  else if (sizeBtnId === 5070 && checkbox.classList.contains("colored"))
    totalCost.textContent = 270 + " $ (CAD)";
  else if (sizeBtnId === 4050 && !checkbox.classList.contains("colored"))
    totalCost.textContent = 150 + " $ (CAD)";
  else if (sizeBtnId === 4050 && checkbox.classList.contains("colored"))
    totalCost.textContent = 180 + " $ (CAD)";
  else if (sizeBtnId === 3040 && !checkbox.classList.contains("colored"))
    totalCost.textContent = 100 + " $ (CAD)";
  else if (sizeBtnId === 3040 && checkbox.classList.contains("colored"))
    totalCost.textContent = 130 + " $ (CAD)";
}

function removeClickedClass() {
  sizeBoxes.forEach((box) => {
    box.classList.remove("clicked");
  });
}
