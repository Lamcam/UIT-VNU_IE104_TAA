const addToCart = () => {
  const checkAuthenticated = authCtl.checkAuthenticated();
  // console.log(checkAuthenticated)
  if (checkAuthenticated) {
    // const modalActived = document.querySelector('.modal-product.active')
    const modalActived = document.querySelector('.modal-product.active');
    const productID = modalActived.querySelector('[data-prod-id]').dataset.prodId;

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

const cartCtl = {
  addToCart
}

export default cartCtl