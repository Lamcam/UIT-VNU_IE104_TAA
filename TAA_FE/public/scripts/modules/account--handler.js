const addLocation = () => {

  const name = document.getElementById("f_add_location_per_name").value.trim();
  const phone = document.getElementById("f_add_location_phone").value.trim();
  const address = document.getElementById("f_add_location_address").value.trim();
  const detail = document.getElementById("f_add_location_detail").value.trim();
  const id = cookieHder.readCookie("id");
  const data = {
    name,
    phone,
    address,
    detail,
    id,
  }
  fetch('/account/information/addLocal',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then( res => res.json())
    .then((data)=>{
      console.log("this is",data);
      changeConten(data);

    }).then().catch(error =>{
      console.log(error);
    })




  // $.ajax({
  //   url: "/account/information/addLocal",
  //   type: "POST",
  //   data: {
  //     name,
  //     phone,
  //     address,
  //     detail,
  //     id,
  //   },
  //   success: function (response) {
      
  //     modalCtl.openModal('#modal--noti-1');

  //   },
  //   error: function (error) {
  //     console.error("Error:", error);
  //     // Handle the error
  //   },
  // });
};

const changeConten = (data) => {

  let a = `
  <div class="col-6">
    <p class="location-item__pers-name">${data.name}</p>
    <div class="mt-8">
      <span>SĐT: </span>
      <span class="location-item__phone">${data.phone}</span><br>
    </div>
    <p class="location-item__address mt-8"> ${data.detail}, ${data.address} 
    </p>
  </div>
  <div class="col-6 location-item--right default-and-btn">
  <span>
  <button type='button' class="btn-icon-label btn--filled" onclick="modalCtl.openModal("#modal--change-address")">
    <span class="status-layer">
        <span class="icon icon--filled material-symbols-outlined">
              edit</span>
        <span class="label">Thay đổi địa chỉ</span>
    </span>
  </button>
  </span>
    <span class="headline-small primary-text">Mặc định</span>
  </div>
</div>`
      $('.local_info').empty()
      console.log(typeof(a));
      a= a.split('`');
      a= a.join('');
      $('#modal--add-location').removeClass('active');
      $('.local_info').append(a);
}

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

const closeModal = () => {
  document.querySelector("body").classList.remove("modal-open");

  const modals = document.querySelectorAll(".modal");
  modals?.forEach((modal) => modal.classList.remove("active"));
};

// const accountHder = {
//   addLocation
// }

// export default accountHder
