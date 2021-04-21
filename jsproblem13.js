// Coding challenge #13: Find the maximum number in an array of numbers

function findMax(arr) {
    var maxNumber = arr[0]
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > maxNumber) {
            maxNumber = element;
        }
    }
    return maxNumber;
}

var myNumbers = [1, 2, 3, 4, 9, 10, 15];
var result = findMax(myNumbers);
console.log(result);