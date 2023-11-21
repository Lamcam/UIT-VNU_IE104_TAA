window.addEventListener("load", () => {
  const openModalBtns = document.querySelectorAll("[data-modal-target]");
  // console.log("modal btns: ", openModalBtns);

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.dataset.modalTarget;
      // console.log(modalId);
      const modal = document.querySelector(modalId);
      modal && modal.classList.add("active");
    });
  });
});
