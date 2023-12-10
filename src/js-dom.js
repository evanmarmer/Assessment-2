// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

const button = document.getElementById("auth")

const toggle = (evt) => {
    evt.preventDefault();
    if(button.innerText = "Log In"){
        button.innerText = "Log out";
    } else{button.innerText = "Log Out"
        button.innerText = "Log in"
    }
}

button.addEventListener('click', toggle)

// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

const form = document.getElementById('send-alert')
const input = document.getElementById('alert-message')

const sendAlert = (event) =>{
    event.preventDefault()
    alert(input.value)
}
 form.addEventListener('click', sendAlert)

// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

const ol = document.getElementById('list')
const btn = document.getElementById('item-adder')

const addItem = (event) => {
    event.preventDefault()
    const li = document.createElement('li')
    li.innerText = "Item"
    ol.appendChild(li)
}

btn.addEventListener('click', addItem)

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

const bluBtn = document.getElementById('blue')
const redBtn = document.getElementById('red')
const change = document.getElementsByClassName('changes-colors')
// console.log(change)

const changeBlue = (event) => {
    event.preventDefault()
    for (const word of change)
    // console.log(word)
    word.style.color = 'blue'
}

const changeRed = (event) => {
    event.preventDefault()
    for (const word of change)
    word.style.color = 'Red'
}

bluBtn.addEventListener('click', changeBlue)
redBtn.addEventListener('click', changeRed)

// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

const form1 = document.getElementById('factorial-calculator')
const input1 = document.getElementById('factorial-input')
const result = document.getElementById('result')

const factorial = (event, input1) => {
    event.preventDefault()
    result.innerText = input1

    if (input1 === 0 || input1 === 1)
    return 1;
  for (const i = input1 - 1; i >= 1; i--) {
    input *= i;
  }
  return input1;
}

form1.addEventListener('submit', factorial)

//example taken from google
// function factorialize(num) {
//   if (num === 0 || num === 1)
//   return 1;
// for (var i = num - 1; i >= 1; i--) {
//   num *= i;
// }
// return num;
// }
// factorialize(5);

// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

const form2 = document.getElementById('recommend-word')
const input2 = document.getElementById('word')
const p = document.querySelector('.form-feedback')

const func = (event) => {
    event.preventDefault()
    const words = input2.value
    if (words.length > 3){
        p.innerText = "Thanks for your submission!"
        p.style.color = 'green'
    } else {
        p.innerText = "The word must be at least 4 characters long."
        p.style.color = "red"
    }
}


form2.addEventListener('submit', func)
