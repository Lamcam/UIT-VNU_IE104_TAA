/**
 * This module is responsible for importing and assigning the modal controller to the global window object.
 * @module main
 */
import modalCtl from './modal--controller.js';
import authCtl from './auth--handler.js';
import headerCtl from './header--controller.js';
import cartCtl from './cart--hander.js';
import cookieHder from './cookie--handler.js';
import formCtl from './form--controller.js';
// import accountHder from './account--handler.js';

window.cartCtl = cartCtl;
window.modalCtl = modalCtl;
window.authCtl = authCtl;
window.cookieHder = cookieHder;
window.formCtl = formCtl;

modalCtl.init();
headerCtl.init();
