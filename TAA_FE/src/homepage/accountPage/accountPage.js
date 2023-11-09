// Routing
// profile_favorProduct
// profile_order
// profile_info
$(".profile-li").on("click", function () {
  addActiveClass(this, "active-li");
  $("section").empty();
  switch ($(this).index()) {
    case 0:
      // $("section").load("./profile.html");
      $("#interact").load("./interact.html");

      $.get("profile.html", function (data) {
        $("section").append(data);
      });
      break;

    case 1:
      $("section").load("./order.html");
      break;

    case 2:
      $("section").load("./favorProductT.html");

    default:
      break;
  }
});

// $(document).ready(function () {
//   // Fetch content from another file and append it to the target element
//   $.get("content.html", function (data) {
//     $("#targetElement").append(data);
//   });
// });
