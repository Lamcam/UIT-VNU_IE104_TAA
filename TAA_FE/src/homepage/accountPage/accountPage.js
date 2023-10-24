const inputArr = [
    "add-password",
    "add-name",
    "add-phonenumber",
    "add-email",
  ];

  setEveryInputReadOnly();

  function setEveryInputReadOnly() {
    inputArr.forEach(function (index) {
      $("." + index).prop("readonly", true);
    });
  }

  function activeInput() {
    let targetIndex = $(".input-icon").index(this);
    $("." + inputArr[targetIndex]).prop("readonly", false);
  

  $(".input-icon").on("click", activeInput);
  $(".header__btn--login").on("click", setEveryInputReadOnly);


  function addActiveClass(element, activeClassName) {
      $(element).siblings().removeClass(activeClassName);
      $(element).addClass(activeClassName);
  }

  $(".profile-li").on("click", function() {
     addActiveClass(this, "active-li");
     
  });
}