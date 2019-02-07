# WMP2-Landing-Page-1
Landing Page 1 for Water My Plants App 2
https://condescending-johnson-a73a40.netlify.com/about.html


# JavaScript
* The menu on both pages is toggled using an event listener. I first created a variable containing the menu element, then a variable that contains the menu button element, then a function that toggles a menu-open style on and off the element. That function fires when the menu button is clicked.

* The testimonial carousel is built using a class constructor on index.js. I select the element containing the user stories and pass it into the constructor. In the constructor, I create variables representing the following elements - the left arrow, the right arrow, and a nodelist of the users. I select the left and right buttons, add event listeners to them, and change the display setting of each user in the node list using an incremented or decremented index depending on which arrow is clicked. New User testimonials can be added ad infinitum to the HTML within the .user-stories class <div> and the carousel will accept and display them in order.

* I also created arrays of the sign up and login links and iterated through them using .map in order to assign HREFs... probably unneccessary but I thought i needed an array method. 

* On the about page, i created tab selectors and linked them via data tabs to photo cards of our team members. I also hid the ghostbusters O to denote the team members we didn't have. New team members can be added and will display, as long as the data tab matches one of those already in the HTML. To add new buttons, create a new data tab and add the new members accordingly. 
