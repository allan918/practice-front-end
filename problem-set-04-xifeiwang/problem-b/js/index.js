'use strict';

/* Define a function `addFour()` that takes a single argument 
   and returns a value 4 greater than the input.*/
function addFour(num) {
  return num + 4;
}

/* Create and log a variable `twelve` that is the result of passing 8 to your
   addFour() function. */
var twelve = addFour(8);
console.log(twelve);

/* Create and log a variable `twelveString` that is the result of passing "8" 
   (a string) to your addFour() function. Consider what this tells you about how
  the function should be explained (e.g., in a comment). */
var twelveString = addFour("8");


/* Define a function `compoundInterest()` that takes three parameters: 
     1. an initial bank balance (principle, in dollars)
     2. an annual interest rate (as a decimal, e.g., 0.01) 
     3. a number of years
   The function should calculate the continuous compound interest
     (https://en.wikipedia.org/wiki/Compound_interest#Continuous_compounding) 
   and *return* the resulting total balance after that many number of years

   You can call the method and log the result to check your work. Compare to
     http://www.mathwarehouse.com/calculators/continuous-compound-interest-calculator.php
*/
function compoundInterest(init, rate, num) {
  return init * Math.exp(rate * num);
}


/* Define a function `fizzBuzz()` that takes in a single number as an argument.
   The function should *return* an _array_ of numbers from 1 to the argument. 
   But for multiples of three, the array should contain "Fizz" instead of the 
   number. For multiples of five, the array should contain "Buzz" instead of the 
   number. For numbers which are multiples of both three and five, the array 
   should contain "FizzBuzz" instead of the number.
   The returned array should be empty for arguments less than 1. */
function fizzBuzz(num) {
  var temp = [];
  if (num < 1) {
    return temp;
  } else {
    for (let a = 1; a <= num; a++) {
      if (a % 3 == 0 & a % 5 == 0) {
        temp.push("FizzBuzz");
      } else if (a % 3 == 0) {
        temp.push("Fizz");
      } else if (a % 5 == 0) {
        temp.push("Buzz");
      } else {
        temp.push(a);
      }
    }
    return temp;
  }
}





/* Define a function `getLetterFrequencies()` that takes in a single string as 
   an argument. The function should *return* an Object whose keys are characters
   (letters) and whose values are the number of times that character appears in
   the argument. Your function should be case sensitive.
   _Hint:_ start with an empty Object, then loop through the letters one at a
   time (you can access them with bracket notation, like with an array). For 
   each letter, increase the value associated with that key by one. Watch out 
   for if the letter is not in the Object yet!
   You can test this method with a word like "Mississippi". */
function getLetterFrequencies(word) {
  var answer = {};
  var check = "";
  for (let i = 0; i < word.length; i++) {
    if (!check.includes(word.charAt(i))) {
      var count = 0;
      for (let c = 0; c < word.length; c++) {
        if (word.charAt(c) == word.charAt(i)) {
          count++;
        }
      }
      answer[word.charAt(i)] = count;
    }
  }
  return answer;
}


/* Create a variable `deck` that represents a deck of modern playing cards
   (https://en.wikipedia.org/wiki/Playing_card). This variable should be an
   *array* of 52 elements, each of which is an Object with properties:
     - `suit`, with a string value that is either `"hearts"`, `"diamonds"`, 
       `"clubs"`, or `"spades"`
     - `rank`, with an integer value ranging from 2 to 14 inclusive (values 
        11-14 represent a Jack, Queen, King, or Ace respectively).
    Tip: use a pair of nested loops to add each combination of suit and rank to 
    the `deck` array! 
    
    You can log out the `deck` to check your work! */
var deck = [];
for (let s = 0; s <4; s++) {
  for (let r = 2; r <= 14; r++) {
    if (s == 0){
      deck.push({suit:"hearts", rank:r});
    } else if(s == 1) {
      deck.push({suit:"diamonds", rank:r});
    }else if(s == 2) {
      deck.push({suit:"clubs", rank:r});
    }else{
      deck.push({suit:"spades", rank:r});
    }
  }
}


//You can test the below functions by creating e.g., a `pokerHand` array that 
//contains five cards from the `deck`.

/* Define a function `containsQueenOfHearts()` that takes in an array of "card"
   objects (e.g., a Poker hand) and returns whether or not the Queen of Hearts
   is in that array.
   Hint: use a loop to check each card. */
function containsQueenOfHearts(card){
  for (let i = 0; i < card.length; i++) {
    if (card[i].suit == "hearts" && card[i].rank == 12) {
      console.log(123);
      return true;
    }
  }
  return false;
}


/* Define a function `getHighCard()` that takes in an array of "card" objects
  and returns the card object with the highest value. The "high card" is the one
  with the highest rank. Cards of different suits but the same rank are 
  considered to have the same value, and either is a valid result */
function getHighCard(card) {
  var indexNumber = 0;
  var max = 0;
  for (var i = 0; i < card.length; i++) {
    if(card[i].rank >= max) {
      max = card[i].rank;
      indexNumber = i;
    }
  }
  return card[indexNumber];
}


/* Define a function `isFlush()` that takes in an array of "card" objects and
   returns whether or not the cards all have the same _suit_. */
function isFlush(card) {
  var flag = true;
  for(var i = 0; i< card.length-1; i++) {
    if(card[i].suit != card[i+1].suit) {
      flag = false;
    }
  }
  return flag;
}


/* Extra challenge: define a function `hasPair()` that takes in an array of 
   "card" objects and returns whether or not there is at least one _pair_ (two 
   cards with the same _rank_) in the array.
   Double challenge: return the rank of the pair of cards with the highest rank 
   (e.g., if the hand contains more than one pair!) 
function hasPair(card){
  for (var i = 0; i< card.length-1; i++){
    for (var c = 1+1; c < card.length;c++){
      if (card[i].rank == card[c].rank) {
        return true;
      }
    }
  }
  return false;
}*/


//Make functions and variables available to tester. DO NOT MODIFY THIS.
if (typeof module !== 'undefined' && module.exports) {
  /* eslint-disable */
  if (typeof addFour !== 'undefined')
    module.exports.addFour = addFour;
  if (typeof twelveString !== 'undefined')
    module.exports.twelveString = twelveString;
  if (typeof compoundInterest !== 'undefined')
    module.exports.compoundInterest = compoundInterest;
  if (typeof fizzBuzz !== 'undefined')
    module.exports.fizzBuzz = fizzBuzz;
  if (typeof getLetterFrequencies !== 'undefined')
    module.exports.getLetterFrequencies = getLetterFrequencies;
  if (typeof deck !== 'undefined')
    module.exports.deck = deck;
  if (typeof containsQueenOfHearts !== 'undefined')
    module.exports.containsQueenOfHearts = containsQueenOfHearts;
  if (typeof getHighCard !== 'undefined')
    module.exports.getHighCard = getHighCard;
  if (typeof isFlush !== 'undefined')
    module.exports.isFlush = isFlush;
    
}