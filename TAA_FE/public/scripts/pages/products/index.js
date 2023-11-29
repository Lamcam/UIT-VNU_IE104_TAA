var items = document.querySelectorAll(".js-item");
var sub_menu = document.querySelectorAll(".js-sub-menu");
var buttons = document.querySelectorAll(".js-button");

sub_menu.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

sub_menu.forEach((item) => {
  const sub_menu_li = item.querySelectorAll("li");
  sub_menu_li.forEach((item_li) => {
    item_li.addEventListener("click", () => {
      if (item_li.classList.contains("active__sub-menu__li")) {
        item_li.classList.remove("active__sub-menu__li");
        return;
      }
      sub_menu_li.forEach((sub_menu) => {
        sub_menu.classList.remove("active__sub-menu__li");
      });

      item_li.classList.add("active__sub-menu__li");
    });
  });
});

function showSubMenu() {
  sub_menu.forEach((item_sub_menu) => {
    const sub_menu_li = item_sub_menu.querySelectorAll("li");
    sub_menu_li.forEach((item_li) => {
      if (item_li.classList.contains("active__sub-menu__li")) {
        item_li.classList.remove("active__sub-menu__li");
      }
    });
  });

  if (this.classList.contains("active")) {
    this.classList.remove("active");
    return;
  }

  for (let item of items) {
    item.classList.remove("active");
  }

  this.classList.add("active");
}

for (let item of items) {
  item.addEventListener("click", showSubMenu);
}

const productButtons = document.querySelectorAll(".product__button");

productButtons.forEach((button) => {
  button.addEventListener("click", effectButton);
});

function effectButton() {
  if (this.classList.contains("effect")) {
    this.classList.remove("effect");
    return;
  }
  const countEffects = document.querySelectorAll(".effect");
  countEffects.forEach((element) => {
    element.classList.remove("effect");
  });
  const productBtnSelect = document.querySelector(".product__button-select");
  if (productBtnSelect.classList.contains("select__btn")) {
    productBtnSelect.classList.remove("select__btn");
    productBtnSelect.classList.add("cancel__select");
  }
  if (productBtnSelect.classList.contains("select-clicked")) {
    productBtnSelect.classList.remove("select-clicked");
  }
  const caret = document.querySelector('.caret')
  if (caret.classList.contains("caret-rotate")) {
    caret.classList.remove("caret-rotate");
  }
  const menu = document.querySelector('.menu')
  if (menu.classList.contains("menu-open")) {
    menu.classList.remove("menu-open");
  }
  const selected = document.querySelector(".selected");
  if (selected.innerHTML != "Giá") selected.innerText = "Giá";
  this.classList.add("effect");
}

// const dropdowns = document.querySelectorAll('.dropdown');

const select = document.querySelector(".select");
const caret = document.querySelector(".caret");
const menu = document.querySelector(".menu");
const options = document.querySelectorAll(".menu li");
const selected = document.querySelector(".selected");
const cancel = document.querySelector(".icon-cancel");

select.addEventListener("click", () => {
  select.classList.toggle("select-clicked");
  caret.classList.toggle("caret-rotate");
  menu.classList.toggle("menu-open");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    selected.innerText = option.innerText;
    caret.classList.remove("caret-rotate");
    select.classList.add("select__btn");
    select.classList.remove("select-clicked");

    if (select.classList.contains("cancel__select")) {
      select.classList.remove("cancel__select");
      select.classList.add("select__btn");
    }
    cancel.addEventListener("click", () => {
      select.classList.add("cancel__select");
      select.classList.remove("select__btn");
      selected.innerText = "Giá";
    });
    const countEffects = document.querySelectorAll(".effect");
    countEffects.forEach((element) => {
      element.classList.remove("effect");
    });
    menu.classList.remove("menu-open");
    options.forEach((option) => {
      option.classList.remove("select__active");
    });

    option.classList.add("select__active");
  });
});

// item icon_heart product
const iconHearts = document.querySelectorAll(".icon_heart");
iconHearts.forEach((iconHeart) => {
  iconHeart.addEventListener("click", () => {
    if (iconHeart.classList.contains("icon--filled")) {
      iconHeart.classList.remove("icon--filled");
      iconHeart.innerText = "heart_plus";
      return;
    }
    iconHeart.innerText = "favorite";
    iconHeart.classList.add("icon--filled");
  });
});

