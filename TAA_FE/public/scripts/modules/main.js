/**
 * This module is responsible for importing and assigning the modal controller to the global window object.
 * @module main
 */
import modalCtl from './modal--controller.js';
import { handleLoginSubmit } from './modal--login.js';
import authCtl from './auth--controller.js';
import { handleLogout } from './header-controller.js';
import { notFoundSearch } from './header-controller.js';
import { handleLogout } from './header--controller.js';
import cookieHder from './cookie--handler.js';

handleLoginSubmit();
handleLogout();

modalCtl.init();

window.modalCtl = modalCtl;
window.authCtl = authCtl;

fetch('/products')
.then(response => response.json())
  .then(data => {
      if (data.message == 'Not Found')
            console.log(data.message)
            notFoundSearch()
  })
  .catch(error => {
    console.log('Lỗi:', error);
  });
window.cookieHder = cookieHder;
