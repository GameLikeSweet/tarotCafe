const hamburger = document.getElementById('hamburger');
const header = document.querySelector('header');

function openHeader() {
    header.classList.toggle('open');
}

hamburger.addEventListener('click', openHeader);