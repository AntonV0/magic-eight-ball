// Hello message, userName can be set to any name.
const userName = "";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// User Question
const userQuestion = "Question - Will I complete this course?";
console.log(userQuestion);

// Random number generator between 1 and 7
const randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

// Eight Ball Phrases Using Switch Statements (can also be done with if/else if/else statements)
let eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
  default:
    eightBall = "Error!";
}
console.log(eightBall);
