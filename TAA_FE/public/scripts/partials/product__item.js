const productItemInteract = () => {
  const productItems = document.querySelectorAll('.product__item');

  productItems.forEach((item) => {
    const iconHeart = item.querySelector('.icon_heart');
    iconHeart.addEventListener('click', (event) => {
      productItemHeartInteract(event);
    })

    const btnView = item.querySelector('.product__button__view');
    const modalProduct = item.querySelector('.modal-product');

    btnView.addEventListener('click', () => {
      productItemModalOpen(modalProduct);
    })

    productItemModalSlideImage(modalProduct);
  })
}

const productItemHeartInteract = (event) => {
  if (event?.target.classList.contains("icon--filled")) {
    event.target.classList.remove("icon--filled")
    event.target.innerText = "heart_plus"
  } else {
    event.target.innerText = "favorite"
    event.target.classList.add("icon--filled")
  }
}

const productItemModalOpen = (DOMModal) => {
  DOMModal.classList.add('active');
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

document.addEventListener('DOMContentLoaded', productItemInteract);
document.addEventListener('ReloadProducts', productItemInteract);