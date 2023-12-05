const isEmailValid = (email) => {
  // Regular expression breakdown:
  // ^(?!\s)             : Asserts that the email does not start with a whitespace
  // [a-zA-Z\d!#$%&'*+-/=?^_`{|}~]+ : Matches any combination of alphabetical characters, digits, and special characters
  // @                   : Matches the @ character
  // [a-zA-Z\d-]+        : Matches any combination of alphabetical characters, digits, and hyphens
  // (\.[a-zA-Z\d-]+)*   : Matches any combination of alphabetical characters, digits, and hyphens, preceded by a dot, zero or more times
  // \.                  : Matches the dot character
  // [a-zA-Z\d-]{2,}     : Matches any combination of alphabetical characters, digits, and hyphens, at least 2 times
  // (?<!\s)$            : Asserts that the email does not end with a whitespace
  const re =
    /^(?!\s)[a-zA-Z\d.+]+@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)*\.[a-zA-Z\d-]{2,}(?<!\s)$/;

  // Test if the provided email matches the regular expression:
  return re.test(email);
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

const isPasswordValid = (password) => {
  // Regular expression breakdown:
  // ^(?!\s)             : Asserts that the password does not start with a whitespace
  // (?=.*[a-zA-Z])      : Asserts that there is at least one alphabetical character
  // (?=.*\d)            : Asserts that there is at least one digit
  // (?=.*[!@#$%^&*()_+]) : Asserts that there is at least one special character
  // [a-zA-Z\d!@#$%^&*()_+]+ : Matches any combination of alphabetical characters, digits, and special characters
  // (?<!\s)$            : Asserts that the password does not end with a whitespace
  const re =
    /^(?!\s)(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]+(?<!\s)$/;

  // Conditions:
  // password.length >= 8 : Checks that the password is at least 8 characters long
  // re.test(password)    : Checks that the password matches the regular expression
  return password.length >= 8 && re.test(password);
};

const register = () => {
  const name = $('#modal--register [name="name"]').val().trim();
  const phone = $('#modal--register [name="phone"]').val().trim();
  const email = $('#modal--register [name="email"]').val().trim();
  const pass = $('#modal--register [name="pass"]').val().trim();
  const passConfirm = $('#modal--register [name="passConfirm"]').val().trim();

  if (!name || !phone || !email || !pass || !passConfirm) {
    alert("Vui lòng nhập tất cả các trường");
    return;
  }

  if (!isEmailValid(email)) {
    alert("Email không hợp lệ\nVui lòng nhập email hợp lệ");
    return;
  }

  if (!isPhoneValid(phone)) {
    alert("Số điện thoại không hợp lệ\nVui lòng nhập số điện thoại hợp lệ");
    return;
  }

  if (pass !== passConfirm) {
    alert("Mật khẩu và Xác nhận mật khẩu phải giống nhau");
    return;
  }

  if (!isPasswordValid(pass)) {
    alert(
      "Mật khẩu phải có ít nhất 8 ký tự, bao gồm cả chữ và số, không có dấu cách và ký tự đặc biệt"
    );
    return;
  }

  const is_read = $("#f_reg_is_read").is(":checked");

  if (!is_read) {
    alert(
      "Vui lòng đọc và đồng ý với Điều kiện giao dịch chung và Chính sách bảo mật thông tin"
    );
    return;
  }

  const data = { name, phone, email, pass };

  fetch("/auth/registerPost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.statusCode == 500) {
        alert("Lỗi máy chủ\nVui lòng thử lại sau");
        return;
      }

      if (res.statusCode == 409) {
        alert(
          "Số điện thoại hoặc email đã tồn tại\nVui lòng thay đổi chúng và thử lại"
        );
        return;
      }

      if (res.statusCode == 200) {
        alert("Đăng ký thành công. Vui lòng đăng nhập");
        modalCtl.nextModal("#modal--login");
        return;
      }

      alert("Lỗi không mong đợi\nVui lòng thử lại sau");
    })
    .catch((err) => console.error(err));
};

const login = () => {
  const phone = $('#modal--login [name="phone"]').val().trim();
  const pass = $('#modal--login [name="pass"]').val().trim();

  if (!phone || !pass) {
    alert("Vui lòng nhập tất cả các trường");
    return;
  }

  const data = { phone, pass };

  fetch("/auth/loginPost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.statusCode == 500) {
        alert("Lỗi máy chủ\nVui lòng thử lại sau");
        return;
      }

      if (res.statusCode == 404) {
        alert("Số điện thoại chưa được đăng ký");
        return;
      }

      if (res.statusCode == 401) {
        alert("Mật khẩu không chính xác");
        return;
      }

      if (res.statusCode == 200) {
        alert("Đăng nhập thành công");
        window.location.reload();
      }
    })
    .catch((err) => console.log(err));
};

const checkAuthenticated = () => {
  if (cookieHder.readCookie("authenticated") !== "true") {
    alert("Vui lòng đăng nhập để thực hiện chức năng này");
    modalCtl.nextModal("#modal--login");
    return false;
  } else {
    return true;
  }
};

const moveToCart = () => {
  if (checkAuthenticated()) {
    window.location.href = "/account/cart";
  }
};

const logout = () => {
  // fetch('/auth/logout', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // }).then(res => res.json())
  //   .then(res => {
  //     if (res.statusCode == 200) {
  //       // alert('Logout success');
  //       window.location.reload();
  //     } else {
  //       // alert('Logout fail');
  //     }
  //   })
  //   .catch(err => console.log(err));
  cookieHder.deleteCookie("authenticated");
  cookieHder.deleteCookie("id");
  cookieHder.deleteCookie("name");
  cookieHder.deleteCookie("avatar");
  window.location.reload();
};

const authCtl = {
  register,
  login,
  checkAuthenticated,
  moveToCart,
  logout,
};

export default authCtl;
