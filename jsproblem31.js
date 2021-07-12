// rough

function countingWord(n) {

    totalWord = 0

    for (let i = 0; i < n.length; i++) {
        const el = n[i];
        if (el == ' ' && n[i-1] != ' ') {
            totalWord++
        }
    }
    return totalWord
}

const sentence = 'the kid is not my son!'
const result = countingWord(sentence)
console.log(result);