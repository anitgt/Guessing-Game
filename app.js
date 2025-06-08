let maximum = parseInt(prompt('Enter Your Maximum Number: '));
while(!maximum) {
    maximum = parseInt(prompt('Enter Valid Number!: '));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

console.log(targetNum);

let guess = prompt('Enter Your First Guess: ');

while (guess !== targetNum) {
    if(guess > targetNum) {
        guess = parseInt(prompt('Too high, Enter a new Guess.'))
    } else {
        guess = parseInt(prompt("Too low, Try again"))
    }
}

console.log('You Got it')