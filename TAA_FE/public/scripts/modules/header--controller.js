import modalCtl from './modal--controller.js';
import cookieHder from './cookie--handler.js';

const handleLogout = () => {
  const logoutBtn = $('.header__user--options.logoutBtn');
  if (logoutBtn.length == 0) {
    console.log('Don\'t have this element', '.header__user--options.logoutBtn');
  } else {
    logoutBtn.on('click', (e) => {
      e.preventDefault();
      modalCtl.openModal('#modal--logout');
    });
  }
};

const updateHeaderName = () => {
  $('.header__name').text(cookieHder.readCookie('name'));
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