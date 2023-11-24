import modalCtl from './modal--controller.js';
import cookieCtl from './cookie.js';

window.modalCtl = modalCtl;
// window.modalCtl = cookieCtl;


const accountPageContentClassName = "#section2";
// var flag = 0;
function closeModal() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => modal.classList.remove("active"));
}



$(document).ready(function(){

  $(document).on("click",".profile3",function(event){
    event.preventDefault();

    localStorage.setItem('flag',1)
    window.location.replace("/TAA_FE/src/homepage/accountPage/profileInfo.html")
    

  })

  $(document).on("click",".order3",function(event){
    event.preventDefault();

    localStorage.setItem('flag',2)
    window.location.replace("/TAA_FE/src/homepage/accountPage/profileInfo.html")
    

  })

  $(document).on("click",".product3",function(event){
    event.preventDefault();

    localStorage.setItem('flag',3)
    window.location.replace("/TAA_FE/src/homepage/accountPage/profileInfo.html")
    

  })

})







