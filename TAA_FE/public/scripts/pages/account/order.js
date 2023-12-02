let pay, bank, trans, local, express;

fetch('http://localhost:3000/account/orderGetIdLocal',{

    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    
}).then(respone => respone.json())
    .then (data=> {
        console.log(data.result);
        local = data.result;

    })



$('.hidden_item').css('display','none');
$(document).on('click','.viewMore',() => {
    let text = $('.viewMore').html()
    if( text == 'Xem thêm'){
        console.log('right');
        $('.hidden_item').css('display','flex');
        $('.viewMore').text('Thu gọn')
    }
    else if (text == 'Thu gọn'){
        $('.hidden_item').css('display','none');
        $('.viewMore').text('Xem thêm')
    }
   
    console.log($('.viewMore').html())
    
     
})

$(document).on('click','.section__options',function() {
    
    if ($("#payment-banking").is(":checked")) {
        
        bank = 1;
        pay = 0;

    }   
    else if ($("#payment-cash").is(":checked")){
        
        pay = 1;
        bank = 0

    }

    if ($("#transport-express").is(":checked")) {
        trans = 1;
        express = 0

    }   
    else if ($("#transport-normal").is(":checked")){
        express = 1;
        trans = 0;

    }
});





const orderSubmit = () => {
  const order_datetime = new Date();
  const id = cookieHder.readCookie('id');

  // const prodIds = cookieHder.readCookie('prodIds--order').split(',');
  // const prodQuantities = cookieHder.readCookie('prodQuanitys--order').split(',');
  const prodIds = ["prod0001", "prod0002", "prod0003"].join(',');
  const prodQuantities = [1, 2, 3].join(',');
  const prices = [10000, 20000, 30000];

    console.log(prodIds);
    console.log(prodQuanities);
   
    
    const pay_id = pay;
    const bank_id = bank;

    const trans_id = trans;

    const loca_id = local;

  const data = {
    order_datetime, id, prodIds,
    prodQuantities, prices, pay_id,
    bank_id, trans_id, loca_id,
  }

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