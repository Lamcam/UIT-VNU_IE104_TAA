var items = document.querySelectorAll(".js-item")
var sub_menu = document.querySelectorAll(".js-sub-menu")
var buttons = document.querySelectorAll('.js-button')

sub_menu.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation()
  })
})

sub_menu.forEach(item => {
  const sub_menu_li = item.querySelectorAll("li")
  sub_menu_li.forEach((item_li) => {
    item_li.addEventListener('click', () => {
      if (item_li.classList.contains("active__sub-menu__li")) {
        item_li.classList.remove("active__sub-menu__li")
        return
      }
      sub_menu_li.forEach(sub_menu => {
        sub_menu.classList.remove("active__sub-menu__li")
      })

      item_li.classList.add("active__sub-menu__li")
    })
  })
})

function showSubMenu() {
  sub_menu.forEach(item_sub_menu => {
    const sub_menu_li = item_sub_menu.querySelectorAll("li")
    sub_menu_li.forEach((item_li) => {
      if (item_li.classList.contains("active__sub-menu__li")) {
        item_li.classList.remove("active__sub-menu__li")
      }
    })
  })

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

// item icon_heart product
const iconHearts = document.querySelectorAll('.icon_heart')
iconHearts.forEach(iconHeart => {
  iconHeart.addEventListener("click", () => {
    if (iconHeart.classList.contains("icon--filled")) {
      iconHeart.classList.remove("icon--filled")
      iconHeart.innerText = "heart_plus"
      return;
    }
    iconHeart.innerText = "favorite"
    iconHeart.classList.add("icon--filled")
  })

})

// const myInput = document.querySelector("#my-input");
// function stepper(btn) {
//   let id = btn.getAttribute("id")
//   let min = myInput.getAttribute("min")
//   let max = myInput.getAttribute("max")
//   let step = myInput.getAttribute("step")
//   let value = myInput.getAttribute("value")

//   let calcStep = (id == "increment") ? (step * 1) : (step * -1);

//   let newValue = parseInt(value) + calcStep;
//   if (newValue >= min && newValue <= max) {
//     myInput.setAttribute("value", newValue)
//   }
//   console.log(id, min, max, step, value)
// }

// modal

