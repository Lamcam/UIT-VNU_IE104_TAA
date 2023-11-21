// const modal = require('/TAA_FE/res/js/modal--controller.js');

// $('#footer').load('/TAA_FE/src/partials/footer.html');

fetch('/TAA_FE/src/components/product__item.html')
  .then(res => { console.log(res); return res.text(); })
  .then(res => {
    for (let i = 0; i < 9; ++i)
      $('.product__wrapper').append(res)
  })
  .catch(err => console.log(err));

// $(() => $('#main-nav').load('/TAA_FE/src/components/main-nav.html'));

// modal.loadOpenModal();