// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

for (let i = 1; i <= 50; i++) {
    multiplyNumber(i)
    console.log("");
}

function multiplyNumber(n) {
    for (let i = 1; i <= 10; i++) {
        var row = n + " * " + i + " = " + n * i;
        console.log(row);
    }
}