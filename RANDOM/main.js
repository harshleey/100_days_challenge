let screen = document.querySelector('.screen')
document.querySelector('.generate').addEventListener('click', generate)
function generate() {
    screen.textContent = random()
    let randomNum = random()
    // console.log(randomNum)
}




function random() {
    return Math.round((Math.random() * 100))
}