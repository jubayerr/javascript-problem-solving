// Coding challenge #11: Calculate the average of the numbers in an array of numbers

function averageNumber(arr) {

    var average = 0;

    for (let i = 0; i < arr.length; i++) {
        average = average + arr[i];
    }
    return average / arr.length;
}

let myNumbers = [2, 4, 6, 8, 10, 12, 14];

let result = averageNumber(myNumbers)

console.log(result);