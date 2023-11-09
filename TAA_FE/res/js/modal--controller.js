setTimeout(() => {
  const openModalBtns = document.querySelectorAll("[data-modal-target]");
  openModalBtns?.forEach(btn => {
    btn?.addEventListener("click", (event) => {
      const modalId = btn.dataset.modalTarget;
      const modal = document.querySelector(modalId);
      modal?.classList.add("active");
    })
  })
}, 5000)
