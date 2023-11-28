// Update event document when changed
document.addEventListener('change', (event) => {
  updateCheckbox(event.target);
  updatePriceItem();

  updateTotalPrice();
})

// Update price of items
const updatePriceItem = () => {
  const cartItems = $('.cart__item');
  cartItems.each((index, item) => {
    const cost = parseInt($(item).find('.item--price').text());
    const quantity = parseInt($(item).find('.item--quantity').val());
    console.log(item, cost * quantity)
    $(item).find('.item--total-price').text(cost * quantity);
  });
}

const cartItems = $('.cart__item');
cartItems.each((index, item) => {
  const delBtn = $(item).find('.btn--delete');

  delBtn.on('click', () => {
    const prodId = $(item).attr('data-prod-id');

    // localStorage.setItem('prodId', prodId);
    // var now = new Date();
    // var time = now.getTime();
    // time += 300000; // 5 minutes in milliseconds
    // now.setTime(time);

    // document.cookie = 'prodId=' + prodId + ';expires=' + now.toUTCString() + ';path=/';
    cookieHder.createCookie('prodId', prodId, 5);

    // console.log(prodId);
    // const data = {
    //   prodId
    // }
    // fetch('/account/cart/delete', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data),
    //   // redirect: 'follow'
    // }).then(res => res.json())
    //   .then(res => {
    //     if (res.statusCode == 200) {
    //       alert('Delete success');
    //       window.location.reload();
    //     } else {
    //       alert('Delete fail');
    //     }
    //   })
    //   .catch(err => console.log(err));
    // item.remove();
  });
})

// quantityBtns.each((index, item) => {
//   item.addEventListener('change', (e) => {
//     e.preventDefault();
//     const quantityInput = $(item).parent().find('.item--quantity');
//     const quantity = parseInt(quantityInput.val());
//     // if ($(item).hasClass('btn--quantity--up')) {
//     //   quantityInput.val(quantity + 1);
//     // } else {
//     //   if (quantity > 1) {
//     //     quantityInput.val(quantity - 1);
//     //   }
//     // }
//     updatePriceItem();
//   });
// })

// delCartBtns.each((index, item) => {
//   item.addEventListener('click', (e) => {
//     e.preventDefault();
//     const prodId = $(item).attr('data-prod-id');
//     const data = {
//       prodId
//     }
//     fetch('/account/cart/delete', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data),
//       // redirect: 'follow'
//     }).then(res => res.json())
//       .then(res => {
//         if (res.statusCode == 200) {
//           alert('Delete success');
//           window.location.reload();
//         } else {
//           alert('Delete fail');
//         }
//       })
//       .catch(err => console.log(err));
//   });
// });

const delCartItem = () => {
  prodId = cookieHder.readCookie('prodId');

  if (!prodId) {
    console.log('prodId not found in cookie');
    return;
  }

  // const data = {
  //   prodId
  // };

  // fetch('/account/cart/delete', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(data),
  //   // redirect: 'follow'
  // }).then(res => res.json())
  //   .then(res => {
  //     if (res.statusCode == 200) {
  //       alert('Delete success');
  //       window.location.reload();
  //     } else {
  //       alert('Delete fail');
  //     }
  //   })
  //   .catch(err => console.log(err));

  $('.cart__item[data-prod-id="' + prodId + '"]').remove();
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
  } else if (Array.from(prodCheckboxes).includes(target)) {
    updateAllToOne();
  }
}

const updateTotalPrice = () => {
  const cartItems = document.querySelectorAll('.cart__item');
  console.log(cartItems);

  cartItemsChecked = Array.from(cartItems).filter((item) => {
    return item.querySelector('input[name^="cart-item"]').checked;
  });

  console.log(cartItemsChecked);

  let totalPrice = cartItemsChecked.reduce((sum, item) => {
    let totalPrice = parseInt(item.querySelector('.item--total-price').innerHTML);
    return sum + totalPrice;
  }, 0);

  console.log(totalPrice)

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

  console.log(prodIds);
  cookieHder.createCookie('prodIds', prodIds.join(','), 1); // 1 day
  // window.location.href = '/account/order';
}


// $(document).on('change', () => {
//   console.log('document clicked')
//   updatePriceItem();

//   updateCheckbox();
// })