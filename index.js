class Carousel {
    constructor (carousel){
        this.carousel = carousel;
        this.users = document.querySelectorAll('.user-container');
        console.log(this.users);
        this.leftArrow = document.querySelector('.left-button');
        this.rightArrow = document.querySelector('.right-button');
        this.users[0].style.display = 'flex';
        this.leftArrow.addEventListener('click', () => this.moveLeft());
        this.rightArrow.addEventListener('click', () => this.moveRight());
        this.displayIndex = 0;
    }
    moveRight(){
        users.forEach(user => user.style.display ="none");
        if (this.displayIndex === users.length-1){
            this.displayIndex = 0;
        } else {
            this.displayIndex ++
        }
        this.users[this.displayIndex].style.display = 'flex';
    }
    moveLeft(){
        users.forEach(user => user.style.display ="none");
        if (this.displayIndex === 0){
            this.displayIndex = users.length-1;
        } else {
            this.displayIndex --
        }
        this.users[this.displayIndex].style.display = 'flex';
    }
}

let carousel = new Carousel(document.querySelector('.user-stories'));

let users = document.querySelectorAll('.user-container')
// console.log(`users`);

//create a function that toggles the menu-open class on and off of the DOM representation of menu
const toggleMenu = () => {
    menu.classList.toggle('menu-open');
}
// create a variable containing the menu
const menu = document.querySelector('.menu');
console.log(menu);

//create a variable containing the menu button, for click listening
const menuButton = document.querySelector('.menu-button');

//create an event listener, so that when menuButton is clicked, the toggleMenu button will be called
menuButton.addEventListener('click', toggleMenu);