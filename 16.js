// Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime

// function getPrime(n) {
//     if (n == 2) {
//         console.log("This is prime number");
//     }
//     if (n < 2 || n % 2 == 0) {
//         console.log("This is not a prime number");
//     }
//     else {
//         console.log("This is prime number");
//     }
// }

function getPrime(n) {
    if (n < 2) {
        return false;
    }
    if (n == 2) {
        return true;
    }

    let maxNumber = Math.sqrt(n);

    for (i = 2; i <= maxNumber; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

const isPrime = getPrime(19)
console.log(isPrime);
