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

cancel.addEventListener("click", () => {
  select.classList.add("cancel__select");
  select.classList.remove("select__btn");
  selected.innerText = "Giá";
});

//AN làm
const category = document.querySelectorAll(".category");
const createProductItem = (data) => {
  let prodAvai = parseInt(data.prod_num_avai);

  let path = "/imgs/products/" + data.cate_name + "/";
  // Create the outer container div
  // console.log("this is path", path);
  let productItem = document.createElement("div");
  productItem.classList.add(
    "product__item",
    "col-12",
    "col-sm-6",
    "col-md-4",
    "col-lg-4",
  );

  // Create the product image container div
  let productImage = document.createElement("div");
  productImage.classList.add("product__image");
  productItem.appendChild(productImage);

  // Create the front image element
  let backImage = document.createElement("img");
  backImage.src = path + data.prod_img_urls[1];

  backImage.alt = "Image of Products";
  backImage.loading = "lazy";
  backImage.classList.add("img_back");
  productImage.appendChild(backImage);

  // Create the back image element
  let frontImage = document.createElement("img");
  frontImage.src = path + data.prod_img_urls[0];

  frontImage.loading = "lazy";
  frontImage.alt = "Image of Products";
  frontImage.classList.add("img_front");
  productImage.appendChild(frontImage);

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
  let productNameLink = document.createElement("a");
  productNameLink.classList.add("status-layer");
  productNameLink.href = `/products/detail?id=${data.prod_id}`;
  productNameLink.textContent = `${data.prod_name}`;

  // Create the product name heading
  let productName = document.createElement("h3");
  productName.classList.add("product__name", "body-large");

  // Append the anchor to the heading
  productName.appendChild(productNameLink);
  productBody.appendChild(productName);


  // Create the product price container div
  let productPrice = document.createElement("div");
  productPrice.classList.add("product__price", "label-large");
  productBody.appendChild(productPrice);

  // Create the current price element
  let currentPrice = document.createElement("p");
  currentPrice.classList.add(
    "cost_value",
    "product__price__current",
  );
  currentPrice.textContent = `${parseInt(data.prod_cost) * (1 - parseFloat(data.prod_discount))}`;
  productPrice.appendChild(currentPrice);

  // Create the discounted price element
  let discountedPrice = document.createElement("p");
  discountedPrice.classList.add(
    "cost_value",
    "product__price__discount",
    "outline-variant-text",
  );
  discountedPrice.textContent = `${data.prod_cost}`;
  productPrice.appendChild(discountedPrice);

  // Create the product discount paragraph
  let productDiscount = document.createElement("p");
  productDiscount.classList.add(
    "product__discount",
    "title-medium",
    "error-text"
  );
  productDiscount.textContent = `Giảm ${data.prod_discount * 100}%`;
  productBody.appendChild(productDiscount);

  // Create the product stock label
  let productStock = document.createElement("p");
  let state = prodAvai ? "Còn hàng" : "Hết hàng";
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

  if (prodAvai) {
    // Create the quick view button
    let quickViewButton = document.createElement("div");
    quickViewButton.classList.add(
      "product__button__view",
      // "product__button__view1",
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
    buyNowLink.href = "/account/order";
    buyNowLink.textContent = "Mua ngay";
    buyNowButton.appendChild(buyNowLink);

    // Append the product item to the desired container/element
    let container = document.querySelector(".product__wrapper");
    container.appendChild(productItem);
  }

  if (prodAvai) {
    // generate pop-up
    // Create the root element with class "modal-product"
    const divModalBody = document.createElement("div");
    divModalBody.classList.add("modal__body", "col-12", "col-lg-6");
    const pProductName = document.createElement("p");
    pProductName.classList.add("modal__product__name", "headline-medium");
    pProductName.innerHTML = data.prod_name;

    const divModalInfoRate = document.createElement("div");
    divModalInfoRate.classList.add("modal__info__rate");

    const divRateStar = document.createElement("div");
    divRateStar.classList.add("rate__star", "title-medium");
    divRateStar.textContent = "4.5";

    const spanStarFilled1 = document.createElement("span");
    spanStarFilled1.classList.add("material-symbols-outlined", "icon--filled");
    spanStarFilled1.textContent = "star";

    const spanStarFilled2 = document.createElement("span");
    spanStarFilled2.classList.add("material-symbols-outlined", "icon--filled");
    spanStarFilled2.textContent = "star";

    const spanStarFilled3 = document.createElement("span");
    spanStarFilled3.classList.add("material-symbols-outlined", "icon--filled");
    spanStarFilled3.textContent = "star";

    const spanStarFilled4 = document.createElement("span");
    spanStarFilled4.classList.add("material-symbols-outlined", "icon--filled");
    spanStarFilled4.textContent = "star";

    const spanStarFilled5 = document.createElement("span");
    spanStarFilled5.classList.add("material-symbols-outlined", "icon--filled");
    spanStarFilled5.textContent = "star_rate_half";

    const spanRateNumber = document.createElement("span");
    spanRateNumber.classList.add("rate__number", "title-medium");
    spanRateNumber.textContent = "5 đánh giá";

    const spanNumberBuy = document.createElement("span");
    spanNumberBuy.classList.add("number__buy", "title-medium");
    spanNumberBuy.innerHTML = data.prod_num_sold + " đã bán";

    const divModalPrice = document.createElement("div");
    divModalPrice.classList.add("modal__price");

    const pCost = document.createElement("p");
    pCost.classList.add("cost_value", "cost", "body-medium");
    pCost.innerHTML = data.prod_cost;

    const pCostDiscount = document.createElement("p");
    pCostDiscount.classList.add("cost_value", "cost__discount", "headline-small");
    pCostDiscount.innerHTML = data.prod_cost * (1 - data.prod_discount);

    const divPercentDiscount = document.createElement("div");
    divPercentDiscount.classList.add("percent__discount", "body-medium");
    divPercentDiscount.innerHTML = "Giảm " + data.prod_discount * 100 + "%";

    const divModalSize = document.createElement("div");
    divModalSize.classList.add("modal__size", "label-large");

    const pSizeTitle = document.createElement("p");
    pSizeTitle.classList.add("size__title", "bold");
    pSizeTitle.textContent = "Kích thước:";

    const divSizeValue = document.createElement("div");
    divSizeValue.classList.add("size__value", "outline-text");
    divSizeValue.textContent = "Freestyle";

    const divModalQuantity = document.createElement("div");
    divModalQuantity.classList.add("modal__quantity");

    const divQuantityTitle = document.createElement("div");
    divQuantityTitle.classList.add("quantity__title", "label-large", "bold");
    divQuantityTitle.textContent = "Số lượng: ";

    const divQuantityProduct = document.createElement("div");
    divQuantityProduct.classList.add("quantity__product", "outline-text", "label-large");

    const divDecrement = document.createElement("div");
    // divDecrement.id = "decrement";
    divDecrement.classList.add("quantity__product-decrement", "outline-text");
    divDecrement.textContent = "-";

    const inputQuantity = document.createElement("input");
    inputQuantity.type = "number";
    inputQuantity.min = "1";
    inputQuantity.max = data.prod_num_avai;
    inputQuantity.step = "1";
    inputQuantity.value = "1";
    // inputQuantity.id = "my-input";
    inputQuantity.classList.add("my-input");
    inputQuantity.disabled = true;

    const divIncrement = document.createElement("div");
    // divIncrement.id = "increment";
    divIncrement.classList.add("quantity__product-increment", "outline-text");
    divIncrement.textContent = "+";

    const pQuantityStock = document.createElement("p");
    pQuantityStock.classList.add("quantity__stock", "body-small");
    pQuantityStock.innerHTML = data.prod_num_avai + " sản phẩm sẵn có";

    const divModalButton = document.createElement("div");
    divModalButton.classList.add("modal__button");

    const buttonCart = document.createElement("button");
    buttonCart.classList.add("btn-icon-label", "btn--filled-con", "button__cart");
    buttonCart.onclick = cartCtl.addToCart;
    buttonCart.innerHTML = `
      <span class="status-layer">
        <span class="icon icon--filled material-symbols-outlined">
            add_shopping_cart</span>
        <span class="label" >Thêm vào giỏ hàng</span>
      </span>
    `;

    const buttonView = document.createElement("button");
    // buttonView.classList.add("button__view btn--filled btn-filled");
    buttonView.classList.add('btn-filled', 'button__view', 'btn--filled')
    buttonView.dataset.prodId = data.prod_id;
    buttonView.innerHTML = `
      <a class='status-layer' href='/products/detail?id=${data.prod_id}'>Xem chi tiết</a>
    `;

    const divModalContext = document.createElement("div");
    divModalContext.classList.add("modal__context", "body-large");

    const divContextInfo = document.createElement("div");
    divContextInfo.classList.add("context__info", "mt-12");

    const divContextInfoTitle = document.createElement("div");
    divContextInfoTitle.classList.add("context__info__title");
    divContextInfoTitle.textContent = "THÔNG TIN SẢN PHẨM";

    const ulContextInfoBody = document.createElement("ul");
    ulContextInfoBody.classList.add("context__info__body");

    const liInfo1 = document.createElement("li");
    liInfo1.textContent = "Đảm bảo hàng có chất lượng thương hiệu.";

    const liInfo2 = document.createElement("li");
    liInfo2.textContent = "Hàng luôn có sẵn ở TAA.";

    const liInfo3 = document.createElement("li");
    liInfo3.textContent = "Phong cách Unisex, phù hợp Nam/Nữ.";

    ulContextInfoBody.appendChild(liInfo1);
    ulContextInfoBody.appendChild(liInfo2);
    ulContextInfoBody.appendChild(liInfo3);

    const divContextDetail = document.createElement("div");
    divContextDetail.classList.add("context__detail", "mt-24");

    const divContextDetailTitle = document.createElement("div");
    divContextDetailTitle.classList.add("context__detail__title");
    divContextDetailTitle.textContent = "THÔNG TIN THƯƠNG HIỆU:";

    const ulContextDetailBody = document.createElement("ul");
    ulContextDetailBody.classList.add("context__detail__body");

    const liDetail1 = document.createElement("li");
    liDetail1.textContent =
      "- Thương hiệu TAA - Three Accessories Appreciate đã được đăng kí bảo hộ năm 2023.";
    const liDetail2 = document.createElement("li");
    liDetail2.textContent =
      "- TAA đã có cửa hàng tại HCM và 100.000 KH mua sắm mỗi năm.";

    const liDetail3 = document.createElement("li");
    liDetail3.textContent =
      "- Phương châm của TAA là luôn khách hàng lên hàng đầu, chứng tôi sẽ cố gắng thực hiện hóa mọi nhu cầu của bạn.";

    ulContextDetailBody.appendChild(liDetail1);
    ulContextDetailBody.appendChild(liDetail2);
    ulContextDetailBody.appendChild(liDetail3);

    // Append the elements to the appropriate parents
    divRateStar.appendChild(spanStarFilled1);
    divRateStar.appendChild(spanStarFilled2);
    divRateStar.appendChild(spanStarFilled3);
    divRateStar.appendChild(spanStarFilled4);
    divRateStar.appendChild(spanStarFilled5);
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
    modalContainer.classList.add("modal-container--product", "modal__content", "row");

    const modalProduct = document.createElement("div");
    modalProduct.classList.add("modal-product", "modal");

    // modalProduct.appendChild(modalContainer);

    // img
    const modalImg = document.createElement("div");
    modalImg.classList.add("modal__img", "row", "col-12", "col-lg-6");

    // Create the img-display element
    const imgDisplay = document.createElement("div");
    imgDisplay.classList.add("img-display", 'col-12');

    // Create the img-showcase element
    const imgShowcase = document.createElement("div");
    imgShowcase.classList.add("img-showcase");

    // Create the product images
    for (let i = 0; i < 4; i++) {
      const img = document.createElement("img");
      img.loading = 'lazy'
      img.src = `/imgs/products/${data.cate_name}/${data.prod_img_urls[i]}`;
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
    imgSelect.classList.add("img-select", "row", "col-12");

    // Create the img-items
    for (let i = 0; i < 4; i++) {
      const imgItem = document.createElement("div");
      imgItem.classList.add("img-item", "col-3");

      const link = document.createElement("a");
      link.href = "#";
      link.setAttribute("data-id", i + 1);

      const img = document.createElement("img");
      img.src = `${path}${data.prod_img_urls[i]}`;
      img.loading = 'lazy'
      img.alt = "Product img";

      link.appendChild(img);
      imgItem.appendChild(link);
      imgSelect.appendChild(imgItem);
    }

    modalImg.appendChild(imgSelect);

    const buttonClose = document.createElement("button");
    buttonClose.classList.add('btn-icon', 'modal__btn--close');
    buttonClose.setAttribute('onclick', 'modalCtl.closeModal()');
    buttonClose.innerHTML = `
      <span class="status-layer icon material-symbols-outlined icon--filled">
        close
      </span>
    `;

    // Append the button-close element to the appropriate parent element
    modalContainer.appendChild(modalImg);
    modalContainer.appendChild(divModalBody);
    modalContainer.appendChild(buttonClose);
    const productWrapper = document.querySelector(".product__wrapper");
    // productWrapper.appendChild(modalProduct);
    modalProduct.appendChild(modalContainer);
    productItem.appendChild(modalProduct);
    // console.log(modalContainer, modalProduct, productWrapper, productItem)
  }
}


category.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedCategory = item.dataset.category;
    fetch("/products/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: selectedCategory,
      }),
    }).then((respone) => respone.json())
      .then((data) => {
        // console.log("this is data :", data.result);
        $(".product__wrapper").empty();
        $('.not-found-search').empty();
        data.result.forEach((item) => {
          createProductItem(item);
        });
        document.dispatchEvent(new Event("ReloadProducts"));
      })
    const hidePagination = document.querySelector(".pagination");
    hidePagination.style.display = "none";
  });
});

