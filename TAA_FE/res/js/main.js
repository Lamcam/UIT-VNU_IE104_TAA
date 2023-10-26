const openModalBtns = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modal");

openModalBtns.forEach(btn => {
  btn.addEventListener("click", (event) => {
    const modalId = btn.dataset.modalTarget;
    const modal = document.querySelector(modalId);
    if (modal !== null)
      modal.classList.add("active");
    else
      console.log("modal not found");
  })
})

function closeModal() {
  modals.forEach(modal => {
    modal.classList.remove("active");
  })
}
