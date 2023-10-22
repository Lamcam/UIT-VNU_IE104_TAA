var items = document.querySelectorAll(".js-item")
var sub_menu = document.querySelectorAll(".js-sub-menu")

function showSubMenu() {
    // console.log(this)
    // sub_menu = this.querySelector(".js-sub-menu");
    // console.log(sub_menu)
    // sub_menu[0].style.display='block';  
    
    sub_menu.classList.add("active");
    this.querySelector('.js-sub-menu').style.maxHeight = '200px';
    this.
    // this.querySelector('.js-sub-menu').style.display = 'block';
}

for (let item of items) {
    item.addEventListener('click', showSubMenu);
}

