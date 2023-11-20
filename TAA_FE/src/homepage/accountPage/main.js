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
  const bankItem = document.createElement("div");
  bankItem.className = "bank-item mt-12";

  const bankItemWrapper = document.createElement("div");
  bankItemWrapper.className = "bank-item__wrapper body-medium";

  const row1 = document.createElement("div");
  row1.className = "row";
  row1.innerHTML = "<span>STK: </span><span>*********1230</span><br>";

  const row2 = document.createElement("div");
  row2.className = "row mt-12";
  row2.innerHTML = "<span>Ngân hàng ACB</span>";

  const deleteButton = document.createElement("button");
  deleteButton.className = "bank-item__btn--del btn-icon";
  deleteButton.addEventListener("click", () => delBank(bankItem));

  const statusLayer = document.createElement("div");
  statusLayer.className = "status-layer";

  const iconSpan = document.createElement("span");
  iconSpan.className = "icon material-symbols-outlined";
  iconSpan.innerText = "delete";

  statusLayer.appendChild(iconSpan);
  deleteButton.appendChild(statusLayer);

  bankItemWrapper.appendChild(row1);
  bankItemWrapper.appendChild(row2);
  bankItemWrapper.appendChild(deleteButton);

  bankItem.appendChild(bankItemWrapper);

  document.querySelector(".bank-list").prepend(bankItem);
};

const delBank = () => {
  const bankList = document.querySelector(".bank-list");
  const bankItems = bankList.querySelectorAll(".bank-item");
  if (bankItems.length > 0) {
    bankItems[0].remove();
  }
};

// const addBank = () => {
//   let bankItem = `
//     <div class="bank-item mt-12">
//       <div class="bank-item__wrapper body-medium">
//         <div class="row">
//           <span>STK: </span><span>*********1230</span><br>
//         </div>
//         <div class="row">
//           <span class="mt-12">Ngân hàng ACB</span>
//         </div>
//         <button class="bank-item__btn--del btn-icon"
//           data-modal-target="#modal--del-bank">
//           <div class="status-layer">
//             <span class="icon material-symbols-outlined">
//               delete</span>
//           </div>
//         </button>
//       </div>
//     </div>`;
//   $(".bank-list").prepend(bankItem);
// };

// $(".bank-list__btn--add").on("click", addBank);

// const delBank = () => {
//   $(".bank-list")[0].children[0].remove();
// };

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
  $(".location-list")[0].children[0].remove();
};

// When click on Mua lai san pham
const reBuyBtns = document.querySelectorAll(".rebuy-btn");

reBuyBtns.forEach((click) => {
  click.addEventListener("click", () => {
    window.location.href = "/TAA_FE/src/homepage/cartPage/index.html";
  });
});
//review

const delReview = () => {
  $(".review-list")[0].children[0].remove();
};

function popUpSuccess() {
  document.addEventListener("DOMContentLoaded", function () {
    $("done-btn").on("click", function () {
      $("");
    });
  });
}
