// import modalCtl from './modal--controller.js';
// import cookieHder from './cookie--handler.js';

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

  console.log(document.cookie);

  headerName.innerText = cookieHder.readCookie('name');
  // console.log(cookieHder);
  // console.log(cookieHder.readCookie('name'));
  // $('.header__name').text(cookieHder.readCookie('name'));
}

const init = () => {
  updateHeaderName();
  handleLogout();
};

const notFoundSearch = () => {
  console.log('a')
  const notFoundSearch = document.querySelector('.not-found-search')
  const textNotFound = document.createElement('p')
  textNotFound.textContent = 'Không tìm thấy kết quả tìm kiếm'
  notFoundSearch.appendChild(textNotFound)
}

export default {
  init,
  notFoundSearch,
};