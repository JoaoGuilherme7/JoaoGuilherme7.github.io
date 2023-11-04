function select(selector) {
    return document.querySelector(selector);
}

const hamButton = select('.hamburguer-menu');
const menu = select('.menus')

hamButton.addEventListener('click', ()=>{
    menu.classList.toggle('on');
})