const updateCartStatus = () => {
  const cartStatus = document.querySelector('.header__cart');
  let context = cookieHder.readCookie('cart_length');
  if (!context) {
    context = '0';
  }
  
  if (parseInt(context) > 9) {
    context = '9+';
  }
  // console.log(context);
  cartStatus?.setAttribute('data-after', context);

  if (context == '0') {
    cartStatus?.classList.add('header__cart--empty');
  } else {
    cartStatus?.classList.remove('header__cart--empty');
  }
}

const handleLogout = () => {
  const logoutBtn = document.querySelector('.header__user--options.logoutBtn');
  if (!logoutBtn) {
    return;
  }

  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalCtl.openModal('#modal--logout');
  });
};

const updateHeaderName = () => {
  const headerName = document.querySelector('.header__name');
  if (!headerName) {
    return;
  }

  headerName.innerText = cookieHder.readCookie('name');
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