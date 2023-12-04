// $(function () {
//   $("#modal__addLocation").load("./add-location.html");
//   $("#modal__addBank").load("./add-bank.html");
//   $("#modal__delBank").load("./del-bank.html");
//   $("#modal__delLocation").load("./del-location.html");
//   $("#modal__editLocation").load("./edit-location.html");
//   $("#modal__review").load("./review-popup.html");
//   $("#header").load("/TAA_FE/src/partials/header--auth.html");
//   $("#breadcrumbs").load("/TAA_FE/src/partials/breadcrumbs.html");
//   $("#footer").load("/TAA_FE/src/partials/footer.html");
//   $("#modal__noti").load("./success-popup.html");
//   $("#modal__change-password").load("./change-password.html");
// });

// Change the URL without reloading the page
const changeURLWithoutReload = (newURL) => {
  window.history.pushState({}, '', newURL);
}

// // Example of usage
// changeURLWithoutReload('/new-page');

// // Event listener to handle browser back/forward buttons
// window.onpopstate = function(event) {
//   console.log('Popstate event:', event);
// };

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
navTabItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (index === 0) {
      changeURLWithoutReload('/account/information');
    } else if (index === 1) {
      changeURLWithoutReload('/account/orders');
    } else if (index === 2) {
      changeURLWithoutReload('/account/favor-products');
    }

    addActiveClass(item, "active");
  });
});

const breadcrumbs__data = [
  {
    label: 'Thông tin tài khoản',
    link: '/account/information'
  },
  {
    label: 'Đơn hàng',
    link: '/account/orders'
  },
  {
    label: 'Sản phẩm yêu thích',
    link: '/account/favorites'
  }
]

const reRenderBreadcrumbs = (breadcrumbs__data) => {
  const breadcrumbs = document.querySelectorAll('.breadcrumbs__link')
  const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];
  // console.log(lastBreadcrumb);

  lastBreadcrumb.textContent = breadcrumbs__data.label;
  lastBreadcrumb.href = breadcrumbs__data.link;
}

function showSection(sectionId) {
  const id = sectionId[sectionId.length - 1] - 1;

  reRenderBreadcrumbs(breadcrumbs__data[id]);

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
    target = document.querySelector(`#user_${item}`)
    console.log(target);
    target.readOnly = true;
  });
}

setInputReadOnly();

function activeInput() {
  const targetIndex = Array.from(
    document.querySelectorAll(".input__wrapper .icon")
  ).indexOf(this);
  target = document.querySelectorAll('input[id^="user_"]')[targetIndex]
  target.readOnly = false;
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
  const hideInfoBank = document.querySelector('.noti-bank');
  hideInfoBank.style.display = "none";
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
        <span>Le Trung Hieu</span>
      </div>
      <div class="row mt-16">
        <span>SDT: </span><span>*******629</span>
      </div>
      <div class="row mt-16">
        <span>Đối diện quán lẩu thái, Nhơn Trạch, Đồng Nai</span>
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
  const hideInfo = document.querySelector('.info-loca');
  hideInfo.style.display = "none";
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

// lưu thay đổi nhấn được:
function enableSaveButton() {
  // Lặp qua tất cả các ô nhập liệu và kiểm tra điều kiện để kích hoạt nút "Lưu thay đổi"
  var inputs = document.querySelectorAll(".input__wrapper-child");
  var saveButton = document.getElementById("saveButton");
  var enableButton = false;

  inputs.forEach(function (input) {
    if (input.value.trim() !== "") {
      enableButton = true;
    }
  });

  if (enableButton) {
    saveButton.removeAttribute("disabled");
  } else {
    saveButton.setAttribute("disabled", "disabled");
  }
}

// const addChangeTab = () => {
//   let navItems = document.querySelectorAll(".nav-tab__item")

//   switch (<%= flags %>) {
//     case '0':
//       showSection('section1');
//       addActiveClass(navItems[0], 'active')
//       break;
//     case '1':
//       showSection('section2');
//       addActiveClass(navItems[1], 'active')
//       break;
//     case '2':
//       showSection('section3');
//       addActiveClass(navItems[2], 'active')
//       break;

//     default:
//       break;
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  // addChangeTab();
})