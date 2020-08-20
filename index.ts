// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function smallNumber(number1: number,number2: number) {
  var smallestNumber;
     if (number1 < number2) 
        smallestNumber = number1;
     else  
      smallestNumber = number2;

    return smallestNumber;
}

console.log(smallNumber(25,28));