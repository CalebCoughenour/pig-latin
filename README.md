Describe: vowelCounter();

Test: "It recognizes a single vowel."
Code: vowelCounter("a");
Expected Output: 1

Test: "It recognizes a single vowel regardless of case."
Code: vowelCounter("A");
Expected Output: 1

Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("cat");
Expected Output: 1

Test: "It recognizes multiple vowels in a single word."
Code: vowelCounter("cater");
Expected Output: 2

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: vowelCounter("*&$92%");
Expected Output: 0

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 7

Test: "It recognizes vowels in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 7

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 7

// **********************************************

spec: 
1. return an empty string if given an empty string
2. add "way" to the end of words that begin with a vowel
3. If word starts with a consonant it will move that letter to the end of the word and add an "ay"
4. If word starts with multiple consonants it will move those letters to the end of the word and add an "ay"
5. if word starts with a qu, move the q and the u to the end of the word and add 'ay'.
6. if input is given non-letters like symbols, they should be ignored.
7. must recognize word regardless of punctuation.
8. must recognize word regardless of capitalization and return lowercase.

Describe: pigLatin()

Test: "It will return an empty string if given an empty string."
Code: pigLatin(" ");
Expected Output: " "

Test: "It will add "way" to the end of words that begin with vowel."
Code: pigLatin("away);
Expected Output: "awayway"

Test: If word starts with a consonant it will move that letter to the end of the word and add an "ay."
Code: pigLatin("take")
Expected Output: "aketay"

Test: If word starts with multiple consonants it will move those letters to the end of the word and add an "ay."
Code: pigLatin("still")
Expected Output: "illstay"

Test: If word starts with a qu, move the q and the u to the end of the word and add 'ay'.
Code: pigLatin("quit")
Expected Output: "itquay"

Test: If input is given non-letters like symbols, they should be ignored.
Code: pigLatin("quit!")
Expected Output: "itquay"

Test: It must recognize word regardless of capitalization and return lowercase.
Code: pigLatin("TaKe AwaY")
Expected Output: "aketay awayway"

