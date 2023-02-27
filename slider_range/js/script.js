const rangeSlider = document.querySelector(".range");
const valueDisplay = document.querySelector("#rangeValue");
function updateValue(e) {
  valueDisplay.innerText = e.target.value;
}
rangeSlider.addEventListener("change", updateValue);
rangeSlider.addEventListener("mousemove", updateValue);
