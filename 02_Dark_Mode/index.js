

let content = document.querySelector('body');
let darkMode = document.querySelector('#changeToDark');

darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})