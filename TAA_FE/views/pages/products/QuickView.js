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
        pCostDiscount.innerHTML =
          item.prod_cost * (1 - item.prod_discount) + "đ";
 
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
        divQuantityProduct.className =
          "quantity__product outline-text label-large";

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
        buttonCart.className = "button__cart";
        buttonCart.innerHTML = `
  <span class="material-symbols-outlined">
    add_shopping_cart
  </span>
  Thêm vào giỏ hàng
`;

        const buttonView = document.createElement("button");
        buttonView.className = "button__view btn--filled";
        buttonView.innerHTML =
          "<a href='/products/detail?id='" + item.prod_id + ">Xem chi tiết</a>";

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
        liDetail3.textContent = "- Giặt bằng nước lạnh không dùng bột giặt trong lần giặt đầu tiên.";


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

        let container1 = document.querySelector(".product__wrapper");
        container.appendChild(divModalBody);
        divModalBody.style.display = 'none';      
       
        $(document).on('click','.product__button__view',function(){
            console.log("add") 
            $('.modal-product').addClass('open');
        })
        // $(document).on('click','.',function(){
        //     console.log("rm")
        //     $('.modal-product').addClass('open');
        // })
  


      