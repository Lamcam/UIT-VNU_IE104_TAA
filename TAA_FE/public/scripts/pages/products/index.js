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

  for (let item of items) item.classList.remove("active");

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
// const btnViews = document.querySelectorAll(".product__button__view");
// const btnSells = document.querySelectorAll(".product__button__sell");
// // const modalProducts = document.querySelectorAll('.modal-product')
// const btnClosesProduct = document.querySelector('.modal-product .button-close')
// const modalItems = document.querySelectorAll('.product__item')
document.addEventListener("DOMContentLoaded", function () {

  // modalItems.forEach((item) => {
  //   // modalProduct tăng giảm số lượng sản phẩm
  //   const btnView = item.querySelector(".product__button__view");
  //   const modalProduct = item.querySelector(".modal-product");
  //   btnView.addEventListener("click", () => {
  //     modalProduct.classList.add("open");
  //   });

  //   const btnClosesProduct = item.querySelector(".btn--close");
  //   // modalProduct close
  //   btnClosesProduct.addEventListener("click", () => {
  //     modalProduct.classList.remove("open");
  //   });

  //   modalProduct.addEventListener("click", () => {
  //     modalProduct.classList.remove("open");
  //   });
  //   const modalContainerProduct = item.querySelector(
  //     ".modal-container--product"
  //   );
  //   // nhấn bên ngoài thì popup đóng
  //   modalContainerProduct.addEventListener("click", function (event) {
  //     event.stopPropagation();
  //   });

  //   // modalNoti open
  //   const btnCloseNoti = item.querySelector(".modal-noti .btn--close");
  //   const modalNoti = item.querySelector(".modal-noti");
  //   const modalContainerNoti = item.querySelector(".modal-container--noti");
  //   const modalButtonCart = item.querySelector(".button__cart");
  //   const modalButtonView = item.querySelector(".button__view");

  //   // chuyển trang chi tiết sản phẩm
  //   modalButtonView.addEventListener("click", () => {
  //     // window.location.href=""
  //     // window.alert("hello")
  //   });

  //   // modalNoti open, modalProduct close
  //   modalButtonCart.addEventListener("click", () => {
  //     modalNoti.classList.add("open");
  //     modalProduct.classList.remove("open");
  //     setTimeout(() => {
  //       modalNoti.classList.remove("open");
  //     }, 5000);
  //   });
  //   // modalNoti btn--close

  //   btnCloseNoti.addEventListener("click", () => {
  //     modalNoti.classList.remove("open");
  //   });

  //   modalNoti.addEventListener("click", () => {
  //     modalNoti.classList.remove("open");
  //   });
  //   // nhấn bên ngoài thì popup đóng
  //   modalContainerNoti.addEventListener("click", function (event) {
  //     event.stopPropagation();
  //   });

  //   // modalProduct change image product
  //   const imgs = item.querySelectorAll(".img-select a");
  //   const imgBtns = [...imgs];
  //   let imgId = 1;
  //   imgBtns[0].classList.add("active__selected");

  //   imgBtns.forEach((imgItem) => {
  //     imgItem.addEventListener("click", (event) => {
  //       event.preventDefault();
  //       imgBtns.forEach((itemBtn) => {
  //         itemBtn.classList.remove("active__selected");
  //       });
  //       imgItem.classList.add("active__selected");
  //       imgId = imgItem.dataset.id;
  //       slideImage();
  //     });
  //   });

  //   function slideImage() {
  //     const displayWidth = item.querySelector(
  //       ".img-showcase img:first-child"
  //     ).clientWidth;

  //     item.querySelector(".img-showcase").style.transform = `translateX(${-(imgId - 1) * displayWidth
  //       }px)`;
  //   }

  //   window.addEventListener("resize", slideImage);

  //   const myInput = item.querySelector("#my-input");
  //   const decrementBtn = item.querySelector("#decrement");
  //   const incrementBtn = item.querySelector("#increment");

  //   function stepper(action) {
  //     let min = parseInt(myInput.getAttribute("min"));
  //     let max = parseInt(myInput.getAttribute("max"));
  //     let step = parseInt(myInput.getAttribute("step"));
  //     let value = parseInt(myInput.value);

  //     let calcStep = action === "increment" ? step * 1 : step * -1;

  //     let newValue = value + calcStep;
  //     if (!isNaN(newValue) && newValue >= min && newValue <= max) {
  //       myInput.value = newValue;
  //     }
  //     console.log(action, min, max, step, value);
  //   }

  //   decrementBtn.addEventListener("click", () => stepper("decrement"));
  //   incrementBtn.addEventListener("click", () => stepper("increment"));
  // });

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
    quickViewButton.classList.add("product__button__view");
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
  }

  category.forEach((item) => {
    item.addEventListener("click", () => {
      const selectedCategory = item.dataset.category;
      fetch("http://localhost:3000/products/category", {
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
        });
    });
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
  const checkAZ = document.querySelector("selected")
  costAZ.addEventListener("click", function () {
    const hasEffectCostAZ = (selected.innerHTML == "Giá: Từ thấp đến cao");
    let href = "";
    console.log(hasEffectCostAZ)
    if (hasEffectCostAZ) {
      href = qExists
        ? window.location.search.split("&")[0] + "&costAZ=true"
        : "?costAZ=true";
    } else {
      href = qExists ? window.location.search.split("&")[0] : "?costAZ=true";
    }
    console.log(href)
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
  const checkZA = document.querySelector("selected")
  costZA.addEventListener("click", function () {
    const hasEffectCostZA = (selected.innerHTML == "Giá: Từ cao đến thấp");
    let href = "";
    console.log(hasEffectCostZA)

    if (hasEffectCostZA) {
      href = qExists
        ? window.location.search.split("&")[0] + "&costZA=true"
        : "?costZA=true";
    } else {
      href = qExists ? window.location.search.split("&")[0] : "?costZA=true";
    }
    console.log(href)
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
})
