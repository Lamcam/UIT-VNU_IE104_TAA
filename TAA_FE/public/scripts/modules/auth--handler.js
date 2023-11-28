const register = () => {

}

const login = () => {
  // alert('a');
  // event.preventDefault();
  // const submitBtn = $('#modal--login .modal__btn--submit');
  // console.log(submitBtn);
  // if (submitBtn.length == 0) {
  //   alert('Don\'t have this button', '#modal--login .modal__btn--submit');
  // } else {
  //   submitBtn.on('click', (e) => {
  //     e.preventDefault();
      const phone = $('#modal--login [name="phone"]').val().trim();
      const pass = $('#modal--login [name="pass"]').val().trim();

      if (!phone || !pass) {
        alert('Please enter all fields');
      } else {
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
          // redirect: 'follow'
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
  //   });
  // }
}

const checkAuthenticated = async () => {
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
