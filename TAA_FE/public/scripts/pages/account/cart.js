document.addEventListener('DOMContentLoaded', () => {
  updateBtnSubmit();
  quantityCtl();
})

// Update event document when changed
document.addEventListener('change', (event) => {
  // console.log('change event called by target: ', event.target);

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
    const prod_id = $(item).attr('data-prod-id');

    cookieHder.createCookie('prod_id--delete', prod_id, 1);  // a day
  });
})

// Delete cart item
const delCartItem = () => {
  prod_id = cookieHder.readCookie('prod_id--delete');

  if (!prod_id) {
    console.log('prodId not found in cookie');
    return;
  }

  cookieHder.deleteCookie('prod_id--delete');

  const data = {
    prod_id
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

  let totalPriceBefore = cartItemsChecked.reduce((sum, item) => {
    const priceBefore = parseInt(item.querySelector('.item--price-before').innerHTML);
    const quantity = parseInt(item.querySelector('.item--quantity').value);
    return sum + priceBefore * quantity;
  }, 0);

  let totalDiscount = cartItemsChecked.reduce((sum, item) => {
    const priceBefore = parseInt(item.querySelector('.item--price-before').innerHTML);
    const price = parseInt(item.querySelector('.item--price').innerHTML);
    const quantity = parseInt(item.querySelector('.item--quantity').value);
    return sum + (priceBefore - price) * quantity;
  }, 0);

  // console.log(totalPrice)

  document.querySelector('.cost_value__final--before').innerHTML = totalPriceBefore;

  document.querySelector('.cost_value--discount').innerHTML = totalDiscount;

  document.querySelector('.cost_value__final--after').innerHTML = totalPriceBefore - totalDiscount;
}


const cartSubmit = () => {
  const cartItems = document.querySelectorAll('.cart__item');
  const cartItems__checked = Array.from(cartItems).filter((item) => {
    return item.querySelector('input[name^="cart-item"]').checked;
  });

  const prod_ids = cartItems__checked.map((item) => {
    return item.getAttribute('data-prod-id');
  })

  const prod_quanities = cartItems__checked.map(item => {
    return item.querySelector('.item--quantity').value;
  })

  const prices = cartItems__checked.map(item => {
    return item.querySelector('.item--price').innerHTML;
  })

  // console.log(prices)

  if (prod_ids.length === 0) {
    alert('Bạn chưa chọn sản phẩm nào');
    return;
  }


  cookieHder.createCookie('prod_ids--order', prod_ids.join(','), 1); // 1 day
  cookieHder.createCookie('prod_quantities--order', prod_quanities.join(','), 1);
  cookieHder.createCookie('prices--order', prices.join(','), 1);
  window.location.href = '/account/order';
}