
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


const orderSubmit = () => {
    const order_datetime = new Date();
    const id = cookieHder.readCookie('id');

    const prodIds = cookieHder.readCookie('prodIds--order').split(',');
    const prodQuanities = cookieHder.readCookie('prodQuanitys--order').split(',');

    console.log(prodIds);
    console.log(prodQuanities);
    
    const pay_id = 1;
    const bank_id = 1;

    const trans_id = 0;

    const loca_id = 1;

    const data = {
        order_datetime,
        id,
        prodIds,
        prodQuanities,
        pay_id,
        bank_id,
        trans_id,
        loca_id
    }

    fetch('/account/orderPost', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {console.log(res); return res.json()})
      .then(data => {
        if (data.statusCode == 500) {
            alert('Lỗi Server');
            return;
        }

        if (data.statusCode == 200) {
            alert("Đặt hàng thành công");
            return;
        }

        alert("unexcept Error");
      })
}