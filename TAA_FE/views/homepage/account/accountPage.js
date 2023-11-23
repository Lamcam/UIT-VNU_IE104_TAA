// // Routing
// // profile_favorProduct
// // profile_order
// // profile_info
// $(".profile-li").on("click", function () {
//   addActiveClass(this, "active-li");
//   $("section").empty();
//   switch ($(this).index()) {
//     case 0:
//       $("section").load("./index.html")
//       break;

//     case 1:
//       $("section").load("./order.html")
//       break;
    
//     case 2:
//       $("section").load("./favorProductT.html")
  
//     default:
//       break;
//   }
// });
// // Routing
// // profile_favorProduct
// // profile_order
// // profile_info
// document.addEventListener("DOMContentLoaded", function () {

//   const accountPageContentClassName = "#section2";

//   $(".nav-tab__item").on("click", function () {
//     switch ($(this).index()) {
//       case 0:
//         $('#section1').removeClass('hidden');
//         break;

//       case 1:
//         $(accountPageContentClassName).load("./orderT.html");
//         $('#section1').addClass('hidden');
//         break;

//       case 2:
//         $(accountPageContentClassName).load("./favourProductT.html");
//         $('#section1').addClass('hidden');
//       default:
//         break;
//     }
//   });
// });
