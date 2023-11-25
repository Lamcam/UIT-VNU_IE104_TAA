/**
 * This module is responsible for importing and assigning the modal controller to the global window object.
 * @module main
 */
import modalCtl from './modal--controller.js';
import { handleLoginSubmit } from './modal--login.js';

handleLoginSubmit();

window.modalCtl = modalCtl;