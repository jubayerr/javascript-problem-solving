// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit

function celsiustoFahrenheit(n) {
    return n * 9 / 5 + 32
}

var result = celsiustoFahrenheit(36);
console.log("Celsius to Fahrenheit", result);


// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius

function fahrenheitToCelsius(n) {
    return (n - 32) * (5 / 9)
}

var result2 = fahrenheitToCelsius(90)
console.log("Fahrenheit to Celsius", result2);