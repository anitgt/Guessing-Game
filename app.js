let maximum = parseInt(prompt('Enter Your Maximum Number: '));
while(!maximum) {
    maximum = parseInt(prompt('Enter Valid Number!: '));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

console.log(targetNum);
let attempts = 1;

let guess = prompt('Enter Your First Guess: (type "q" to quit the game)');

while (parseInt(guess) !== targetNum) {
    if(guess === 'q') break;
    guess = parseInt(guess);
    if(guess > targetNum) {
        guess = prompt('Too high, Enter a new Guess.');
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low, Try again");
        attempts++;
    } else {
        guess = prompt('Invalid guess. enter a number or "q" to exit')
    }
}

if(guess === 'q') {
    console.log('You quit')
} else {
    console.log('Congrats, You win!')
    console.log(`You Got it. It took : ${attempts} guesses`)
}

