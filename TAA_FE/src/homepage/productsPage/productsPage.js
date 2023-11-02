var items = document.querySelectorAll(".js-item")
var sub_menu = document.querySelectorAll(".js-sub-menu")
var buttons = document.querySelectorAll('.js-button')
function showSubMenu() {
  if (this.classList.contains("active")) {
    this.classList.remove("active")
    return
  }


  for (let item of items)
    item.classList.remove("active");

  //   obj = this.querySelector('.js-sub-menu');
  //   console.log(obj);
  //   height = obj.style.maxHeight;
  //   if (height == "200px")
  //     obj.style.maxHeight = "0px";
  //   else {
  //     this.classList.add("active");
  //     obj.style.maxHeight = "200px";
  //   }
  // }

  this.classList.add("active");
}

for (let item of items) {
  item.addEventListener('click', showSubMenu);
}


// effect on click button
function effectButton() {
  if (this.classList.contains("effect")) {
    this.classList.remove("effect");
    return
  }

  this.classList.add("effect");
}

for (let button of buttons) {
  button.addEventListener('click', effectButton);
}



// const dropdowns = document.querySelectorAll('.dropdown');

const select = document.querySelector('.select');
const caret = document.querySelector('.caret');
const menu = document.querySelector('.menu')
const options = document.querySelectorAll('.menu li')
const selected = document.querySelector('.selected')
const cancel = document.querySelector('.icon-cancel')


select.addEventListener('click', () => {
  select.classList.toggle('select-clicked');
  caret.classList.toggle('caret-rotate');
  menu.classList.toggle('menu-open');
})

options.forEach(option => {
  option.addEventListener('click', () => {
    selected.innerText = option.innerText;
    caret.classList.remove('caret-rotate');
    select.classList.add('select__btn')
    select.classList.remove('select-clicked')

    if (select.classList.contains('cancel__select')) {
      select.classList.remove('cancel__select')
      select.classList.add('select__btn')
    }
    cancel.addEventListener('click', () => {
      select.classList.add('cancel__select')
      select.classList.remove('select__btn')
      selected.innerText = "Giá";
      
    })

    menu.classList.remove('menu-open')
    options.forEach(option => {
      option.classList.remove('select__active')
    })

    option.classList.add('select__active')
  })
})
