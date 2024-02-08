const replaceLetters = (word) => {
  let letters = word.split("");
  let newLetters = [];

  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    if (letter === "a") {
      newLetters.push("ai");
    } else if (letter === "e") {
      newLetters.push("enter");
    } else if (letter === "i") {
      newLetters.push("imes");
    } else if (letter === "o") {
      newLetters.push("ober");
    } else if (letter === "u") {
      newLetters.push("ufat");
    } else {
      newLetters.push(letter);
    }
  }

  return newLetters.join("");
};

const extractLetter = (word) => {
  const originalWord = word
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ufat/g, "u")
    .replace(/ober/g, "o");

  return originalWord;
};

export const handleButton = (text, encrypting) => {
  const words = text.split(" ");
  const newWords = [];
  for (let word of words) {
    if (encrypting) {
        const newWord = replaceLetters(word);
        newWords.push(newWord);
    } else {
        const newWord = extractLetter(word);
        newWords.push(newWord);
    }
  }

  return newWords.join(" ");
};

