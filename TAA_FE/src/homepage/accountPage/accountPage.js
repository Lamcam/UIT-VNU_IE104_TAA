// Routing
// profile_favorProduct
// profile_order
// profile_info
$(".profile-li").on("click", function () {
  addActiveClass(this, "active-li");
  $("section").empty();
  switch ($(this).index()) {
    case 0:
      $("section").load("./index.html")
      break;

    case 1:
      $("section").load("./order.html")
      break;
    
    case 2:
      $("section").load("./favorProductT.html")
  
    default:
      break;
  }
});