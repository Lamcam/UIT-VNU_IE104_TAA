const addToCart = () => {
  const checkAuthenticated = authCtl.checkAuthenticated();
  console.log(checkAuthenticated)
  if (checkAuthenticated) {
    const modalActived = document.querySelector('.modal-product.active')
    const productID = modalActived.querySelector('[data-prod-id]').dataset.prodId;

    const data = {
      id: cookieHder.readCookie('id'),
      prodId: productID
    }

    // console.log(data)

    // console.log(modalCtl)

    modalCtl.closeModal()
    modalCtl.openModal('#modal--noti-add-cart-success')

    // fetch('/account/cart/add', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data),
    // }).then(response => response.json())
    //   .then(data => {
    //     if (data.statusCode == 200) {
    //       modalCtl.closeModal()
    //       modalCtl.openModal('#modal--noti-add-cart-success')
    //       // modalCtl.closeModalAfterTime(5000)
    //     } else if (data.statusCode == 500) {
    //       alert('Sản phẩm này đã tồn tại trong giỏ hàng của bạn')
    //     }
    //   })
    //   .catch(error => {
    //     console.log('Lỗi:', error);
    //   });
  }
}

const cartCtl = {
  addToCart
}

export default cartCtl