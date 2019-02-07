const toggleMenu = () => {
    menu.classList.toggle('menu-open');
}
// create a variable containing the menu
const menu = document.querySelector('.menu');


//create a variable containing the menu button, for click listening
const menuButton = document.querySelector('.menu-button');

//create an event listener, so that when menuButton is clicked, the toggleMenu button will be called
menuButton.addEventListener('click', toggleMenu);

class TabLink {
    constructor(tabElement){
        this.tabElement = tabElement;
        this.tabData = tabElement.dataset.tab;
        // console.log(this.tabData);

        if (this.tabData === 'all'){
            this.members = Array.from(document.querySelectorAll('.member'));
            this.members.shift();
        } else if (this.tabData ==='ux-ui' || this.tabData === 'ios'){
            this.members = document.querySelectorAll('.hidden');
        } else {
            this.members = document.querySelectorAll(`[data-tab='${this.tabData}']`);
            
        }
        this.members = Array.from(this.members).map(member => new TabMember(member));
        // this.members = Array.from(this.members).map(member => new TabMember(member));

        tabElement.addEventListener('click', () => this.selectTab());
    }

    selectTab(){
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.classList.remove('active-tab'));
        const members = document.querySelectorAll('.member');
        members.forEach(member=>member.style.display ='none');
        this.tabElement.classList.add('active-tab');
        this.members.forEach(member => member.selectMember());
    }
}

class TabMember {
    constructor(memberElement){
        this.memberElement = memberElement;
    }
    selectMember(){
        this.memberElement.style.display = 'block';
    }
}
// grabbing all the selector tabs and throwing them in a nodeList
let tabs = document.querySelectorAll('.tab');
// send each tab through the TabLink class constructor
tabs.forEach(tab => new TabLink(tab));