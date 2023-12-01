const isPasswordValid = (password) => {
  const re = /^(?!\s)(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+(?<!\s)$/
  return password.length >= 8 && re.test(password)
}

const register = () => {
  const name = $('#modal--register [name="name"]').val().trim();
  const phone = $('#modal--register [name="phone"]').val().trim();
  const email = $('#modal--register [name="email"]').val().trim();
  const pass = $('#modal--register [name="pass"]').val().trim();
  const passConfirm = $('#modal--register [name="passConfirm"]').val().trim();

  if (!name || !phone || !email || !pass || !passConfirm) {
    alert('Please enter all fields');
    return;
  }

  if (pass !== passConfirm) {
    alert('Password and Confirm password must be the same');
    return;
  }

  if (!isPasswordValid(pass)) {
    alert('Password must be at least 8 characters, including letters and numbers, without spaces and special characters');
    return;
  }

  const data = {
    name,
    phone,
    email,
    pass
  }

  fetch('/auth/registerPost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then(res => res.json())
    .then(res => {
      if (res.statusCode == 200) {
        alert('Register success');
        window.location.reload();
      } else {
        alert('Register fail');
      }
    })
    .catch(err => console.log(err));
}

const login = () => {
  const phone = $('#modal--login [name="phone"]').val().trim();
  const pass = $('#modal--login [name="pass"]').val().trim();

  if (!phone || !pass) {
    alert('Please enter all fields');
    return;
  }

  const data = {
    phone,
    pass
  }

  fetch('/auth/loginPost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then(res => res.json())
    .then(res => {
      if (res.statusCode == 200) {
        alert('Login success');
        window.location.reload();
      } else {
        alert('Login fail');
      }
    })
    .catch(err => console.log(err));
}

const checkAuthenticated = () => {
  if (cookieHder.readCookie('authenticated') !== 'true') {
    alert('Vui lòng đăng nhập để thực hiện chức năng này');
    modalCtl.openModal('#modal--login');
    return false;
  } else {
    return true;
  }
}

const logout = () => {
  fetch('/auth/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(res => {
      if (res.statusCode == 200) {
        // alert('Logout success');
        window.location.reload();
      } else {
        // alert('Logout fail');
      }
    })
    .catch(err => console.log(err));
}

const authCtl = {
  register,
  login,
  logout,
  checkAuthenticated,
}

export default authCtl;
