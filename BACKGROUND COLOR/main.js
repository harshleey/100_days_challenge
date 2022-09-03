let hexColors = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6]
document.querySelector('button').addEventListener('click', button)

function button() {
    let colors = '#'
    for (let i = 0; i < 6; i++) {
        let random = Math.round(Math.random() * 6)
        colors += hexColors[random]
        
    }
    document.body.style.backgroundColor = colors
    document.querySelector('h1').textContent = colors
}



// I need to randomly pick 6 different element from the array 
// function random()