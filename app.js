let maximum = parseInt(prompt('Enter Your Maximum Number: '));
while(!maximum) {
    maximum = parseInt(prompt('Enter Valid Number!: '));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

console.log(targetNum);
let attempts = 1;

let guess = prompt('Enter Your First Guess: ');

while (parseInt(guess) !== targetNum) {
    if(guess === 'quit') break;
    attempts++;
    if(guess > targetNum) {
        guess = prompt('Too high, Enter a new Guess.');
    } else {
        guess = prompt("Too low, Try again");
    }
}

if(guess === 'quit') {
    console.log('You quit')
} else {
    console.log('Congrats, You win!')
    console.log(`You Got it. It took : ${attempts} guesses`)
}

