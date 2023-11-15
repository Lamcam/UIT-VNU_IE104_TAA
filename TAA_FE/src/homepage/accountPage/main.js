// nav-tab
let addActiveClass = (element, activeClassName) => {
  $(element).siblings().removeClass(activeClassName);
  $(element).addClass(activeClassName);
};

$(".nav-tab__item").on("click", function () {
  addActiveClass(this, "active");
});
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.add("hidden");
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.remove("hidden");
  }
}

// profile
const inputArr = ["password", "name", "phone", "email"];
let setInputReadOnly = () => {
  inputArr.forEach((item) => {
    $("#" + item).prop("readonly", true);
  });
};
setInputReadOnly();

function activeInput() {
  let targetIndex = $(".input__wrapper .icon").index(this);
  $("#" + inputArr[targetIndex]).prop("readonly", false);
}

$(".input__wrapper .icon").on("click", activeInput);
$(".profile__btn").on("click", setInputReadOnly);

// // Lấy tất cả các thẻ span có lớp input-icon
// // const editIcons = document.querySelectorAll(".input-icon");
// const editIcons = document.querySelectorAll(".input__wrapper .icon");

// // Lặp qua từng thẻ và thêm sự kiện click
// editIcons.forEach((editIcon) => {
//   editIcon.addEventListener("click", function () {
//     const inputWrapper = editIcon.closest(".input__wrapper");
//     // inputWrapper.style.border = "1px solid saddlebrown";
//   });
// });

// Bank
const addBank = () => {
  let bankItem = `
    <div class="bank-item mt-12">
      <div class="bank-item__wrapper body-medium">
        <div class="row">
          <span>STK: </span><span>*********1230</span><br>
        </div>
        <div class="row">
          <span class="mt-12">Ngân hàng ACB</span>
        </div>
        <button class="bank-item__btn--del btn-icon"
          data-modal-target="#modal--del-bank">
          <div class="status-layer">
            <span class="icon material-symbols-outlined">
              delete</span>
          </div>
        </button>
      </div>
    </div>`;
  $(".bank-list").prepend(bankItem);
};

$(".bank-list__btn--add").on("click", addBank);

const delBank = () => {
  // let bankList = $(".bank-list")[0];
  // let bankItem = bankList.children[0];
  // // console.log(bankItem);
  // bankItem.remove();
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
        <button class="location-item__btn--del btn-icon"
          data-modal-target="#modal--del-location">
          <div class="status-layer">
            <span class="icon material-symbols-outlined">
              delete</span>
          </div>
        </button>
        <button class="location-item__btn--default btn--outlined"
          data-modal-target="#modal--set-default-location">
          <div class="status-layer">
            <span>Thiết lập mặc định</span>
          </div>
        </button>
        <button data-modal-target="#modal--edit-location"
          class="location-item__btn--edit btn--filled btn-icon-label">
          <div class="status-layer">
            <span class="icon material-symbols-outlined">
              edit</span>
            <span class="label">Sửa</span>
          </div>
        </button>
      </div>
    </div>
  </div>`;
  $(".location-list").prepend(locationItem);
};

const delLocation = () => {
  // let locationList = $(".location-list")[0];
  // let locationItem = locationList.children[0];
  // // console.log(locationItem);
  // locationItem.remove();
  $(".location-list")[0].children[0].remove();
};

// $('.bank-item__btn--del').on('click', delBank)

// const addBankAccountBtn = document.querySelector(".addBankAccountBtn");
// const popupAddBankAccount = document.querySelector("#addbankaccount");
// const openBankAccountView = () => {
//   if (popupAddLocation) {
//     var seeModal2 = popupAddBankAccount.querySelector(".add-bank-account");
//     console.log("hihi", seeModal2);
//     seeModal2.style.display = "block";
//   }
// };

// addBankAccountBtn.addEventListener("click", openBankAccountView);
//Khi nhấn vào nút xóa thông tin ngân hàng

// const deleteBankAccountBtn = document.querySelectorAll(".deleteBankAccBtn");
// let popupDeleteBankAccount = document.querySelector("#deletebankinfo");

// deleteBankAccountBtn.forEach(function (element) {
//   element.addEventListener("click", function () {
//     if (popupDeleteBankAccount) {
//       var seeModal3 =
//         popupDeleteBankAccount.querySelector(".deletebank-info");
//       console.log("hihi", seeModal3);
//       console.log(deleteBankAccountBtn);
//       seeModal3.style.display = "block";
//     }
//   });
// });

//Khi nhấn vào nút thêm địa chỉ nhận hàng
// const addLocationBtn = document.querySelector(".addLocationBtn");
// const popupAddLocation = document.querySelector("#addlocation");
// const openLocationView = () => {
//   if (popupAddLocation) {
//     var seeModal = popupAddLocation.querySelector(".add-location");
//     console.log("hihi", seeModal);
//     seeModal.style.display = "block";
//   }
// };
// addLocationBtn.addEventListener("click", openLocationView);

//Khi nhấn vào nút sửa địa chỉ nhận hàng
// const editLocationBtn = document.querySelectorAll(".editLocationBtn");
// const popupEditLocation = document.querySelector("#editlocation");

// editLocationBtn.forEach(function (element) {
//   element.addEventListener("click", function () {
//     if (popupEditLocation) {
//       var seeModalEdit = popupEditLocation.querySelector(".edit-location");
//       seeModalEdit.style.display = "block";
//     }
//   });
// });

// //Khi nhấn vào nút xóa địa chỉ nhận hàng
// const deleteLocaBtn = document.querySelectorAll(".deleteLocaBtn");
// let popupDeleteLocation = document.querySelector("#deletelocation");

// deleteLocaBtn.forEach(function (element) {
//   element.addEventListener("click", function () {
//     if (popupDeleteLocation) {
//       var seeModal3 = popupDeleteLocation.querySelector(".delete-location");
//       console.log("hihi", seeModal3);
//       console.log(deleteLocaBtn);
//       seeModal3.style.display = "block";
//     }
//   });
// });

//Section sản phẩm yêu thích

// modalProduct change image product
// const imgs = document.querySelectorAll(".img-select a");
// const imgBtns = [...imgs];
// let imgId = 1;

// imgBtns.forEach((imgItem) => {
//   imgItem.addEventListener("click", (event) => {
//     event.preventDefault();
//     imgId = imgItem.dataset.id;
//     slideImage();
//   });
// });

// function slideImage() {
//   const displayWidth = document.querySelector(
//     ".img-showcase img:first-child"
//   ).clientWidth;

//   document.querySelector(".img-showcase").style.transform = `translateX(${
//     -(imgId - 1) * displayWidth
//   }px)`;
// }

// window.addEventListener("resize", slideImage);

// When click on Mua lai san pham
const reBuyBtns = document.querySelectorAll(".rebuy-btn");

reBuyBtns.forEach((click) => {
  click.addEventListener("click", () => {
    window.location.href = "/TAA_FE/src/homepage/orderPage/index.html";
  });
});
//review

const delReview = () => {
  $(".review-list")[0].children[0].remove();
};