//AN làm
const category = document.querySelectorAll(".category");

function createProduct(item) {
  let path = "/imgs/products/" + item.cate_name + "/";
  // Create the outer container div
  console.log("this is path", path);
  let productItem = document.createElement("div");
  productItem.classList.add("product__item", "col-4");

  // Create the product image container div
  let productImage = document.createElement("div");
  productImage.classList.add("product__image");
  productItem.appendChild(productImage);

  // Create the front image element
  let frontImage = document.createElement("img");
  frontImage.src = path + item.prod_img_urls[1];

  frontImage.alt = "ảnh sản phẩm";
  frontImage.classList.add("img_back");
  productImage.appendChild(frontImage);

  // Create the back image element
  let backImage = document.createElement("img");
  // backImage.src = "../../../public/red-panda-small.jpg";
  backImage.src = path + item.prod_img_urls[0];
  backImage.alt = "ảnh sản phẩm";
  backImage.classList.add("img_font");
  productImage.appendChild(backImage);

  // Create the product body div
  let productBody = document.createElement("div");
  productBody.classList.add("product__body");
  productItem.appendChild(productBody);

  // Create the heart icon element
  let heartIcon = document.createElement("span");
  heartIcon.classList.add(
    "material-symbols-outlined",
    "icon_heart",
    "error-text"
  );
  heartIcon.textContent = "heart_plus";
  productBody.appendChild(heartIcon);

  // Create the product name heading
  let productName = document.createElement("h3");
  productName.classList.add("product__name", "body-large");
  productName.textContent = `${item.prod_name}`;
  productBody.appendChild(productName);

  // Create the product price container div
  let productPrice = document.createElement("div");
  productPrice.classList.add("product__price", "label-large");
  productBody.appendChild(productPrice);

  // Create the current price element
  let currentPrice = document.createElement("p");
  currentPrice.classList.add("product__price__current");
  currentPrice.textContent = `${parseInt(item.prod_cost) * (1 - parseFloat(item.prod_discount))
    }`;
  productPrice.appendChild(currentPrice);

  // Create the discounted price element
  let discountedPrice = document.createElement("p");
  discountedPrice.classList.add(
    "product__price__discount",
    "outline-variant-text"
  );
  discountedPrice.textContent = `${item.prod_cost}`;
  productPrice.appendChild(discountedPrice);

  // Create the product discount paragraph
  let productDiscount = document.createElement("p");
  productDiscount.classList.add(
    "product__discount",
    "title-medium",
    "error-text"
  );
  productDiscount.textContent = `Giảm ${item.prod_discount * 100}%`;
  productBody.appendChild(productDiscount);

  // Create the product stock label
  let productStock = document.createElement("p");
  let prodAvai = parseInt(item.prod_num_avai);
  let state = "";
  prodAvai ? (state = "Còn hàng") : (state = "Hết hàng");
  productStock.classList.add("product__stock", "label-large", "primary-text");

  productStock.textContent = state;
  productBody.appendChild(productStock);

  // Create the product button section div
  let productButtonSection = document.createElement("div");
  productButtonSection.classList.add(
    "product__button__section",
    "label-large"
  );
  productItem.appendChild(productButtonSection);

  // Create the quick view button
  let quickViewButton = document.createElement("div");
  quickViewButton.classList.add(
    "product__button__view",
    "product__button__view1",
  );
  quickViewButton.textContent = "Xem nhanh";
  productButtonSection.appendChild(quickViewButton);

  // Create the vertical separator div
  let verticalSeparator = document.createElement("div");
  verticalSeparator.classList.add("vertical");
  productButtonSection.appendChild(verticalSeparator);

  // Create the buy now button with link
  let buyNowButton = document.createElement("div");
  buyNowButton.classList.add("product__button__sell");
  productButtonSection.appendChild(buyNowButton);

  let buyNowLink = document.createElement("a");
  buyNowLink.href = "/TAA_FE/src/homepage/cartPage/index.html";
  buyNowLink.textContent = "Mua ngay";
  buyNowButton.appendChild(buyNowLink);

  // Append the product item to the desired container/element
  let container = document.querySelector(".product__wrapper");
  container.appendChild(productItem);

  // generate pop-up
  // Create the root element with class "modal-product"

  const divModalBody = document.createElement("div");
  divModalBody.className = "modal__body";
  const pProductName = document.createElement("p");
  pProductName.className = "modal__product__name headline-medium";
  pProductName.innerHTML = item.prod_name;

  const divModalInfoRate = document.createElement("div");
  divModalInfoRate.className = "modal__info__rate";

  const divRateStar = document.createElement("div");
  divRateStar.className = "rate__star title-medium";
  divRateStar.textContent = "4.8";

  const spanStarFilled = document.createElement("span");
  spanStarFilled.className = "material-symbols-outlined icon--filled";
  spanStarFilled.textContent = "star";

  const spanRateNumber = document.createElement("span");
  spanRateNumber.className = "rate__number title-medium";
  spanRateNumber.textContent = "5 đánh giá";

  const spanNumberBuy = document.createElement("span");
  spanNumberBuy.className = "number__buy title-medium";
  spanNumberBuy.innerHTML = item.prod_num_sold + " đã bán";

  const divModalPrice = document.createElement("div");
  divModalPrice.className = "modal__price";

  const pCost = document.createElement("p");
  pCost.className = "cost body-medium";
  pCost.innerHTML = item.prod_cost + " đ";

  const pCostDiscount = document.createElement("p");
  pCostDiscount.className = "cost__discount headline-small";
  pCostDiscount.innerHTML = item.prod_cost * (1 - item.prod_discount) + "đ";

  const divPercentDiscount = document.createElement("div");
  divPercentDiscount.className = "percent__discount body-medium";
  divPercentDiscount.innerHTML = "Giảm " + item.prod_discount * 100;

  const divModalSize = document.createElement("div");
  divModalSize.className = "modal__size label-large";

  const pSizeTitle = document.createElement("p");
  pSizeTitle.className = "size__title bold";
  pSizeTitle.textContent = "Kích thước:";

  const divSizeValue = document.createElement("div");
  divSizeValue.className = "size__value outline-text";
  divSizeValue.textContent = "Freestyle";

  const divModalQuantity = document.createElement("div");
  divModalQuantity.className = "modal__quantity";

  const divQuantityTitle = document.createElement("div");
  divQuantityTitle.className = "quantity__title label-large bold";
  divQuantityTitle.textContent = "Số lượng: ";

  const divQuantityProduct = document.createElement("div");
  divQuantityProduct.className = "quantity__product outline-text label-large";

  const divDecrement = document.createElement("div");
  divDecrement.id = "decrement";
  divDecrement.className = "quantity__product-decrement outline-text";
  divDecrement.textContent = "-";

  const inputQuantity = document.createElement("input");
  inputQuantity.type = "number";
  inputQuantity.min = "1";
  inputQuantity.max = "100";
  inputQuantity.step = "1";
  inputQuantity.value = "1";
  inputQuantity.id = "my-input";
  inputQuantity.disabled = true;

  const divIncrement = document.createElement("div");
  divIncrement.id = "increment";
  divIncrement.className = "quantity__product-increment outline-text";
  divIncrement.textContent = "+";

  const pQuantityStock = document.createElement("p");
  pQuantityStock.className = "quantity__stock body-small";
  pQuantityStock.innerHTML = item.prod_num_avai + " sản phẩm sẵn có";

  const divModalButton = document.createElement("div");
  divModalButton.className = "modal__button";

  const buttonCart = document.createElement("button");
  buttonCart.className = "btn-icon-label btn--filled button__cart";
  buttonCart.innerHTML = `
    <span class="status-layer">
      <span class="icon icon--filled material-symbols-outlined">
          add_shopping_cart</span>
      <span class="label">Thêm vào giỏ hàng</span>
    </span>
  `;

  const buttonView = document.createElement("button");
  // buttonView.className = "button__view btn--filled btn-filled";
  buttonView.classList.add('btn-filled', 'button__view', 'btn--filled') 

  buttonView.innerHTML =
    "<a class='status-layer' href='/products/detail?id='" + item.prod_id + ">Xem chi tiết</a>";

  const divModalContext = document.createElement("div");
  divModalContext.className = "modal__context body-large";

  const divContextInfo = document.createElement("div");
  divContextInfo.className = "context__info mt-12";

  const divContextInfoTitle = document.createElement("div");
  divContextInfoTitle.className = "context__info__title";
  divContextInfoTitle.textContent = "THÔNG TIN SẢN PHẨM";

  const ulContextInfoBody = document.createElement("ul");
  ulContextInfoBody.className = "context__info__body";

  const liInfo1 = document.createElement("li");
  liInfo1.textContent = "Chất liệu vải: Kaki cao cấp.";

  const liInfo2 = document.createElement("li");
  liInfo2.textContent = "Khóa chỉnh size: Được làm bằng inox.";

  const liInfo3 = document.createElement("li");
  liInfo3.textContent = "Phong cách Unisex, phù hợp Nam/Nữ.";

  ulContextInfoBody.appendChild(liInfo1);
  ulContextInfoBody.appendChild(liInfo2);
  ulContextInfoBody.appendChild(liInfo3);

  const divContextDetail = document.createElement("div");
  divContextDetail.className = "context__detail mt-24";

  const divContextDetailTitle = document.createElement("div");
  divContextDetailTitle.className = "context__detail__title";
  divContextDetailTitle.textContent = "MÔ TẢ SẢN PHẨM";

  const ulContextDetailBody = document.createElement("ul");
  ulContextDetailBody.className = "context__detail__body";

  const liDetail1 = document.createElement("li");
  liDetail1.textContent =
    "- Form dáng chuẩn, chắc chắn, form mềm giúp định hình được khuôn mặt.";
  const liDetail2 = document.createElement("li");
  liDetail2.textContent =
    "- Nón được thiết kế để bảo vệ cho vùng mắt, vùng da mặt, da đầu và tóc tránh các tia cực tím độc hại từ ánh nắng mặt trời.";

  const liDetail3 = document.createElement("li");
  liDetail3.textContent =
    "- Giặt bằng nước lạnh không dùng bột giặt trong lần giặt đầu tiên.";

  ulContextDetailBody.appendChild(liDetail1);
  ulContextDetailBody.appendChild(liDetail2);
  ulContextDetailBody.appendChild(liDetail3);

  // Append the elements to the appropriate parents
  divRateStar.appendChild(spanStarFilled);
  divModalInfoRate.appendChild(divRateStar);
  divModalInfoRate.appendChild(spanRateNumber);
  divModalInfoRate.appendChild(spanNumberBuy);

  divModalPrice.appendChild(pCost);
  divModalPrice.appendChild(pCostDiscount);
  divModalPrice.appendChild(divPercentDiscount);

  divModalSize.appendChild(pSizeTitle);
  divModalSize.appendChild(divSizeValue);

  divQuantityProduct.appendChild(divDecrement);
  divQuantityProduct.appendChild(inputQuantity);
  divQuantityProduct.appendChild(divIncrement);

  divModalQuantity.appendChild(divQuantityTitle);
  divModalQuantity.appendChild(divQuantityProduct);
  divModalQuantity.appendChild(pQuantityStock);

  divModalButton.appendChild(buttonCart);
  divModalButton.appendChild(buttonView);

  divContextInfo.appendChild(divContextInfoTitle);
  divContextInfo.appendChild(ulContextInfoBody);

  divContextDetail.appendChild(divContextDetailTitle);
  divContextDetail.appendChild(ulContextDetailBody);

  divModalContext.appendChild(divContextInfo);
  divModalContext.appendChild(divContextDetail);

  divModalBody.appendChild(pProductName);
  divModalBody.appendChild(divModalInfoRate);
  divModalBody.appendChild(divModalPrice);
  // divModalBody.appendChild(divModalColor);
  divModalBody.appendChild(divModalSize);
  divModalBody.appendChild(divModalQuantity);
  divModalBody.appendChild(divModalButton);
  divModalBody.appendChild(divModalContext);

  // Append the root element to the document body
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container--product");

  const modalProduct = document.createElement("div");
  modalProduct.classList.add("modal-product", "modal");

  modalProduct.appendChild(modalContainer);

  // img
  const modalImg = document.createElement("div");
  modalImg.classList.add("modal__img");

  // Create the img-display element
  const imgDisplay = document.createElement("div");
  imgDisplay.classList.add("img-display");

  // Create the img-showcase element
  const imgShowcase = document.createElement("div");
  imgShowcase.classList.add("img-showcase");

  // Create the product images
  for (let i = 0; i < 4; i++) {
    const img = document.createElement("img");
    img.src = `/imgs/products/${item.cate_name}/${item.prod_img_urls[i]}`;
    img.alt = "Product img";
    imgShowcase.appendChild(img);
  }

  imgDisplay.appendChild(imgShowcase);
  modalImg.appendChild(imgDisplay);

  // Create the img-nav element
  const imgNav = document.createElement("div");
  imgNav.classList.add("img-nav");

  // Create the previous button
  const prevBtn = document.createElement("button");
  prevBtn.classList.add("prevBtn");

  const prevBtnSpan = document.createElement("span");
  prevBtnSpan.classList.add(
    "material-symbols-outlined",
    "arrow-left",
    "primary-text"
  );
  prevBtnSpan.textContent = "arrow_back_ios";

  prevBtn.appendChild(prevBtnSpan);
  imgNav.appendChild(prevBtn);

  // Create the next button
  const nextBtn = document.createElement("button");
  nextBtn.classList.add("nextBtn");

  const nextBtnSpan = document.createElement("span");
  nextBtnSpan.classList.add(
    "material-symbols-outlined",
    "arrow-right",
    "primary-text"
  );
  nextBtnSpan.textContent = "arrow_forward_ios";

  nextBtn.appendChild(nextBtnSpan);
  imgNav.appendChild(nextBtn);

  modalImg.appendChild(imgNav);

  // Create the img-select element
  const imgSelect = document.createElement("div");
  imgSelect.classList.add("img-select");

  // Create the img-items
  for (let i = 0; i < 4; i++) {
    const imgItem = document.createElement("div");
    imgItem.classList.add("img-item");

    const link = document.createElement("a");
    link.href = "#";
    link.setAttribute("data-id", i + 1);

    const img = document.createElement("img");
    img.src = `/imgs/products/${item.cate_name}/${item.prod_img_urls[i]}`;
    img.alt = "Product img";

    link.appendChild(img);
    imgItem.appendChild(link);
    imgSelect.appendChild(imgItem);
  }

  modalImg.appendChild(imgSelect);

  // Append the modal__img element to the appropriate parent element

  const buttonClose = document.createElement("div");
  buttonClose.classList.add("button-close", "button-close1");

  // Create the span element
  const span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "close";

  buttonClose.appendChild(span);

  // Append the button-close element to the appropriate parent element
  modalContainer.appendChild(modalImg);
  modalContainer.appendChild(divModalBody);
  modalContainer.appendChild(buttonClose);
  const productWrapper = document.querySelector(".product__wrapper");
  productWrapper.appendChild(modalProduct);
  // modalProduct.append()
  productItem.appendChild(modalProduct);

  // notification

    // Create the main container div with class "modal-noti"
    const modalNotiDiv = document.createElement('div');
    modalNotiDiv.classList.add('modal-noti');

    // Create the container div with classes "modal-container--noti" and "on-primary-text"
    const modalContainerDiv = document.createElement('div');
    modalContainerDiv.classList.add('modal-container--noti', 'on-primary-text');

    // Create the div with class "noti__icon-check"
    const notiIconCheckDiv = document.createElement('div');
    notiIconCheckDiv.classList.add('noti__icon-check');

    // Create the span with classes "material-symbols-outlined" and "icon--filled"
    const iconSpan = document.createElement('span');
    iconSpan.classList.add('material-symbols-outlined', 'icon--filled');
    iconSpan.textContent = 'check_circle';

    // Append the icon span to the "noti__icon-check" div
    notiIconCheckDiv.appendChild(iconSpan);

    // Create the paragraph element with class "noti__text" and text content
    const textParagraph = document.createElement('p');
    textParagraph.classList.add('noti__text', 'headline-large');
    textParagraph.textContent = 'Thêm vào giỏ hàng thành công';

    // Create the div with class "noti__btn"
    const notiBtnDiv = document.createElement('div');
    notiBtnDiv.classList.add('noti__btn', 'button-close');

    // Create the span with class "material-symbols-outlined" and text content
    const closeSpan = document.createElement('span');
    closeSpan.classList.add('material-symbols-outlined');
    closeSpan.textContent = 'close';

    // Append the close span to the "noti__btn" div
    notiBtnDiv.appendChild(closeSpan);

    // Append the child elements to their respective parent elements
    modalContainerDiv.appendChild(notiIconCheckDiv);
    modalContainerDiv.appendChild(textParagraph);
    modalContainerDiv.appendChild(notiBtnDiv);
    modalNotiDiv.appendChild(modalContainerDiv);

    // Append the main container div to the document body
    productItem.appendChild(modalNotiDiv);
}
// add Js to pop
function addInteractPopUp() {
  const modalItems = document.querySelectorAll(".product__item");
  // fixed
  console.log("this is modal", modalItems);

  modalItems.forEach((item) => {
    // modalProduct tăng giảm số lượng sản phẩm
    const btnView = item.querySelector(".product__button__view1");

    const modalProduct = item.querySelector(".modal-product");

    //   btnView.addEventListener("click", () => {
    //     modalProduct.classList.add("open");
    //   });

    //   const btnClosesProduct = item.querySelector(".button-close");
    //   // modalProduct close

    //   btnClosesProduct.addEventListener("click", () => {
    //     modalProduct.classList.remove("open");
    //   });

    //   modalProduct.addEventListener("click", () => {
    //     modalProduct.classList.remove("open");
    //   });
    //   const modalContainerProduct = item.querySelector(".modal-container--product");
    //   // nhấn bên ngoài thì popup đóng
    //   modalContainerProduct.addEventListener("click", function(event) {
    //     event.stopPropagation();
    //   });

    // modalNoti open
    const btnCloseNoti = item.querySelector(".modal-noti .button-close");
    const modalNoti = item.querySelector(".modal-noti");
    const modalContainerNoti = item.querySelector(".modal-container--noti");
    const modalButtonCart = item.querySelector(".button__cart");
    const modalButtonView = item.querySelector(".button__view");

    // chuyển trang chi tiết sản phẩm
    modalButtonView.addEventListener("click", () => {
      // window.location.href=""
      // window.alert("hello")
    });

    // modalNoti open, modalProduct close
    modalButtonCart.addEventListener("click", () => {
      modalNoti.classList.add("active");
      modalProduct.classList.remove("active");
      setTimeout(() => {
        modalNoti.classList.remove("active");
      }, 5000);
    });
    // modalNoti btn--close

      btnCloseNoti.addEventListener("click", () => {
        modalNoti.classList.remove("active");
      });

      modalNoti.addEventListener("click", () => {
        modalNoti.classList.remove("active");
      });
      // nhấn bên ngoài thì popup đóng
      modalContainerNoti.addEventListener("click", function(event) {
        event.stopPropagation();
      });

    // modalProduct change image product
    const imgs = item.querySelectorAll(".img-select a");

    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((e) => {
      e.classList.remove("active__selected");
    });
    imgBtns[0].classList.add("active__selected");

    imgBtns.forEach((imgItem) => {
      imgItem.addEventListener("click", (event) => {
        event.preventDefault();

        imgBtns.forEach((itemBtn) => {
          itemBtn.classList.remove("active__selected");
        });
        imgItem.classList.add("active__selected");
        imgId = imgItem.dataset.id;
        slideImage();
      });
    });

    function slideImage() {
      const displayWidth = item.querySelector(
        ".img-showcase img:first-child"
      ).clientWidth;

      item.querySelector(".img-showcase").style.transform = `translateX(${
        -(imgId - 1) * displayWidth
      }px)`;
    }

    window.addEventListener("resize", slideImage);

    const myInput = item.querySelector("#my-input");
    const decrementBtn = item.querySelector("#decrement");
    const incrementBtn = item.querySelector("#increment");

    function stepper(action) {
      let min = parseInt(myInput.getAttribute("min"));
      let max = parseInt(myInput.getAttribute("max"));
      let step = parseInt(myInput.getAttribute("step"));
      let value = parseInt(myInput.value);

      let calcStep = action === "increment" ? step * 1 : step * -1;

      let newValue = value + calcStep;
      if (!isNaN(newValue) && newValue >= min && newValue <= max) {
        myInput.value = newValue;
      }
      console.log(action, min, max, step, value);
    }

    decrementBtn.addEventListener("click", () => stepper("decrement"));
    incrementBtn.addEventListener("click", () => stepper("increment"));


    const prevBtn = item.querySelector('.prevBtn');
    const nextBtn = item.querySelector('.nextBtn');
    console.log(prevBtn);
  
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
  });
}

