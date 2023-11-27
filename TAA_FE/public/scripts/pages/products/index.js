var items = document.querySelectorAll(".js-item")
var sub_menu = document.querySelectorAll(".js-sub-menu")
var buttons = document.querySelectorAll('.js-button')

sub_menu.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation()
  })

})

sub_menu.forEach(item => {
  const sub_menu_li = item.querySelectorAll("li")
  sub_menu_li.forEach((item_li) => {
    item_li.addEventListener('click', () => {
      if (item_li.classList.contains("active__sub-menu__li")) {
        item_li.classList.remove("active__sub-menu__li")
        return
      }
      sub_menu_li.forEach(sub_menu => {
        sub_menu.classList.remove("active__sub-menu__li")
      })

      item_li.classList.add("active__sub-menu__li")
    })
  })
})

function showSubMenu() {
  sub_menu.forEach(item_sub_menu => {
    const sub_menu_li = item_sub_menu.querySelectorAll("li")
    sub_menu_li.forEach((item_li) => {
      if (item_li.classList.contains("active__sub-menu__li")) {
        item_li.classList.remove("active__sub-menu__li")
      }
    })
  })

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
      iconHeart.innerText = "heart_plus"
      return;
    }
    iconHeart.innerText = "favorite"
    iconHeart.classList.add("icon--filled")
  })

})

// const myInput = document.querySelector("#my-input");
// function stepper(btn) {
//   let id = btn.getAttribute("id")
//   let min = myInput.getAttribute("min")
//   let max = myInput.getAttribute("max")
//   let step = myInput.getAttribute("step")
//   let value = myInput.getAttribute("value")

//   let calcStep = (id == "increment") ? (step * 1) : (step * -1);

//   let newValue = parseInt(value) + calcStep;
//   if (newValue >= min && newValue <= max) {
//     myInput.setAttribute("value", newValue)
//   }
//   console.log(id, min, max, step, value)
// }



 
// modalProduct open
const btnViews = document.querySelectorAll('.product__button__view')
const btnSells = document.querySelectorAll('.product__button__sell')
// const modalProducts = document.querySelectorAll('.modal-product')
const btnClosesProduct = document.querySelector('.modal-product .button-close')
const modalItems = document.querySelectorAll('.product__item')
document.addEventListener("DOMContentLoaded",function(){
  
modalItems.forEach((item) => {
  // modalProduct tăng giảm số lượng sản phẩm
  const btnView = item.querySelector('.product__button__view')
  const modalProduct = item.querySelector('.modal-product')
  
  btnView.addEventListener('click', () => {
    modalProduct.classList.add('open')
  }) 

  const btnClosesProduct = item.querySelector('.button-close')
  // modalProduct close
  btnClosesProduct.addEventListener("click", () => {
    modalProduct.classList.remove('open')
  })

  modalProduct.addEventListener("click", () => {
    modalProduct.classList.remove('open')
  })
  const modalContainerProduct = item.querySelector('.modal-container--product')
  // nhấn bên ngoài thì popup đóng
  modalContainerProduct.addEventListener("click", function (event) {
    event.stopPropagation()
  })

  // modalNoti open
  const btnCloseNoti = item.querySelector('.modal-noti .button-close')
  const modalNoti = item.querySelector('.modal-noti')
  const modalContainerNoti = item.querySelector('.modal-container--noti')
  const modalButtonCart = item.querySelector('.button__cart')
  const modalButtonView = item.querySelector('.button__view')

  // chuyển trang chi tiết sản phẩm
  modalButtonView.addEventListener("click", () => {
    // window.location.href=""
    // window.alert("hello")
  })

  // modalNoti open, modalProduct close
  modalButtonCart.addEventListener("click", () => {
    modalNoti.classList.add('open')
    modalProduct.classList.remove('open')
    setTimeout(() => {
      modalNoti.classList.remove('open')
    }, 5000000)
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


  // modalProduct change image product
  const imgs = item.querySelectorAll('.img-select a');
  const imgBtns = [...imgs];
  let imgId = 1;
  imgBtns[0].classList.add('active__selected');

  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
      event.preventDefault();
      imgBtns.forEach((itemBtn) => {
        itemBtn.classList.remove('active__selected');
      });
      imgItem.classList.add('active__selected');
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });

  function slideImage() {
    const displayWidth = item.querySelector('.img-showcase img:first-child').clientWidth;

    item.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
  }

  window.addEventListener('resize', slideImage);

  const prevBtn = item.querySelector('#prevBtn');
  const nextBtn = item.querySelector('#nextBtn');
  
  prevBtn.addEventListener('click', () => changeImage(-1));
  nextBtn.addEventListener('click', () => changeImage(1));
  
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

  const myInput = item.querySelector("#my-input");
  const decrementBtn = item.querySelector("#decrement");
  const incrementBtn = item.querySelector("#increment");

  function stepper(action) {
    let min = parseInt(myInput.getAttribute("min"));
    let max = parseInt(myInput.getAttribute("max"));
    let step = parseInt(myInput.getAttribute("step"));
    let value = parseInt(myInput.value);

    let calcStep = (action === "increment") ? (step * 1) : (step * -1);

    let newValue = value + calcStep;
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      myInput.value = newValue;
    }
    console.log(action, min, max, step, value);
  }

  decrementBtn.addEventListener("click", () => stepper("decrement"));
  incrementBtn.addEventListener("click", () => stepper("increment"));

})
})

 

// modal

