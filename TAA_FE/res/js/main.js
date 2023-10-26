function closeModal() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => modal.classList.remove("active"))
}