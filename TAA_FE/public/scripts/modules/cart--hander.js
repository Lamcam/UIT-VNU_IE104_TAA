const addToCart = () => {
  const checkAuthenticated = authCtl.checkAuthenticated();
  // console.log(checkAuthenticated)
  if (checkAuthenticated) {
    // const modalActived = document.querySelector('.modal-product.active')
    const modalActived = document.querySelector('.modal-product.active');
    const productID = modalActived?.querySelector('[data-prod-id]').dataset.prodId ?? document.querySelector('input[type="hidden"][name="prod-id"]').value;

    // console.log(productID);

    const data = {
      id: cookieHder.readCookie('id'),
      prod_id: productID
    }

    fetch('/account/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then(response => response.json())
      .then(data => {
        if (data.statusCode == 200) {
          modalCtl.nextModal('#modal--noti-add-cart-success')
          modalCtl.closeModalAfterTime(2000);
          const length = parseInt(cookieHder.readCookie('cart_length')) + 1;
          cookieHder.updateCookie('cart_length', length);
          document.dispatchEvent(new Event('UpdateCart'));
        } else if (data.statusCode == 409) {
          alert('Sản phẩm này đã tồn tại trong giỏ hàng của bạn')
        } else if (data.statusCode == 500) {
          alert('Lỗi server')
        }
      })
      .catch(error => {
        console.log('Lỗi:', error);
      });
  }
}

const orderNow = (event) => {
  const checkAuthenticated = authCtl.checkAuthenticated();

  if (checkAuthenticated) {
    const target = event?.target;
    const productItem = target.closest('.product__item');
    const productID = productItem.querySelector('[data-prod-id]').dataset.prodId;
    const prodQuantity = 1;
    const prodPrice = parseInt(productItem.querySelector('.product__price__current').innerText);

    const data = {
      id: cookieHder.readCookie('id'),
      prod_id: productID,
    }

    fetch('/account/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then(response => response.json())
      .then(data => {
        if (data.statusCode == 200) {
          cookieHder.updateCookie('cart_length', parseInt(cookieHder.readCookie('cart_length')) + 1);
          document.dispatchEvent(new Event('UpdateCart'));
          return;
        }

        if (data.statusCode == 500) {
          alert('Lỗi server')
          return;
        }

        if (data.statusCode == 409) {
          return;
        }
      })
      .catch(error => {
        console.log('Lỗi:', error);
      });

    cookieHder.createCookie('prod_ids--order', productID, 120); // 120 minutes
    cookieHder.createCookie('prod_quantities--order', prodQuantity, 120);
    cookieHder.createCookie('prices--order', prodPrice, 120);
    window.location.href = '/account/order';
  }
}

const cartCtl = {
  addToCart,
  orderNow
}

export default cartCtl