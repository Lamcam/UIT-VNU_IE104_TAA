window.addEventListener("load", () => {
  const openModalBtns = document.querySelectorAll("[data-modal-target]");

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const modalId = btn.dataset.modalTarget;
      console.log(modalId);
      const modal = document.querySelector(modalId);
      modal && modal.classList.add("active");
    });
  });
});
