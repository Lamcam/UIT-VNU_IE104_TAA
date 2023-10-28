setTimeout(() => {
  const openModalBtns = document.querySelectorAll("[data-modal-target]");
  console.log(openModalBtns);
  openModalBtns?.forEach(btn => {
    console.log(btn);
    btn?.addEventListener("click", (event) => {
      const modalId = btn.dataset.modalTarget;
      const modal = document.querySelector(modalId);
      modal?.classList.add("active");
    })
  })
}, 5000);