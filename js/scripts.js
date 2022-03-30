// UTILITY LOGIC 

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

function filterPuncuation(word) {
  return word.split("").filter(function(character) {
    return !".?,!;:'\"%$#@!^&*()_-+=\\|[]{}`~/".includes(character);
  }).join("");
}

// BUSINESS LOGIC 

const vowelArray = ["a", "e", "i", "o", "u"]

function vowelChecker(text) {
  const vowelArray = ["a", "e", "i", "o", "u"]
  let splitText = text.split();
  for (let i = 0; i <= vowelArray.length; i ++) {
    if (splitText[0].toLowerCase("a") === vowelArray[i]) {
      return true;
    };
  return false;
  }
}


// function vowelCounter(text, vowel) {
//   for (let i = 0; i <= text.length; i +=1) {
//     if (text.includes[i] === vowel) {
//       return true;
//     };
//   }
//   return false;
// }

// UI LOGIC