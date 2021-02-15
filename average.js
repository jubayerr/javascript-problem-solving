// Coding challenge #11: Calculate the average of the numbers in an array of numbers

function averageNumber(arr) {

    var average = 0;

    for (let i = 0; i < arr.length; i++) {
        average = average + arr[i];
    }
    return average / arr.length;
}

let myNumbers = [2, 3, 5, 7, 9, 10, 15, 95];

let result = averageNumber(myNumbers)

console.log(result);