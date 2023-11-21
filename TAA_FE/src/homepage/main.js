$(document).ready(function () {
  $("#header").load("/TAA_FE/src/partials/header--unauth.html");
  $("#footer").load("/TAA_FE/src/partials/footer.html");

  fetch("/TAA_FE/src/components/product__item.html")
    .then((res) => res.text())
    .then((res) => {
      for (let i = 0; i < 9; ++i) $(".product__wrapper").append(res);
    });
});