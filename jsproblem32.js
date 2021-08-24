// Shuffle an array

const animal = ["dog", "cat", "rat", "fox", "cow"];

const shuffle = (array) => {
  var currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const shuffled = shuffle(animal);

console.log(shuffled);
