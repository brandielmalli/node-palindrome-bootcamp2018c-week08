console.log('starting app.js')

const coinFlip = () => {
    if(Math.random < .5) {
        return "heads"
    } else {
        return "tails"
    }
}

const flip = e => {
    e.preventDefault()
    const heads = document.getElementById('headInput').value
    const tails = document.getElementById('tailInput').value
    if (heads === coinFlip() || tails === coinFlip()){
        console.log('you win')
    } else {
        console.log('try again')
    }
} 

document.getElementById('submitGuess').addEventListener('submit', flip)
