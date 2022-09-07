// What ever i input in the value, i want to check if the word forward is the same reversed
// Then put it in the h2 that the "word" is or is not a palindrome

let h2 = document.querySelector('h2')

document.querySelector('button').addEventListener('click', () => {
    let value = document.querySelector('input').value.toLowerCase()
    // let string = 'Ma is a nun, as I am'.toLowerCase()
    let string = value.replace(/[^a-z]/g, "")
    let reverse = string.split('').reverse().join('')
    if (string === reverse) {
        h2.textContent = `"${value.toUpperCase()}" is a palindrome`
    }
    else {
        h2.textContent = `"${value.toUpperCase()}" is not a palindrome`
    }
})