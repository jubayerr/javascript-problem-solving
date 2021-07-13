// reverse string

function reverseText(str) {
    var reversed = ''
    for (let i = 0; i < str.length; i++) {
        const text = str[i];
        reversed = text + reversed
    }
    return reversed
}

var statement = "Hello from the other side"
var result = reverseText(statement)

console.log(result)