$(function () {
  $("#modal__addLocation").load("./add-location.html");
  $("#modal__addBank").load("./add-bank.html");
  $("#modal__delBank").load("./del-bank.html");
  $("#modal__delLocation").load("./del-location.html");
  $("#modal__editLocation").load("./edit-location.html");
  $("#modal__review").load("./review-popup.html");
  $("#header").load("/TAA_FE/src/partials/header--auth.html");
  $("#breadcrumbs").load("/TAA_FE/src/partials/breadcrumbs.html");
  $("#footer").load("/TAA_FE/src/partials/footer.html");
  $("#modal__noti").load("./success-popup.html");
  $("#modal__change-password").load("./change-password.html");
});

// Hàm để thêm class "active"
function addActiveClass(element, activeClassName) {
  var siblings = element.parentNode.children;
  for (var i = 0; i < siblings.length; i++) {
    siblings[i].classList.remove(activeClassName);
  }
  element.classList.add(activeClassName);
}

// Lắng nghe sự kiện click cho mỗi phần tử có class "nav-tab__item"
var navTabItems = document.querySelectorAll(".nav-tab__item");
navTabItems.forEach(function (item) {
  item.addEventListener("click", function () {
    addActiveClass(item, "active");
  });
});

function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.add("hidden");
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.remove("hidden");
  }
}

//Profile
const inputArr = ["name", "phone", "email"];

function setInputReadOnly() {
  inputArr.forEach((item) => {
    document.getElementById(item).readOnly = true;
  });
}

setInputReadOnly();

function activeInput() {
  const targetIndex = Array.from(
    document.querySelectorAll(".input__wrapper .icon")
  ).indexOf(this);
  document.getElementById(inputArr[targetIndex]).readOnly = false;
}

document.querySelectorAll(".input__wrapper .icon").forEach((icon) => {
  icon.addEventListener("click", activeInput);
});

document
  .querySelector(".profile__btn")
  .addEventListener("click", setInputReadOnly);

// Bank

const addBank = () => {
  let bankItem = `
    <div class="bank-item mt-12">
									<div class="bank-item__wrapper body-medium">
										<div class="row">
											<span>STK: </span><span>*********1230</span>
										</div>
										<div class="row">
											<span class="mt-12 row__name-bank">Ngân hàng ACB</span>
										</div>
										<button class="bank-item__btn--del btn-icon" onclick="modalCtl.openModal('#modal--del-bank')">
											<span class=" status-layer icon material-symbols-outlined">
												delete</span>
										</button>
									</div>
			</div>`;
  $(".bank-list").prepend(bankItem);
};

const delBank = () => {
  $(".bank-list")[0].children[0].remove();
};

// location
const addLocation = () => {
  let locationItem = `
  <div class="location-item mt-12">
									<div class="location-item__wrapper body-medium">
										<div class="row">
											<span>Người đẹp bị câm</span>
										</div>
										<div class="row mt-16">
											<span>SDT: </span><span>*******629</span>
										</div>
										<div class="row mt-16">
											<span>Xã A, huyện B, tỉnh C</span>
										</div>
										<div class="location-btns__wrapper">
											<button class="location-item__btn--del btn-icon" onclick="modalCtl.openModal('#modal--del-location')">
												<span class="status-layer icon material-symbols-outlined">
													delete</span>
											</button>
											<button class="location-item__btn--default btn--outlined" onclick="modalCtl.openModal('#modal--set-default-location')">
												<span class="status-layer unfilled-default location-btn">Thiết
													lập mặc định</span>
											</button>
											<button onclick="modalCtl.openModal('#modal--edit-location')" class="location-item__btn--edit btn--filled btn-icon-label">
												<span class="status-layer full-edit icon material-symbols-outlined">
													edit</span>
												<span class="status-layer full-edit label">Sửa</span>
											</button>
										</div>
									</div>
	</div>`;
  $(".location-list").prepend(locationItem);
};

const delLocation = () => {
  $(".location-list")[0].children[0].remove();
};

// When click on Mua lai san pham
// const reBuyBtns = document.querySelectorAll(".rebuy-btn");

// reBuyBtns.forEach((click) => {
//   click.addEventListener("click", () => {
//     window.location.href = "/TAA_FE/src/homepage/cartPage/index.html";
//   });

//   function slideImage() {
//     const displayWidth = document.querySelector(
//       ".img-showcase img:first-child"
//     ).clientWidth;

//     document.querySelector(".img-showcase").style.transform = `translateX(${
//       -(imgId - 1) * displayWidth
//     }px)`;
//   }

//   window.addEventListener("resize", slideImage);

//   //
// });
//review

// const delReview = () => {
//   $(".review-list")[0].children[0].remove();
// };

// function popUpSuccess() {
//   document.addEventListener("DOMContentLoaded", function () {
//     $("done-btn").on("click", function () {
//       $("");
//     });
//   });
// }

var editIcons = document.querySelectorAll(".editIcon");

// Lặp qua từng icon và thêm lắng nghe sự kiện click
editIcons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    changeBorderColor(icon); // Truyền tham số là icon được click
  });
});

function changeBorderColor(clickedIcon) {
  // Lặp qua tất cả các input và thiết lập giá trị mặc định
  document.querySelectorAll(".input__wrapper input").forEach(function (input) {
    input.style.borderColor = ""; // Giá trị mặc định của border
    input.style.borderWidth = ""; // Giá trị mặc định của border-width
  });

  // Lấy ID của input tương ứng với icon được click
  var inputId = clickedIcon.previousElementSibling.id;
  var inputElement = document.getElementById(inputId);

  // Đổi màu border khi nhấn vào icon
  inputElement.style.borderColor = "initial"; // Màu border mới
  inputElement.style.borderWidth = "2px";

  // Tập trung vào input
  inputElement.focus();
}

//

//Doi trang thai debit:
const defaultBtnDebits = document.querySelectorAll(".location-btn");

defaultBtnDebits.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Chuyển tất cả các nút về trạng thái "Thiết lập mặc định"
    defaultBtnDebits.forEach((otherBtn) => {
      otherBtn.classList.remove("filled-default");
      otherBtn.classList.add("unfilled-default");
      otherBtn.textContent = "Thiết lập mặc định";
    });

    // Chuyển nút được nhấn thành trạng thái "Mặc định"
    btn.classList.remove("unfilled-default");
    btn.classList.add("filled-default");
    btn.textContent = "Mặc định";
  });
});
