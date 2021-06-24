const menubar = document.getElementById('menubar');
const navbar = document.getElementById('navbar');

const myclick = () =>{
    navbar.classList.toggle('active')
}

menubar.addEventListener('click',myclick);