category.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedCategory = item.dataset.category;

    fetch("/products/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ category: selectedCategory })
      body: JSON.stringify({
        category: selectedCategory,
      }),
    })
      .then((respone) => respone.json())
      .then((data) => {
        console.log("this is data :", data.result);
        $(".product__wrapper").empty();
        data.result.forEach((item) => {
          createProduct(item);
        });
      })
      .then(() => {
        $(document).on("click", ".product__button__view1", function (e) {
          e.preventDefault();

          var index = $(this).index(".product__button__view1");
          $(".modal-product").eq(index).addClass("active");
          addInteractPopUp();
        });

        $(document).on("click", ".button-close1", function () {
          $(".modal-product").removeClass("active");
        });
        $(document).on("click", ".title_aside_item", function () {
          window.location.href = "http://localhost:3000/products";
        });
      });
  });
});

//add pop-up when click to Quick View button

$(document).on("click", ".product__button__view1", function (e) {
  e.preventDefault();

  var index = $(this).index(".product__button__view1");
  $(".modal-product").eq(index).addClass("active");
  addInteractPopUp();
});

$(document).on("click", ".button-close1", function () {
  $(".modal-product").removeClass("active");
});
$(document).on("click", ".title_aside_item", function () {
  window.location.href = "http://localhost:3000/products";
});

