const productItemInteract = () => {
  const productItems = document.querySelectorAll('.product__item');

  productItems.forEach((item) => {
    const iconHeart = item.querySelector('.icon_heart');
    iconHeart.addEventListener('click', (event) => {
      productItemHeartInteract(event);
      event.stopPropagation();
    })

    const btnView = item.querySelector('.product__button__view');
    const btnOrder = item.querySelector('.product__button__sell');
    const modalProduct = item.querySelector('.modal-product');

    btnView.addEventListener('click', (event) => {
      productItemModalOpen(modalProduct);
      event.stopPropagation();
    })

    btnOrder.addEventListener('click', (event) => {
      cartCtl.orderNow(event);
      event.stopPropagation();
    })

    productItemModalSlideImage(modalProduct);
    productItemModalInputNumber(modalProduct);
  })
}

const productItemHeartInteract = (event) => {
  const checkAuthenticated = authCtl.checkAuthenticated();
  // console.log(checkAuthenticated)
  if (checkAuthenticated) {
    const id = cookieHder.readCookie('id');
    const target = event.target.closest('.product__item');
    const prod_id = target.querySelector('[data-prod-id]').dataset.prodId;

    const data = { id, prod_id }

    if (event?.target.classList.contains("icon--filled")) {
      fetch('/account/favor-products/del', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      }).then(response => response.json())
        .then(data => {
          if (data.statusCode == 200) {
            event.target.innerText = "heart_plus"
            event.target.classList.remove("icon--filled")
          }
        })
        .catch(error => {
          console.log('Lỗi:', error);
        });
      // event.target.classList.remove("icon--filled")
      // event.target.innerText = "heart_plus"
    } else {
      fetch('/account/favor-products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      }).then(response => response.json())
        .then(data => {
          if (data.statusCode == 200) {
            event.target.innerText = "favorite"
            event.target.classList.add("icon--filled")
          }
        })
        .catch(error => {
          console.error('Lỗi:', error);
        });
      // event.target.innerText = "favorite"
      // event.target.classList.add("icon--filled")
    }
  }
}

const productItemModalOpen = (DOMModal) => {
  if (!DOMModal) {
    console.error('Don\'t have this modal');
    return;
  }

  document.querySelector('body').classList.add('modal-open');
  DOMModal.classList.add('active');

  const modalContainer = DOMModal.querySelector('.modal-container--product');
  modalContainer?.addEventListener('click', (event) => {
    event.stopPropagation();
  });
};

const productItemModalSlideImage = (DOMModal) => {
  const imgs = DOMModal.querySelectorAll('.img-select a');
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

  const slideImage = () => {
    const displayWidth = DOMModal.querySelector('.img-showcase img:first-child').clientWidth;
    DOMModal.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
  }

  window.addEventListener('resize', slideImage);

  const prevBtn = DOMModal.querySelector('.prevBtn');
  const nextBtn = DOMModal.querySelector('.nextBtn');

  prevBtn.addEventListener('click', () => changeImage(-1));
  nextBtn.addEventListener('click', () => changeImage(1));

  const changeImage = (direction) => {
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
}

const productItemModalInputNumber = (DOMModal) => {
  const inputElements = DOMModal.querySelectorAll('.my-input');
  const decrementButtons = DOMModal.querySelectorAll('.quantity__product-decrement');
  const incrementButtons = DOMModal.querySelectorAll('.quantity__product-increment');

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
}


document.addEventListener('DOMContentLoaded', productItemInteract);
document.addEventListener('ReloadProducts', productItemInteract);

function moveDetailProduct(dataId) {
  console.log(dataId)
  window.location.href = `/products/detail?id=${dataId}`;
}