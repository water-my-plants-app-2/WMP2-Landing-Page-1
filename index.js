class Carousel {
    constructor (carousel){
        this.carousel = carousel;
        this.users = document.querySelectorAll('.user-container');
        console.log(this.users);
        this.leftArrow = document.querySelector('.left-button');
        this.rightArrow = document.querySelector('.right-button');
        this.users[0].style.display = 'block';
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
        this.users[this.displayIndex].style.display = 'block'
    }
    moveLeft(){
        users.forEach(user => user.style.display ="none");
        if (this.displayIndex === 0){
            this.displayIndex = users.length-1;
        } else {
            this.displayIndex --
        }
        this.users[this.displayIndex].style.display = 'block'
    }
}

let carousel = new Carousel(document.querySelector('.user-stories'));
let users = document.querySelectorAll('.user-container')
console.log(users);
