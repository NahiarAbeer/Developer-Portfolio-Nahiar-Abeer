
let banner = document.querySelector('.banner');
let dayNight = document.querySelector('.dayNight');
// let colorArr=['#fff','#333']
dayNight.onclick = function () {

    banner.classList.toggle('night');
    document.body.classList.toggle('night')
}
// let menu = document.getElementById('#menu');
// let ul=document.querySelector('.ul')
// function display(){
//     let a=ul.style.display

// }

//new code again :<
let menu = document.querySelector('.menu');
let ul = document.querySelector('.ul');

function toggleMenu() {
    if (ul.style.display === 'none') {
        ul.style.display = 'flex';
    } else {
        ul.style.display = 'none';
    }
}

menu.addEventListener('click', toggleMenu);