/*
Programmer: Laura Castro
Title: Readability King
Difficulty: 5 kyu

Description:
We will use the Flesch–Kincaid Grade Level to evaluate the readability of a piece of text. This grade level is an approximation for what schoolchildren are able to understand a piece of text. For example, a piece of text with a grade level of 7 can be read by seventh-graders and beyond.

The way to calculate the grade level is as follows:

(0.39 * average number of words per sentence) + (11.8 * average number of syllables per word) - 15.59

Write a function that will calculate the Flesch–Kincaid grade level for any given string. Return the grade level rounded to two decimal points.

Ignore hyphens, dashes, apostrophes, parentheses, ellipses and abbreviations.

Remember that the text can contain more than one sentence: code accordingly!

HINT: Count the number of vowels as an approximation for the number of syllables, but count groups of vowels as one (e.g. deal is one syllable). Do not count y as a vowel!

Example
"The turtle is leaving." ==> 3.67

The average number of words per sentence is 4 and the average number of syllables per word is 1.5. The score is then (0.39 * 4) +  (11.8 * 1.5) - 15.59 = 3.67

*/

// pseudo code
// input : a string
// output : round two decimal places (the grade level of the text)
// get the average number of words per sentence
// get the average number of syllables per word
// calculate grade level
// round to two decimals

function fleschKincaid(text){
    // Store vowels
    const vowels = ['a','e','i','o','u'];

    // Create array of words
    let words = text.split(' ');
    // Store number of words
    let wordsCount = text.split(' ').length; // ['The', 'turtle', 'is', 'leaving.'] 4 words

    // Store number of vowels
    let syllablesCount = 0;

    // Replace all non-alphabetical characters with empty string
    text = text.replaceAll(/[^a-zA-Z0-9]/g, ' ');

    // Check the characters in each word
    for(let word = 0; word < words.length; word++){
        console.log(words[word]);
    }

  }


// Tests
var txts = [
    "The turtle is leaving.", // 3.67
    "A good book is hard to find.", // -1.06
    "To be or not to be. That is the question.", // -0.66
    "Oh no! The lemming is falling.", // 1.31
    "Do not cut your fingers as your katana is getting sharper! Be gentle." // 4.19
  ]

  txts.forEach(element => {
    fleschKincaid(element);
  });