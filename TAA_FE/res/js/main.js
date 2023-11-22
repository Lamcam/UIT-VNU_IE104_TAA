function closeModal() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => modal.classList.remove("active"));
}

/* ontopbtn */
function scrollOnTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const openModal = (sltById) => {
  const modalSelector = document.querySelector(sltById);
  modalSelector.classList.add("active");
}
