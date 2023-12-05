const addLocation = () => {
  const name = document.getElementById("f_add_location_per_name").value.trim();
  const phone = document.getElementById("f_add_location_phone").value.trim();
  const address = document
    .getElementById("f_add_location_address")
    .value.trim();
  const detail = document.getElementById("f_add_location_detail").value.trim();
  const id = cookieHder.readCookie("id");
  const data = {
    name,
    phone,
    address,
    detail,
    id,
  };

  if(!checkEmpty(data)) return ;
  modalCtl.nextModal('#modal--noti') // continue

  fetch("/account/information/addLocal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("this is", data);
      changeContent(data);
    })
    .then()
    .catch((error) => {
      console.log(error);
    });
};

const changeContent = (data) => {
  let order_loca = `
    <div class="row mt-12 body-medium location-item active" data-loca-id='${data.id}'>
      <div class="col-7">
        <p class="location-item__pers-name">${data.name}</p>
        <div class="mt-8">
          <span>SĐT: </span>
          <span class="location-item__phone">${data.phone}</span><br>
        </div>
        <p class="location-item__address mt-8">${data.detail}, ${data.address}
        </p>
      </div>
      <div class="col-5 location-item--right">
        <span>
          <button class="btn-icon-label btn--filled" onclick="modalCtl.openModal('#modal--change-address')">
            <span class="status-layer">
              <span class="icon icon--filled material-symbols-outlined">
                edit</span>
              <span class="label">Thay đổi địa chỉ</span>
            </span>
          </button>
        </span>
        <span class="headline-small primary-text">Mặc định</span>
      </div>
    </div>
  `;

  let info_loca = `<div class="location-item mt-12">
  <div class="location-item__wrapper body-medium">
    <div class="row">
      <span>${data.name}</span>
    </div>
    <div class="row mt-16">
      <span>SDT: </span><span>*******${data.phone.slice(-3)}</span>
    </div>
    <div class="row mt-16">
      <span>${data.address + ', ' +data.detail}</span>
    </div>
    <div class="location-btns__wrapper">
      <button class="location-item__btn--del btn-icon" onclick="modalCtl.openModal('#modal--del-location')">
        <span class="status-layer icon material-symbols-outlined">
          delete</span>
      </button>
      <button class="location-item__btn--default btn--outlined" onclick="">
        <span class="status-layer unfilled-default location-btn">Thiết lập mặc định</span>
      </button>
      <button onclick="modalCtl.openModal('#modal--edit-location')" class="location-item__btn--edit btn--filled btn-icon-label">
        <span class="status-layer full-edit icon material-symbols-outlined">
          edit</span>
        <span class="status-layer full-edit label">Sửa</span>
      </button>
    </div>
  </div>
</div>`

  //   <div class="col-7">
  //   <p class="location-item__pers-name">${data.name}</p>
  //   <div class="mt-8">
  //     <span>SĐT: </span>
  //     <span class="location-item__phone">${data.phone}</span><br>
  //   </div>
  //   <p class="location-item__address mt-8"> ${data.detail}, ${data.address}
  //   </p>
  // </div>
  // <div class="col-5 location-item--right default-and-btn">
  //   <span>
  //   <button type='button' class="btn-icon-label btn--filled" onclick="modalCtl.openModal("#modal--change-address")">
  //     <span class="status-layer">
  //         <span class="icon icon--filled material-symbols-outlined">
  //               edit</span>
  //         <span class="label">Thay đổi địa chỉ</span>
  //     </span>
  //   </button>
  //   </span>
  //     <span class="headline-small primary-text">Mặc định</span>
  //   </div>
  // </div>
  console.log("preset at ", window.location.href);
  const currentLocal = window.location.href;
  const spanContentDefault = '<span class="status-layer unfilled-default location-btn">Mặc định</span>'
  const spanContent = '<span class="status-layer filled-default location-btn">Thiết lập mặc định</span>'
  if (currentLocal == "http://127.0.0.1:3000/account/order" || currentLocal == 'http://localhost:3000/account/order' ) {
    console.log("this is orderPage");
    $(".location__wrapper").empty();
    order_loca = order_loca.split("`");
    order_loca = order_loca.join("");
    modalCtl.closeModal();
    // $('#modal--add-location').removeClass('active');
    $(".location__wrapper").append(order_loca);
  }
  else if (currentLocal == 'http://127.0.0.1:3000/account/information' || currentLocal == 'http://localhost:3000/account/information' ) {
    console.log('This is account PAge');
    info_loca = info_loca.split("`");
    info_loca = info_loca.join("");
    $('.location-list').append(info_loca);

    $(document).on('click','.location-item__btn--default',function(){
      let status = $(this).text().trim();
      console.log("this is status",status);
      if (status == 'Thiết lập mặc định') {
        $('.location-item__btn--default').html(spanContent);
        $(this).html(spanContentDefault);
      }
      else{
        console.log("else");
      }
    })
   


  }
};

const isPhoneValid = (phone) => {
  /*
  Regular expression to validate Vietnamese phone numbers:
  Regular Expression Explanation:
  ^                   : Asserts the start of the string.
  (0?)                : Optionally matches a leading zero (0).
  (3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9]) :
    - 3[2-9]          : Starts with 3 and is followed by a digit from 2 to 9.
    - 5[6|8|9]        : Starts with 5 and is followed by either 6, 8, or 9.
    - 7[0|6-9]        : Starts with 7 and is followed by either 0 or a digit from 6 to 9.
    - 8[0-6|8|9]      : Starts with 8 and is followed by either a digit from 0 to 6, 8, or 9.
    - 9[0-4|6-9]      : Starts with 9 and is followed by either a digit from 0 to 4 or a digit from 6 to 9.
  [0-9]{7}            : Matches exactly 7 digits (0-9).
  $                   : Asserts the end of the string.
  */
  const re = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

  // Test if the provided phone number matches the regular expression:
  return phone.length > 8 && re.test(phone);
};

checkEmpty = (obj)=>{
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === null || obj[key] === '' ) {
        alert('Hãy điền hết tất cả các trường');
        return false;
      }
    }
    

    return true;
}



// const accountHder = {
//   addLocation
// }

// export default accountHder