//ND làm
// Kiểm tra xem tham số 'q' đã tồn tại trong URL hay chưa
const discountSort = document.querySelector(".discount");
let qExists = window.location.search.includes("search");
discountSort.addEventListener("click", function () {
  const hasEffectDiscount = discountSort.classList.contains("effect");
  let href = "";
  console.log(hasEffectDiscount);
  if (!hasEffectDiscount) {
    href = qExists
      ? window.location.search.split("&")[0] + "&discount=true"
      : "?discount=true";
  } else {
    href = qExists
      ? window.location.search.split("&")[0]
      : "?discount=true";
  }
  console.log(href);
  // fetch("/products/search" + href)
  //     .then((response) => response.json())
  //     .then((data) => {
  //         $(".product__wrapper").empty();
  //         data.result.forEach((product) => {
  //             createProduct(product);
  //         });
  //     })
  //     .catch((error) => {
  //         console.error("Đã xảy ra lỗi:", error);
  //     });
  window.location.href = "/products" + href;
});
const bestsellerSort = document.querySelector(".best-seller");
bestsellerSort.addEventListener("click", function () {
  const hasEffectBestseller = bestsellerSort.classList.contains("effect");
  let href = "";
  console.log(hasEffectBestseller);
  if (!hasEffectBestseller) {
    href = qExists
      ? window.location.search.split("&")[0] + "&bestseller=true"
      : "?bestseller=true";
  } else {
    href = qExists
      ? window.location.search.split("&")[0]
      : "?bestseller=true";
  }
  // fetch("/products/search" + href)
  //     .then((response) => response.json())
  //     .then((data) => {
  //         $(".product__wrapper").empty();
  //         data.result.forEach((product) => {
  //             createProduct(product);
  //         });
  //     })
  //     .catch((error) => {
  //         console.error("Đã xảy ra lỗi:", error);
  //     });
  window.location.href = "/products" + href;
});

