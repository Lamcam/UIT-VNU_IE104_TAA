const openModal = (sltById) => {
  const modalSelector = document.querySelector(sltById);
  if (!modalSelector) {
    console.error('Don\'t have this modal', sltById);
  } else {
    modalSelector.classList.add("active");
  }
}

const closeModal = () => {
  const modals = document.querySelectorAll(".modal");
  modals && modals.forEach(modal => modal.classList.remove("active"))
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
