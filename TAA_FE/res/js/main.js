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

function openModal(slt) {
  console.log(slt);
  const modal = document.querySelector(slt);
  console.log(modal);
  modal.classList.add("active");
}
