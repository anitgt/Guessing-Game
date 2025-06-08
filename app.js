let maximum = parseInt(prompt('Enter Your Maximum Number: '));

while(!maximum) {
    maximum = (prompt('Enter Valid Number!: '));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

console.log(targetNum)