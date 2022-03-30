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

function vowelCounter(text) {
  return text.split("").includes(function(vowel) {
    return "aeiou".includes(vowel);
  });
}

// UI LOGIC