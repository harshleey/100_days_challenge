let overlay = document.querySelector('.overlay')
let popup = document.querySelector('.popup')

document.querySelector('button').addEventListener('click', () => {
    overlay.classList.toggle('active-overlay')
    popup.classList.add('active-popup')
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('active-overlay')
})

popup.addEventListener('click', () => {
    
})