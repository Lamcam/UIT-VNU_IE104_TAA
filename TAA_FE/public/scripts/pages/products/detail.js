const orderNow = (prod_id) => {
  const prod_quatity = document.querySelector('.my-input').value;
  // console.log(prod_quatity);

  cookieHder.createCookie('prod_ids--order', prod_id, 1);
  cookieHder.createCookie('prod_quantities--order', prod_quatity, 1);

  window.location.href = '/account/order';
}

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;
imgBtns[0].classList.add('active__selected');

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener('click', (event) => {
    event.preventDefault();
    imgBtns.forEach((item) => {
      item.classList.remove('active__selected');
    });
    imgItem.classList.add('active__selected');
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

  document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

function changeImage(direction) {
  imgId += direction;

  // Kiểm tra nếu imgId vượt quá giới hạn trái/phải
  if (imgId < 1) {
    imgId = imgBtns.length;
  } else if (imgId > imgBtns.length) {
    imgId = 1;
  }

  // Loại bỏ lớp 'active__selected' từ tất cả các hình ảnh
  imgBtns.forEach((item) => {
    item.classList.remove('active__selected');
  });

  // Thêm lớp 'active__selected' cho hình ảnh hiện tại
  imgBtns[imgId - 1].classList.add('active__selected');

  // Chuyển ảnh
  slideImage();
}

const inputElements = document.querySelectorAll('.my-input');
const decrementButtons = document.querySelectorAll('.quantity__product-decrement');
const incrementButtons = document.querySelectorAll('.quantity__product-increment');

// Thêm sự kiện khi nút tăng được nhấn cho mỗi button
incrementButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    incrementValue(index);
  });
});

// Thêm sự kiện khi nút giảm được nhấn cho mỗi button
decrementButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    decrementValue(index);
  });
});

// Hàm tăng giá trị
function incrementValue(index) {
  let currentValue = parseInt(inputElements[index].value);
  let maxValue = parseInt(inputElements[index].max);

  if (currentValue < maxValue) {
    inputElements[index].value = currentValue + 1;
  }
}

// Hàm giảm giá trị
function decrementValue(index) {
  let currentValue = parseInt(inputElements[index].value);
  let minValue = parseInt(inputElements[index].min);

  if (currentValue > minValue) {
    inputElements[index].value = currentValue - 1;
  }
}

// // modalNoti open
// const btnCloseNoti = document.querySelector('.modal-noti .button-close')
// const modalNoti = document.querySelector('.modal-noti')
// const modalContainerNoti = document.querySelector('.modal-container--noti')
// const modalButtonCart = document.querySelector('.button__cart')

// // modalNoti open, modalProduct close
// modalButtonCart.addEventListener("click", () => {
//   modalNoti.classList.add('open')
//   setTimeout(() => {
//     modalNoti.classList.remove('open')
//   }, 500000)

// })
// // modalNoti btn--close

// btnCloseNoti.addEventListener("click", () => {
//   modalNoti.classList.remove('open')
// })

// modalNoti.addEventListener("click", () => {
//   modalNoti.classList.remove('open')
// })
// // nhấn bên ngoài thì popup đóng
// modalContainerNoti.addEventListener("click", function (event) {
//   event.stopPropagation()
// })

// rating
// rating__filter-rank
const dropdownRank = document.querySelector('.rating__filter-rank .dropdown')
const selectRank = dropdownRank.querySelector('.select');
const caretRank = dropdownRank.querySelector('.caret');
const menuRank = dropdownRank.querySelector('.menu')
const optionsRank = dropdownRank.querySelectorAll('.menu li')
const selectedRank = dropdownRank.querySelector('.selected')
const cancelRank = dropdownRank.querySelector('.icon-cancel')

selectRank.addEventListener('click', () => {
  selectRank.classList.toggle('select-clicked');
  caretRank.classList.toggle('caret-rotate');
  menuRank.classList.toggle('menu-open');
})

optionsRank.forEach(option => {
  option.addEventListener('click', () => {
    selectedRank.innerText = option.innerText;
    caretRank.classList.remove('caret-rotate');
    selectRank.classList.add('select__btn')
    selectRank.classList.remove('select-clicked')

    if (selectRank.classList.contains('cancel__select')) {
      selectRank.classList.remove('cancel__select')
      selectRank.classList.add('select__btn')
    }
    cancelRank.addEventListener('click', () => {
      selectRank.classList.add('cancel__select')
      selectRank.classList.remove('select__btn')
      selectedRank.innerText = "Tất cả";

    })
    menuRank.classList.remove('menu-open')
    optionsRank.forEach(option => {
      option.classList.remove('select__active')
    })

    option.classList.add('select__active')
  })
})

const iconHearts = document.querySelectorAll('.icon_heart')
iconHearts.forEach(iconHeart => {
  iconHeart.addEventListener("click", () => {
    if (iconHeart.classList.contains("icon--filled")) {
      iconHeart.classList.remove("icon--filled")
      iconHeart.innerText = "heart_plus"
      return;
    }
    iconHeart.innerText = "favorite"
    iconHeart.classList.add("icon--filled")
  })
})
const dropdownSort = document.querySelector('.rating__filter-sort .dropdown')
const selectSort = dropdownSort.querySelector('.select');
const caretSort = dropdownSort.querySelector('.caret');
const menuSort = dropdownSort.querySelector('.menu')
const optionsSort = dropdownSort.querySelectorAll('.menu li')
const selectedSort = dropdownSort.querySelector('.selected')
const cancelSort = dropdownSort.querySelector('.icon-cancel')

selectSort.addEventListener('click', () => {
  selectSort.classList.toggle('select-clicked');
  caretSort.classList.toggle('caret-rotate');
  menuSort.classList.toggle('menu-open');
})

optionsSort.forEach(option => {
  option.addEventListener('click', () => {
    selectedSort.innerText = option.innerText;
    caretSort.classList.remove('caret-rotate');
    selectSort.classList.add('select__btn')
    selectSort.classList.remove('select-clicked')

    if (selectSort.classList.contains('cancel__select')) {
      selectSort.classList.remove('cancel__select')
      selectSort.classList.add('select__btn')
    }
    cancelSort.addEventListener('click', () => {
      selectSort.classList.add('cancel__select')
      selectSort.classList.remove('select__btn')
      selectedSort.innerText = "Mới nhất";

    })
    menuSort.classList.remove('menu-open')
    optionsSort.forEach(option => {
      option.classList.remove('select__active')
    })

    option.classList.add('select__active')
  })
})

// rate_react
document.querySelectorAll(".rate__react").forEach(item => {
  const ratings = item.querySelectorAll(".post__rating");

  ratings.forEach(rating => {
    const icon = rating.querySelector(".post__rating-icon");
    const count = rating.querySelector(".post__rating-count");

    icon.addEventListener("click", async () => {
      if (rating.classList.contains("post__rating-selected")) {
        return;
      }

      count.textContent = Number(count.textContent) + 1;

      ratings.forEach(rating => {
        if (rating.classList.contains("post__rating-selected")) {
          const count = rating.querySelector(".post__rating-count");

          count.textContent = Math.max(0, Number(count.textContent) - 1);
          rating.classList.remove("post__rating-selected");
          rating.classList.remove("icon--filled")
        }
      });

      rating.classList.add("post__rating-selected")
      rating.classList.add("icon--filled")
    });
  });
});