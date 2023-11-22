const openModal = (sltById) => {
  const modalSelector = document.querySelector(sltById);
  modalSelector.classList.add("active");
}

const closeModal = () => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => modal.classList.remove("active"))
}

const nextModal = (sltById) => {
  closeModal();
  openModal(sltById);
}

const modalCtl = {
  openModal,
  closeModal,
  nextModal
}

export default modalCtl;
