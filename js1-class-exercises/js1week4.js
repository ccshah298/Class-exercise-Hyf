// ex-Fizz buzz
function number(){
    
for(i=0;i<=100;i++)
{    
if(i%3 == 0 && i%5 == 0)
{
    console.log("fizzbuzz");
}
else if(i%3 == 0)
{
    console.log("fizz")
}
else if(i%5 == 0)
{
    console.log("buzz");
}
else{
    console.log(i);
}
  }
}
number()
// When that works. Make the two number for multiples into parameters. ???



//Ex- Build a sentiment analyzer
let positiveWords = ['happy', 'super','beautiful', 'awesome', 'cheerfull' ]
let negativeWords = ['bad', 'ugly', 'hate', 'boring', 'sad']
function getSentimentScore(statement){
 let words = statement.split(" ");
 let positive = [];
 let negative = [];
 let score = 0;
 let senti = new Object();
     for (let i=0;i<words.length;i++)
     {
        if(positiveWords.includes(words[i]))
           { 
               score += 5;
               positive.push(words[i]);
            }   
        else if (negativeWords.includes(words[i]))
        { 
            score += 0;
            negative.push(words[i]);
        }      
    }
    senti = {Score: score,
             positiveWords: positive,
             negativeWords: negative
            };
return senti;
}

const sentimentScore = getSentimentScore("I am mega super awesome happy")
console.log(sentimentScore);  
const sentimentScore_2 = getSentimentScore("I hate doing boring stuff")
console.log(sentimentScore_2);  


//Character frequencies
/*function getCharacterFrequencies(text){
    let count = {};
    
    text.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
   }
   console.log(getCharacterFrequencies('happy'));*/

   function getCharacterFrequencies(text) {
    var freq = {};
    for (var i=0; i<text.length;i++) {
        var character = text.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};
console.log(getCharacterFrequencies('happy'));

//Credit card number formatter
function formatCreditCardNumber(cardnumber){
  var value = cardnumber.toString();
  var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  var matches = v.match(/\d{4,16}/g);
  var match = matches && matches[0] || '';
  var parts = [];
  let cardno = new Object();
  for (i=0;i<match.length; i+=4) {
    parts.push(match.substring(i, i+4)); 
}
  if (parts.length) {
     cardno = {
        original: cardnumber,
        formatted: parts.join(' ')
     }
    return cardno; 
} else {
    return value;
  }
}
console.log (formatCreditCardNumber(123456789));

//Palindromic substring
function palindrome(myString){
    var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    // reverse
    var checkPalindrome = removeChar.split('').reverse().join('');
    if(removeChar === checkPalindrome){   
      console.log( myString + " is a Palindrome");
    }else{  
     console.log( myString + " is not a Palindrome");
    }
    }
    palindrome('Madam')
    palindrome('1,2,2,1')
    palindrome('1,2,3,4,5,6')

    // Credit card info
function getCraditcardInfo(number){
  const tex = number.toString();
  const digit = tex[0];
  switch(digit){
    case'4' : return 'visa';
    break;
    case'5' : return 'master';
    break;
  }

}
console.log(getCraditcardInfo(4781321334789876));






