function closeModal() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => modal.classList.remove("active"))
}

const openModal = (sltById) => {
  const modalSelector = document.querySelector(sltById);
  modalSelector.classList.add("active");
}