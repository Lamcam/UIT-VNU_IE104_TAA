document.addEventListener('DOMContentLoaded', () => {
  updateBtnSubmit();
  quantityCtl();
})

// Update event document when changed
document.addEventListener('change', (event) => {
  updateCheckbox(event.target);
  updatePriceItem();

  updateTotalPrice();

  updateBtnSubmit();

  updateTBodyContext();
})

// Update statues of button submit
const updateBtnSubmit = () => {
  const cartItems = document.querySelectorAll('.cart__item');
  const cartItemsChecked = Array.from(cartItems).filter((item) => {
    return item.querySelector('input[name^="cart-item"]').checked;
  });

  const btnSubmit = document.querySelector('.cart__btn--submit');

  if (cartItemsChecked.length === 0) {
    btnSubmit.disabled = true;
  } else {
    btnSubmit.disabled = false;
  }
}

const quantityCtl = () => {
  // console.log($('.item-quantity__wrapper'))
  $('.item-quantity__wrapper').on('click', (e) => {
    const target = e.target;
    // console.log(target);
    const input = $(target).siblings('.item--quantity');
    const value = parseInt(input.val());
    const max = parseInt(input.attr('max'));
    const min = parseInt(input.attr('min'));

    if ($(target).hasClass('increase')) {
      if (value >= max) {
        input.val(max);
      } else {
        input.val(value + 1);
        document.dispatchEvent(new Event('change'));
      }
    } else if ($(target).hasClass('decrease')) {
      if (value <= min) {
        input.val(min);
      } else {
        input.val(value - 1);
        document.dispatchEvent(new Event('change'));
      }
    }
  })
}

// Update price of items
const updatePriceItem = () => {
  const cartItems = $('.cart__item');
  cartItems.each((index, item) => {
    const cost = parseInt($(item).find('.item--price').text());
    const quantity = parseInt($(item).find('.item--quantity').val());
    // console.log(item, cost * quantity)
    $(item).find('.item--total-price').text(cost * quantity);
  });
}

const cartItems = $('.cart__item');
cartItems.each((index, item) => {
  const delBtn = $(item).find('.btn--delete');

  delBtn.on('click', () => {
    const prodId = $(item).attr('data-prod-id');

    cookieHder.createCookie('prodId--delete', prodId, 1);  // a day
  });
})

// Delete cart item
const delCartItem = () => {
  prodId = cookieHder.readCookie('prodId--delete');

  if (!prodId) {
    console.log('prodId not found in cookie');
    return;
  }

  cookieHder.deleteCookie('prodId--delete');

  const data = {
    prodId
  };

  fetch('/account/cart/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    // redirect: 'follow'
  }).then(res => res.json())
    .then(res => {
      if (res.statusCode == 200) {
        alert('Delete success');
        // window.location.reload();
      } else {
        alert('Delete fail');
      }
    })
    .catch(err => console.error(err));

  $('.cart__item[data-prod-id="' + prodId + '"]').remove();
  document.dispatchEvent(new Event('change'));
}

const updateTBodyContext = () => {
  tBody = document.querySelector('.tbody');
  const cartItems = tBody.querySelectorAll('.cart__item');
  if (cartItems.length === 0) {
    tBody.innerHTML = `<p class='tr table__noti headline-small'>Bạn không có bất kỳ sản phẩm nào trong giỏ hàng</p>`;
  }
}

// const cartBtnSumbit = document.querySelector('.cart__btn--submit');

const updateCheckbox = (target) => {
  // console.log('updateCheckbox called by target: ', target);

  const allProdCheckbox = document.querySelector('#cart-item-all');
  // console.log(allProdCheckbox);

  const prodCheckboxes = document.querySelectorAll('input[name^="cart-item"]');
  // console.log(prodCheckboxes);

  const prodCheckboxes__checked = document.querySelectorAll('input[name^="cart-item"]:checked');
  // console.log(prodCheckboxes__checked);

  const updateOneToAll = () => {
    // console.log('updateOneToAll called');

    if (allProdCheckbox.checked) {
      prodCheckboxes.forEach((item) => {
        item.checked = true;
      });
    } else {
      prodCheckboxes.forEach((item) => {
        item.checked = false;
      });
    }
  }

  const updateAllToOne = () => {
    // console.log('updateAllToOne called')

    if (prodCheckboxes__checked.length === 0) {
      // console.log('0')
      allProdCheckbox.checked = false;
      allProdCheckbox.indeterminate = false;
    } else if (prodCheckboxes__checked.length === prodCheckboxes.length) {
      // console.log('1')
      allProdCheckbox.checked = true;
      allProdCheckbox.indeterminate = false;
    } else {
      // console.log('2')
      allProdCheckbox.checked = false;
      allProdCheckbox.indeterminate = true;
    }
  }

  if (target === allProdCheckbox) {
    updateOneToAll();
  // } else if (Array.from(prodCheckboxes).includes(target)) {
  } else {
    updateAllToOne();
  }
}

const updateTotalPrice = () => {
  const cartItems = document.querySelectorAll('.cart__item');
  // console.log(cartItems);

  cartItemsChecked = Array.from(cartItems).filter((item) => {
    return item.querySelector('input[name^="cart-item"]').checked;
  });

  // console.log(cartItemsChecked);

  let totalPrice = cartItemsChecked.reduce((sum, item) => {
    let totalPrice = parseInt(item.querySelector('.item--total-price').innerHTML);
    return sum + totalPrice;
  }, 0);

  // console.log(totalPrice)

  document.querySelector('.cost_value__final--before').innerHTML = totalPrice;

  const discount = parseInt(document.querySelector('.cost_value--discount').innerHTML);

  document.querySelector('.cost_value__final--after').innerHTML = totalPrice - discount > 0 ? totalPrice - discount : 0;
}


const cartSubmit = () => {
  const cartItems = document.querySelectorAll('.cart__item');
  const cartItemsChecked = Array.from(cartItems).filter((item) => {
    return item.querySelector('input[name^="cart-item"]').checked;
  });

  const prodIds = cartItemsChecked.map((item) => {
    return item.getAttribute('data-prod-id');
  })
  
  const prodQuanitys =cartItemsChecked.map(item=>{
    return item.querySelector('.item--quantity').value;

  })
  // console.log("this is",prodQuanitys);

  if (prodIds.length === 0) {
    alert('Bạn chưa chọn sản phẩm nào');
    return;
  }
 
  // console.log(prodIds);
  cookieHder.createCookie('prodIds--order', prodIds.join(','), 1); // 1 day
  cookieHder.createCookie('prodQuanitys--order', prodQuanitys.join(','), 1);
  window.location.href = '/account/order';
}