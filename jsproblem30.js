// Counting Word

function countingWord(n) {

var totalWord = 0

    for (let i = 0; i < n.length; i++) {
        const el = n[i];
        if (el == ' ' && n[i-1] != ' ') {
            totalWord++
        }
        
    }
    return totalWord
}


const sentence = 'hello! Welcome to the new world!'

const result = countingWord(sentence)

console.log(result)



