// const authCtl = require("../modules/auth--handler")
// import authCtl from '../modules/auth--handler.js';

// modalProduct open
const btnViews = document.querySelectorAll('.product__button__view')
const btnSells = document.querySelectorAll('.product__button__sell')
// const modalProducts = document.querySelectorAll('.modal-product')
const btnClosesProduct = document.querySelector('.modal-product .button-close')
const modalItems = document.querySelectorAll('.product__item')

modalItems.forEach((item) => {
  // modalProduct tăng giảm số lượng sản phẩm
  const btnView = item.querySelector('.product__button__view')
  const modalProduct = item.querySelector('.modal-product')
  btnView.addEventListener('click', () => {
    modalProduct.classList.add('active')
  })

  const btnClosesProduct = item.querySelector('.button-close')
  // modalProduct close
  btnClosesProduct.addEventListener("click", () => {
    modalProduct.classList.remove('active')
  })

  modalProduct.addEventListener("click", () => {
    modalProduct.classList.remove('active')
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

  // // modalNoti open, modalProduct close
  // modalButtonCart.addEventListener("click", () => {
  //   modalNoti.classList.add('open')
  //   modalProduct.classList.remove('open')
  //   setTimeout(() => {
  //     modalNoti.classList.remove('open')
  //   }, 5000000)
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

// const addCart = document.querySelectorAll('.button__cart')
// addCart.forEach((item) => {
//   item.addEventListener('click', () => {
//     if (authCtl.checkAuthenticated()) {

//     }
//   })
// })