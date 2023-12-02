
$('.hidden_item').css('display','none');
$(document).on('click','.viewMore',()=>{
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