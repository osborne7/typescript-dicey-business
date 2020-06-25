# dicey-business-2
Covalence

This lab will combine principles of HTML, CSS, JavaScript, Accessing/Creating/Modifying HTML elements, and Object Oriented Programming.

## General Requirements

You must use OOP. Create a class named Die that represents a single die.

Your class must have a property named value.

Your class must have a method named roll that generates a random integer 1-6, sets the value property, and updates the div on the page with the new value.

When a new Die is created, it should automatically create a div, call its roll method, and put the div on the screen

You can use either the DOM or JQuery, but please be consistent and stick with one.

Create an index.html file, a JS file, and a CSS file.

Implement the objectives of the lab as follows:

The page must contain a button labeled Generate Die. You can go ahead and put this in your HTML. (No reason to make this harder by creating it in code when you can just put it in your HTML)

Clicking the button should create a new Die object (thus causing a div to be added to the screen with a random number 1-6)

The dice should show up on your page in a grid, similar to the layout of DOM DOM DOMMMMMMM.

The page must contain a button labeled Roll Dice, which should call the roll method on all the dice, updating their values.

### Hints

You can set a property on your Die object that holds the div representing the die on the page.

You will probably want to store each Die you create in a global array. This may be helpful when it comes time to roll all the dice.

Clicking the Roll Dice button can loop through that array, where you will have access to the properties and methods of each Die object.