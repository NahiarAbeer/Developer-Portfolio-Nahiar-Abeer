
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
// Check if the user has visited the site before
if(localStorage.getItem('visited') === null) {
    // If not, set the visited value to 1 and display a welcome message
    localStorage.setItem('visited', 1);
    console.log("Welcome to our website!");
  } else {
    // If yes, increment the visited value and display the total number of visits
    let visited = parseInt(localStorage.getItem('visited')) + 1;
    localStorage.setItem('visited', visited);
    console.log(`You have visited our website ${visited} times.`);
  }
  
