/**
 * Opens a modal with the specified selector.
 * @param {string} sltById - The selector of the modal to be opened.
 */
const openModal = (sltById) => {
  const modalSelector = document.querySelector(sltById);
  if (!modalSelector) {
    console.error('Don\'t have this modal', sltById);
    return;
  }

  document.querySelector('body').classList.add('modal-open');
  modalSelector.classList.add("active");
}
/**
 * Closes all open modals.
 */
const closeModal = () => {
  document.querySelector('body').classList.remove('modal-open');
  
  const modals = document.querySelectorAll(".modal");
  modals?.forEach(modal => modal.classList.remove("active"))
}

/**
 * Closes all open modals and opens the modal with the specified selector.
 * @param {string} sltById - The selector of the modal to be opened.
 */
const nextModal = (sltById) => {
  closeModal();
  openModal(sltById);
}

const closeModalByClickOutside = () => {
  const modals = document.querySelectorAll(".modal");
  modals?.forEach(modal => {
    // console.log('closeModalByClickOutside at: ', modal);
    modal.addEventListener('click', (e) => {
      closeModal();
    });

    const modalContainer = modal.querySelector('.modal__content');
    modalContainer?.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
}

const closeModalAfterTime = (time) => {
  setTimeout(() => {
    closeModal();
  }, time);
}

/**
 * Object containing methods for controlling modals.
 */
const modalCtl = {
  openModal,
  closeModal,
  nextModal,
  closeModalAfterTime,
  init: () => {
    closeModalByClickOutside();
  },
}

export default modalCtl;