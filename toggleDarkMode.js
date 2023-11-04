const checkDarkMode = select('#light-dark');
const head = select('head');
const hour = new Date().getHours();

const darkFields = [
    ...document.querySelectorAll('section'),
    select('body'),
    select('.menus')
];

function select(selector) {
    return document.querySelector(selector);
}

function addDarkMode() {
    darkFields.forEach(field => {
        field.classList.add('darkMode');
    });
}

function removeDarkMode() {
    darkFields.forEach(field => {
        field.classList.remove('darkMode');
    });

}

function toggleDarkMode() {
    if (checkDarkMode.checked) {
        select('.light-dark label div').innerHTML = `<i class="fa-regular fa-moon"></i>`;
        addDarkMode();
    }
    else {
        select('.light-dark label div').innerHTML = `<i class="fa-regular fa-sun"></i>`;
        removeDarkMode();
    }
}

function darkModePerHour() {
    if (hour >= 18 || hour < 7) {
        checkDarkMode.checked = true;
        toggleDarkMode();

    }
    else if (hour < 18 || hour > 7) {
        checkDarkMode.checked = false;
        toggleDarkMode();
    }
} darkModePerHour();

checkDarkMode.addEventListener("change", toggleDarkMode);