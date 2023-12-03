// import modalCtl from './modal--controller.js';
// import cookieHder from './cookie--handler.js';

const updateCartStatus = () => {
  const cartStatus = document.querySelector('.header__cart');
  let context = cookieHder.readCookie('cart_length');
  if (parseInt(context) > 9) {
    context = '9+';
  }
  console.log(context);
  cartStatus?.setAttribute('data-after', context);

  if (context == '0') {
    cartStatus?.classList.add('header__cart--empty');
  } else {
    cartStatus?.classList.remove('header__cart--empty');
  }
}

const handleLogout = () => {
  const logoutBtn = $('.header__user--options.logoutBtn');
  if (logoutBtn.length == 0) {
    console.error('Don\'t have this element', '.header__user--options.logoutBtn');
    return;
  }

  logoutBtn.on('click', (e) => {
    e.preventDefault();
    modalCtl.openModal('#modal--logout');
  });
};

const updateHeaderName = () => {
  const headerName = document.querySelector('.header__name');
  if (!headerName) {
    console.error('Don\'t have this element', '.header__name');
    return;
  }

  // console.log(document.cookie);

  headerName.innerText = cookieHder.readCookie('name');
  // console.log(cookieHder);
  // console.log(cookieHder.readCookie('name'));
  // $('.header__name').text(cookieHder.readCookie('name'));
}

const init = () => {
  updateHeaderName();
  handleLogout();
  updateCartStatus();
  document.addEventListener('UpdateCart', updateCartStatus);
};

export default {
  init,
};