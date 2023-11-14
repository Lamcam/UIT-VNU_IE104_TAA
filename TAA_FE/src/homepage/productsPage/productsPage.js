var items = document.querySelectorAll(".js-item")
var sub_menu = document.querySelectorAll(".js-sub-menu")
var buttons = document.querySelectorAll('.js-button')
function showSubMenu() {
  if (this.classList.contains("active")) {
    this.classList.remove("active")
    return
  }

  for (let item of items)
    item.classList.remove("active");

  //   obj = this.querySelector('.js-sub-menu');
  //   console.log(obj);
  //   height = obj.style.maxHeight;
  //   if (height == "200px")
  //     obj.style.maxHeight = "0px";
  //   else {
  //     this.classList.add("active");
  //     obj.style.maxHeight = "200px";
  //   }
  // }

  this.classList.add("active");
}

for (let item of items) {
  item.addEventListener('click', showSubMenu);
}

// effect on click button
function effectButton() {
  if (this.classList.contains("effect")) {
    this.classList.remove("effect");
    return
  }

  this.classList.add("effect");
}

for (let button of buttons) {
  button.addEventListener('click', effectButton);
}


// const dropdowns = document.querySelectorAll('.dropdown');

const select = document.querySelector('.select');
const caret = document.querySelector('.caret');
const menu = document.querySelector('.menu')
const options = document.querySelectorAll('.menu li')
const selected = document.querySelector('.selected')
const cancel = document.querySelector('.icon-cancel')

select.addEventListener('click', () => {
  select.classList.toggle('select-clicked');
  caret.classList.toggle('caret-rotate');
  menu.classList.toggle('menu-open');
})

options.forEach(option => {
  option.addEventListener('click', () => {
    selected.innerText = option.innerText;
    caret.classList.remove('caret-rotate');
    select.classList.add('select__btn')
    select.classList.remove('select-clicked')

    if (select.classList.contains('cancel__select')) {
      select.classList.remove('cancel__select')
      select.classList.add('select__btn')
    }
    cancel.addEventListener('click', () => {
      select.classList.add('cancel__select')
      select.classList.remove('select__btn')
      selected.innerText = "Giá";

    })

    menu.classList.remove('menu-open')
    options.forEach(option => {
      option.classList.remove('select__active')
    })

    option.classList.add('select__active')
  })
})

// item icon_heart product
const iconHearts = document.querySelectorAll('.icon_heart')
iconHearts.forEach(iconHeart => {
  iconHeart.addEventListener("click", () => {
    if (iconHeart.classList.contains("icon--filled")) {
      iconHeart.classList.remove("icon--filled")
      return;
    }
    iconHeart.classList.add("icon--filled")
  })

})

// modalProduct change image product
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

// modalProduct tăng giảm số lượng sản phẩm
const myInput = document.getElementById("my-input");
function stepper(btn) {
  let id = btn.getAttribute("id")
  let min = myInput.getAttribute("min")
  let max = myInput.getAttribute("max")
  let step = myInput.getAttribute("step")
  let value = myInput.getAttribute("value")

  let calcStep = (id == "increment") ? (step * 1) : (step * -1);

  let newValue = parseInt(value) + calcStep;
  if (newValue >= min && newValue <= max) {
    myInput.setAttribute("value", newValue)
  }
  console.log(id, min, max, step, value)
}

// modalProduct open
const btnView = document.querySelector('.product__button__view')
const btnSell = document.querySelector('.product__button__sell')
const modalProduct = document.querySelector('.modal-product')
const modalContainerProduct = document.querySelector('.modal-container--product')
const btnClosesProduct = document.querySelector('.modal-product .btn--close')

btnView.addEventListener("click", () => {
  modalProduct.classList.add('open')
})

// modalProduct close
btnClosesProduct.addEventListener("click", () => {
  modalProduct.classList.remove('open')
})

modalProduct.addEventListener("click", () => {
  modalProduct.classList.remove('open')
})
// nhấn bên ngoài thì popup đóng
modalContainerProduct.addEventListener("click", function (event) {
  event.stopPropagation()
})

// modal

// modalNoti open
const btnCloseNoti = document.querySelector('.modal-noti .btn--close')
const modalNoti = document.querySelector('.modal-noti')
const modalContainerNoti = document.querySelector('.modal-container--noti')
const modalButtonCart = document.querySelector('.button__cart')
const modalButtonView = document.querySelector('.button__view')

// chuyển trang chi tiết sản phẩm
// modalButtonView.addEventListener("click", ()=>{
//   // window.location.href=""
//   // window.alert("hello")
// })

// modalNoti open, modalProduct close
modalButtonCart.addEventListener("click", () => {
  modalNoti.classList.add('open')
  modalProduct.classList.remove('open')
  setTimeout(() => {
    modalNoti.classList.remove('open')
  }, 5000)
})
// modalNoti btn--close

btnCloseNoti.addEventListener("click", () => {
  modalNoti.classList.remove('open')
})

modalNoti.addEventListener("click", () => {
  modalNoti.classList.remove('open')
})
// nhấn bên ngoài thì popup đóng
modalContainerNoti.addEventListener("click", function (event) {
  event.stopPropagation()
})