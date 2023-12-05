const updateFavorProductsContent = () => {
  const favorProducts = document.querySelector('.favor-product__wrapper');
  // console.log(favorProducts.innerHTML);
  // console.log(favorProducts.innerHTML.trim() === '');
  if (favorProducts.innerHTML.trim() === '') {
    favorProducts.innerHTML = '<div class="headline-small col-12" style="text-align: center; padding: 2rem;">Bạn chưa có sản phẩm yêu thích</div>';
  }
}

const productItemInteract__new = () => {
  // console.log('productItemInteract__new called');
  const productItems = document.querySelectorAll('.product__item');

  productItems.forEach((item) => {
    // console.log('productItemInteract__new called', item);
    const iconHeart = item.querySelector('.icon_heart');
    iconHeart.addEventListener('click', (event) => {
      productItemHeartInteract__new(event);
    })
  })
}

const productItemHeartInteract__new = (event) => {
  const checkAuthenticated = authCtl.checkAuthenticated();
  // console.log(checkAuthenticated)
  if (checkAuthenticated) {
    const id = cookieHder.readCookie('id');
    const target = event.target.closest('.product__item');
    const prod_id = target.querySelector('[data-prod-id]').dataset.prodId;

    const data = { id, prod_id }

    if (event?.target.classList.contains("icon--filled")) {
      fetch('/account/favor-products/del', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      }).then(response => response.json())
        .then(data => {
          if (data.statusCode == 200) {
            event.target.closest('.product__item').remove();
            updateFavorProductsContent();
          } else if (data.statusCode == 500) {
            alert('Lỗi server')
          }
        })
        .catch(error => {
          console.log('Lỗi:', error);
        });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  productItemInteract__new();
})