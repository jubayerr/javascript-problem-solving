// Coding challenge #17: Calculate the sum of digits of a positive integer number

function sumDigits(n) {
    const s = n.toString()
    let sum = 0;

    for (let char of s) {
        let digit = parseInt(char)
        sum += digit
    }
    return sum
}

const sum = sumDigits(123456789)

console.log(sum);