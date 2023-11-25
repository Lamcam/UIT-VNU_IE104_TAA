/**
 * Opens a modal with the specified selector.
 * @param {string} sltById - The selector of the modal to be opened.
 */
const openModal = (sltById) => {
  const modalSelector = document.querySelector(sltById);
  if (!modalSelector) {
    console.error('Don\'t have this modal', sltById);
  } else {
    modalSelector.classList.add("active");
  }
}

/**
 * Closes all open modals.
 */
const closeModal = () => {
  const modals = document.querySelectorAll(".modal");
  modals && modals.forEach(modal => modal.classList.remove("active"))
}

/**
 * Closes all open modals and opens the modal with the specified selector.
 * @param {string} sltById - The selector of the modal to be opened.
 */
const nextModal = (sltById) => {
  closeModal();
  openModal(sltById);
}

/**
 * Object containing methods for controlling modals.
 */
const modalCtl = {
  openModal,
  closeModal,
  nextModal
}

export default modalCtl;
