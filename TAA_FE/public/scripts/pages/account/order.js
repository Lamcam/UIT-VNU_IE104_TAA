const getLocaId = () => {
  locaId = document.querySelector('.location-item.active');
  loca_id = locaId?.dataset.locaId;

  return loca_id;
}

const getTransId = () => {
  tranId = document.querySelector('input[name="tran_id"]:checked');
  tran_id = tranId?.value;

  return tran_id;
}

const getBankId = () => {
  bankId = document.querySelector('input[name="bank_id"]:checked');
  bank_id = bankId?.value;

  return bank_id;
}

const getPayId = () => {
  payId = document.querySelector('input[name="pay_id"]:checked');
  pay_id = payId?.value;

  return (pay_id == 'pay00') ? pay_id : ((getBankId()) ? pay_id : null);
}

const viewMoreFeature = () => {
  $('.hidden_item').css('display', 'none');
  $(document).on('click', '.viewMore', () => {
    let text = $('.viewMore').html()

    if (text == 'Xem thêm') {
      $('.hidden_item').css('display', 'flex');
      $('.viewMore').text('Thu gọn')
    } else if (text == 'Thu gọn') {
      $('.hidden_item').css('display', 'none');
      $('.viewMore').text('Xem thêm')
    }
  })
}

const updateBtnSubmit = () => {
  // document.querySelector('.cart__btn--submit').disabled = true;

  // if (getTransId() && getPayId()) {
  //   document.querySelector('.cart__btn--submit').disabled = false;
  // }

  document.querySelector('.cart__btn--submit').disabled = !(getTransId() && getPayId());
}

const orderSubmit = () => {
  const order_datetime = new Date();
  const id = cookieHder.readCookie('id');

  const prod_ids = cookieHder.readCookie('prod_ids--order').split(',');
  const prod_quantities = cookieHder.readCookie('prod_quantities--order').split(',');

  const prices = cookieHder.readCookie('prices--order').split(',');

  // console.log(prod_ids, prod_quantities, prices);

  const loca_id = getLocaId();
  const tran_id = getTransId();
  const pay_id = getPayId();
  const bank_id = getBankId();

  // const trans_id = trans;


  const data = {
    order_datetime, id, prod_ids,
    prod_quantities, prices, pay_id,
    bank_id, tran_id, loca_id,
  }

  console.log(data);

  fetch('/account/orderPost', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(data => {
      if (data.statusCode == 500) {
        alert('Lỗi Server');
        return;
      }

      if (data.statusCode == 200) {
        alert("Đặt hàng thành công");
        return;
      }

      alert("Unexcept Error");
    })
}

document.addEventListener('DOMContentLoaded', () => {
  viewMoreFeature();
  updateBtnSubmit();
})

document.addEventListener('change', () => {
  updateBtnSubmit();
})