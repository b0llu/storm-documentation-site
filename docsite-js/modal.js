const modal = document.querySelector("#example-modal");
const modalContainer = document.querySelector("#example-modal-container");
const modalCloseBtn = document.querySelector("#example-modal-close");
const modalBackBtn = document.querySelector("#example-modal-back");

modal.addEventListener("click", () => {
  modalContainer.classList.add("active");
  document.body.style.overflow = "hidden";
});

modalCloseBtn.addEventListener("click", () => {
  modalContainer.classList.remove("active");
  document.body.style.overflow = "visible";
});

modalBackBtn.addEventListener("click", () => {
  modalContainer.classList.remove("active");
  document.body.style.overflow = "visible";
});