// What ever i input in the value, i want to check if the word forward is the same reversed
// Then put it in the h2 that the "word" is or is not a palindrome

let h2 = document.querySelector('h2')

document.querySelector('button').addEventListener('click', () => {
    let value = document.querySelector('input').value.toLowerCase()
    let count = 0
let vowels = "aeiou"
for(let i = 0; i < vowels.length; i++) {
    for(let j = 0; j < value.length; j++) {
       if(value[j] === vowels[i]) {
        count++
       }
    }
}
h2.textContent = `"${value.toUpperCase()} has ${count} vowels"`
})