//ND làm
// Kiểm tra xem tham số 'q' đã tồn tại trong URL hay chưa
const discountSort = document.querySelector(".discount");
let qExists = window.location.search.includes("q");
discountSort.addEventListener("click", function () {
  const hasEffectDiscount = discountSort.classList.contains("effect");
  let href = "";
  console.log(hasEffectDiscount);
  if (hasEffectDiscount) {
    href = qExists
      ? window.location.search.split("&")[0] + "&discount=true"
      : "?discount=true";
  } else {
    href = qExists
      ? window.location.search.split("&")[0]
      : "?discount=true";
  }
  console.log(href);
  fetch("/products/search" + href)
    .then((response) => response.json())
    .then((data) => {
      $(".product__wrapper").empty();
      data.result.forEach((product) => {
        createProduct(product);
      });
    })
    .catch((error) => {
      console.error("Đã xảy ra lỗi:", error);
    });
});
const bestsellerSort = document.querySelector(".best-seller");
bestsellerSort.addEventListener("click", function () {
  const hasEffectBestseller = bestsellerSort.classList.contains("effect");
  let href = "";
  console.log(hasEffectBestseller);
  if (hasEffectBestseller) {
    href = qExists
      ? window.location.search.split("&")[0] + "&bestseller=true"
      : "?bestseller=true";
  } else {
    href = qExists
      ? window.location.search.split("&")[0]
      : "?bestseller=true";
  }
  fetch("/products/search" + href)
    .then((response) => response.json())
    .then((data) => {
      $(".product__wrapper").empty();
      data.result.forEach((product) => {
        createProduct(product);
      });
    })
    .catch((error) => {
      console.error("Đã xảy ra lỗi:", error);
    });
});

