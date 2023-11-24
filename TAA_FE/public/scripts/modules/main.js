import modalCtl from './modal--controller.js';
// import cookieCtl from './cookie.js';

window.modalCtl = modalCtl;
// window.modalCtl = cookieCtl;


const accountPageContentClassName = "#section2";
// var flag = 0;
function closeModal() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => modal.classList.remove("active"));
}