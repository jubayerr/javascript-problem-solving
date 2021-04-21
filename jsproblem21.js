//Coding challenge #21: Rotate an array to the right 1 position

let numbers = [1, 2, 3, 4, 5]

function rotateRight(arr) {
    let last = arr.pop()
    arr.unshift(last)
}

rotateRight(numbers)
console.log(numbers);