const costAZ = document.querySelector(".cost-az");
const checkAZ = document.querySelector("selected");
costAZ.addEventListener("click", function () {
  const hasEffectCostAZ = selected.innerHTML == "Giá: Từ thấp đến cao";
  let href = "";
  console.log(hasEffectCostAZ);
  if (hasEffectCostAZ) {
    href = qExists
      ? window.location.search.split("&")[0] + "&costAZ=true"
      : "?costAZ=true";
  } else {
    href = qExists ? window.location.search.split("&")[0] : "?costAZ=true";
  }
  console.log(href);
  fetch("/products/search" + href)
    .then((response) => response.json())
    .then((data) => {
      $(".product__wrapper").empty();
      data.result.forEach((product) => {
        createProduct(product);
      });
    })
    .catch((error) => {
      console.error("Đã xảy ra lỗi:", error);
    });
});
const costZA = document.querySelector(".cost-za");
const checkZA = document.querySelector("selected");
costZA.addEventListener("click", function () {
  const hasEffectCostZA = selected.innerHTML == "Giá: Từ cao đến thấp";
  let href = "";
  console.log(hasEffectCostZA);

  if (hasEffectCostZA) {
    href = qExists
      ? window.location.search.split("&")[0] + "&costZA=true"
      : "?costZA=true";
  } else {
    href = qExists ? window.location.search.split("&")[0] : "?costZA=true";
  }
  console.log(href);
  fetch("/products/search" + href)
    .then((response) => response.json())
    .then((data) => {
      $(".product__wrapper").empty();
      data.result.forEach((product) => {
        createProduct(product);
      });
    })
    .catch((error) => {
      console.error("Đã xảy ra lỗi:", error);
    });
});
