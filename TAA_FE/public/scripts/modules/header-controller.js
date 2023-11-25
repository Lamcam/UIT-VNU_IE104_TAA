import modalCtl from './modal--controller.js';

export const handleLogout = () => {
  const logoutBtn = $('.header__user--options.logoutBtn');
  if (logoutBtn.length == 0) {
    console.log('Don\'t have this element', '.header__user--options.logoutBtn');
  } else {
    logoutBtn.on('click', (e) => {
      e.preventDefault();

      modalCtl.openModal('#modal--logout');
      // fetch('/auth/logout', {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // }).then(res => res.json())
      //   .then(res => {
      //     if (res.statusCode == 200) {
      //       alert('Logout success');
      //       window.location.reload();
      //     } else {
      //       alert('Logout fail');
      //     }
      //   })
      //   .catch(err => console.log(err));
    });
  }
};