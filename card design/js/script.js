const toogleBtn = document.querySelector(".wrapper > button.toogle");
const toogleBtnIcon = document.querySelector(".wrapper > button.toogle > i");
const Wrapper = document.querySelector(".wrapper");
toogleBtn.addEventListener("click", (e) => {
  Wrapper.classList.toggle("active");
  toogleBtnIcon.classList.toggle("btnrotate");
});