const costAZ = document.querySelector(".cost-az");
const checkAZ = document.querySelector("selected");
costAZ.addEventListener("click", function () {
  const hasEffectCostAZ = selected.innerHTML == "Giá: Từ thấp đến cao";
  let href = "";
  console.log(hasEffectCostAZ);
  if (!hasEffectCostAZ) {
    href = qExists
      ? window.location.search.split("&")[0] + "&costAZ=true"
      : "?costAZ=true";
  } else {
    href = qExists ? window.location.search.split("&")[0] : "?costAZ=true";
  }
  console.log(href);
  // fetch("/products/search" + href)
  //     .then((response) => response.json())
  //     .then((data) => {
  //         $(".product__wrapper").empty();
  //         data.result.forEach((product) => {
  //             createProduct(product);
  //         });
  //     })
  //     .catch((error) => {
  //         console.error("Đã xảy ra lỗi:", error);
  //     });
  window.location.href = "/products" + href;
});
const costZA = document.querySelector(".cost-za");
const checkZA = document.querySelector("selected");
costZA.addEventListener("click", function () {
  const hasEffectCostZA = selected.innerHTML == "Giá: Từ cao đến thấp";
  let href = "";
  console.log(hasEffectCostZA);

  if (!hasEffectCostZA) {
    href = qExists
      ? window.location.search.split("&")[0] + "&costZA=true"
      : "?costZA=true";
  } else {
    href = qExists ? window.location.search.split("&")[0] : "?costZA=true";
  }
  console.log(href);
  // fetch("/products/search" + href)
  //     .then((response) => response.json())
  //     .then((data) => {
  //         $(".product__wrapper").empty();
  //         data.result.forEach((product) => {
  //             createProduct(product);
  //         });
  //     })
  //     .catch((error) => {
  //         console.error("Đã xảy ra lỗi:", error);
  //     });
  window.location.href = "/products" + href;
});


const reloadProducts = () => {
  $(document).on('click','.aside__item.title_aside_item',function(){
    window.location.href='http://localhost:3000/products';
  })
}

reloadProducts();