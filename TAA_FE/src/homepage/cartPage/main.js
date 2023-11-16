const strSltCostValue = 'span[name^="cost_value"]';
const strSltCostValueAfter = 'span[name^="cost_value--after"]';

const strSltFinalCostValueBefore = 'span[name^="cost_value--final--before-discount"]';
const strSltDiscountValue = 'span[name^="cost_value--discount"]';
const strSltFinalCostValueAfter = 'span[name^="cost_value--final--after-discount"]';

const checkProd = 'input[id^="f_prod_"]';

const delCartItem = () => {
  $('.cart-list tbody')[0].children[0].remove();
}

const loadTHead = () => {
  $('.cart-list thead').append(`
    <tr>
      <th><span class="btn-icon btn-checkbox">
        <input type="checkbox" id="f_all_prod" name="f_all_prod">
        <label for="f_all_prod">
          <span class="icon material-symbols-outlined">
            check_box_outline_blank</span>
          <span class="icon material-symbols-outlined --checked">
            check_box</span>
          <span class="icon material-symbols-outlined --indeterminate">
            indeterminate_check_box</span>
        </label>
      </span></th>
      <th colspan="2">Sản phẩm</th>
      <th>Giá tiền</th>
      <th>Số lượng</th>
      <th>Thành tiền</th>
      <th></th>
    </tr>`);
}

const loadTBody = (data) => {
  const cartItems = data ?? [1, 2, 3, 4, 5];
  var countShowCartItems = 0;
  const cartItemsLength = cartItems.length;
  if (cartItemsLength > 0) {
    $('.cart-list tbody').empty();
    cartItems.forEach((index, item) => {
      $('.cart-list tbody').append(`
      <tr>
        <th><span class="btn-icon btn-checkbox">
          <input type="checkbox" id="f_prod_${index}" name="f_prod_${index}">
          <label for="f_prod_${index}">
            <span class="icon material-symbols-outlined">
              check_box_outline_blank</span>
            <span class="icon material-symbols-outlined --checked">
              check_box</span>
            <span class="icon material-symbols-outlined --indeterminate">
              indeterminate_check_box</span>
          </label>
        </span></th>
        <td><img src="/TAA_FE/res/imgs/prod0001.png" alt="Image of Product"></td>
        <td>Tên sản phẩm</td>
        <td><span name='cost_value--before' value='100000'>1</span></td>
        <td>
          <input class="text-btn" name="quantity" min="1" max="5" value="1" type="number">
        </td>
        <td><span name='cost_value--after'></span></td>
        <td>
          <button class="btn-icon" onclick="delCartItem()">
            <div class="status-layer">
              <span class="icon material-symbols-outlined">delete</span>
            </div>
          </button>
        </td>
      </tr>`);
    });
  }
}

const loadTFoot = () => { }

const makeOrderActiCheck = () => {
  $('#f_all_prod').on('click', () => {
    if ($('#f_all_prod').is(':checked')) {
      $('input[name^="f_prod_"]').prop('checked', true);
    } else {
      $('input[name^="f_prod_"]').prop('checked', false);
    }
  });

  $('input[name^="f_prod_"]').on('click', () => {
    if ($('input[name^="f_prod_"]:checked').length === $('input[name^="f_prod_"]').length) {
      $('#f_all_prod').prop('checked', true).prop('indeterminate', false);
    } else if ($('input[name^="f_prod_"]:checked').length === 0) {
      $('#f_all_prod').prop('checked', false).prop('indeterminate', false);
    } else {
      $('#f_all_prod').prop('checked', false).prop('indeterminate', true);
    }
  });
}

const loadCostValue = () => {
  $(strSltCostValue).each((index, item) => {
    const cost = $(item).attr('value');
    $(item).text(cost);
  });

  $(strSltCostValueAfter).each((index, item) => {
    const cost = $(item).parent().parent().find(strSltCostValue).attr('value');
    $(item).text(cost);
  });
}

const updCostByQuan = () => {
  $('input[name="quantity"]').each((index, item) => {
    item.addEventListener('change', () => {
      const cost = $(item).parent().parent().find(strSltCostValue).attr('value');
      const quantity = $(item).val();
      $(item).parent().parent().find(strSltCostValueAfter).text(cost * quantity);
    })
  });
}

const loadOrderCost = () => {
  const selectedProducts = $(checkProd + ':checked');
  const totalCost = selectedProducts.toArray().reduce((sum, item) => {
    const cost = parseInt($(item).parent().parent().parent().find(strSltCostValueAfter).text());
    // console.log($(item).parent().parent().parent().find(strSltCostValueAfter).text());
    return sum + cost;
  }, 0);
  $(strSltFinalCostValueBefore).text(totalCost);
}

// const loadOrderCostAfter = () => {
//   const finalCostBefore = $(strSltFinalCostValueBefore)[0].text();
//   const discount = $(strSltDiscountValue)[0].text();
//   console.log(finalCostBefore);
//   console.log(discount);

//   console.log($(strSltFinalCostValueAfter)[0])

//   $(strSltFinalCostValueAfter).text(finalCostBefore - discount);
// }


// Load table of products
$(window).on('load', () => {
  loadTHead();
  loadTBody();
  loadTFoot();

  makeOrderActiCheck();

  loadCostValue();
  updCostByQuan();

  loadOrderCost();
  // loadOrderCostAfter();

  $(checkProd).on('change', () => {
    console.log('change');
    loadOrderCost();
    // loadOrderCostAfter();
  })
});