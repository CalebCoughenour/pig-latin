// UTILITY LOGIC 

function noInputtedWord(text) {
  if ((text.trim().length === 0)) {
    return alert("enter a sentence");
  }
}

function filterPunctuation(word) {
  return word.split("").filter(function(character) {
    return !".?,!;:'\"%$#@!^&*()_-+=\\|[]{}`~/".includes(character);
  }).join("");
}

// BUSINESS LOGIC 



function vowelChecker(text) {
  if (noInputtedWord(text)) {
    return 0;
  }
  const vowelArray = ["a", "e", "i", "o", "u"]
  let filteredText = filterPunctuation(text);
  let splitText = filteredText.split("");
  for (let i = 0; i < vowelArray.length; i++) {
    if (splitText[0].toLowerCase() === vowelArray[i]) {
      return true;
    }; 
  }
  return false; 
}

function consonantChecker(text) {
  if (noInputtedWord(text)) {
    return 0;
  }
  let filteredText = filterPunctuation(text);
  let consArray = filteredText.split("");
  for (let i = 0; i < consArray.length; i++) {
    if (!vowelChecker(consArray.join(""))) {
      consArray.push(consArray[0]);
      consArray.shift();
    }
  }
  if (consArray[consArray.length -1] === "q" && consArray[0] === "u") {
    consArray.push(consArray[0]);
    consArray.shift();
  }
  return consArray.join("")
}

function pigLatin (text) {
  let pigArray = text.split(" ");
  let output = [];
  pigArray.forEach(function(word) {
    if (vowelChecker(word)) {
      output.push(word + "way");
    } else {
      output.push(consonantChecker(word) + "ay");
    }
  })
  return output.join(" ");
}



// UI LOGIC

$(document).ready(function() {
  $("#pig-latin-form").submit(function(e) {
    e.preventDefault();
    const passage = $("#pig-latin-input").val();
    const finalPigLatin = pigLatin(passage);
    $("#pig-latin-display").text(finalPigLatin);
  });
});