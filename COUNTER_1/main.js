// Access the dom to get the reset button, deduct and add button
// Also access the paragraph
// Create a counter variable to hold 0
// Then loop through the buttons, if class is add counter updates, deduct? counter reduces, reset? counter is back to zero

let screen = document.querySelector('.screen')
let buttons = document.querySelectorAll('.btn')
let count = 0
buttons.forEach(btn => {
    btn.addEventListener('click', eachBtn)
});

function eachBtn(e) {
    let target = e.target
    if (target.classList.contains('deduct')) {
        count--
    }
    if (target.classList.contains('add')) {
         count++
    }
    if (target.classList.contains('reset')) {
        count = 0
    }
    screen.textContent = count

}