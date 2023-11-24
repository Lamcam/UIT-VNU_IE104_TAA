// $(() => {
//   $("#header").load("/TAA_FE/views/partials/header--unauth.html");
//   $("#modal__login").load("/TAA_FE/views/partials/modal--login.html");
//   $("#modal__register").load("/TAA_FE/views/partials/modal--register.html");
//   $("#modal__forgot-method").load("/TAA_FE/views/partials/modal--forgot-method.html");
//   $("#modal__forgot-by-phone").load("/TAA_FE/views/partials/modal--forgot-by-phone.html");
//   $("#footer").load("/TAA_FE/views/partials/footer.html");

//   fetch("/TAA_FE/views/components/product__item.html")
//     .then((res) => res.text())
//     .then((res) => {
//       for (let i = 0; i < 9; ++i) $(".product__wrapper").append(res);
//     });
// });