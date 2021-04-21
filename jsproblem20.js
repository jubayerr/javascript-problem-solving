// Coding challenge #20: Rotate an array to the left 1 position

let numbers = [1, 2, 3, 4, 5]

function rotateLeft(arr) {
    let first = arr.shift()
    arr.push(first)
}

rotateLeft(numbers)
console.log(numbers);

