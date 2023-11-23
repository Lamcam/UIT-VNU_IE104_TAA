$(() => {
  $("#header").load("/TAA_FE/src/partials/header--unauth.html");
  $("#modal__login").load("/TAA_FE/src/partials/modal--login.html");
  $("#modal__register").load("/TAA_FE/src/partials/modal--register.html");
  $("#modal__forgot-method").load("/TAA_FE/src/partials/modal--forgot-method.html");
  $("#modal__forgot-by-phone").load("/TAA_FE/src/partials/modal--forgot-by-phone.html");

  $("#footer").load("/TAA_FE/src/partials/footer.html");

  fetch("/TAA_FE/src/components/product__item.html")
    .then((res) => res.text())
    .then((res) => {
      for (let i = 0; i < 9; ++i) $(".product__wrapper").append(res);
    });
});