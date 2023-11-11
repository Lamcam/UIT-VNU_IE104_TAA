// Routing
// profile_favorProduct
// profile_order
// profile_info
const accountPageContentClassName = ".accountPage_content"

$(".nav-tab__item").on("click", function () {

  $(accountPageContentClassName).empty();
  switch ($(this).index()) {
    case 0:
      $(accountPageContentClassName).load("./profileInfoT.html")
      break;

    case 1:
      $(accountPageContentClassName).load("./order.html")
      break;
    
    case 2:
      $(accountPageContentClassName).load("./favorProductT.html")
  
    default:
      break;
  }
});
