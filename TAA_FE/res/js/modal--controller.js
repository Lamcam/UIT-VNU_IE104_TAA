$(window).on('load', () => {
  const openModalBtns = document.querySelectorAll("[data-modal-target]");
  console.log(openModalBtns);
  openModalBtns?.forEach((btn) => {
    btn?.addEventListener("click", (event) => {
      const modalId = btn.dataset.modalTarget;
      console.log(modalId);
      const modal = document.querySelector(modalId);
      modal?.classList.add("active");
    });
  });
})