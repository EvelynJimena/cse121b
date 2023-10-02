/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    const sum = number1 + number2
    return sum
}
function addNumbers(){
  const addNumber1= Number(document.querySelector('#add1').value)
  const addNumber2= Number(document.querySelector('#add2').value)
   const sum = add(addNumber1,addNumber2)
 document.querySelector('#sum').value = sum
     console.log('FIRST NUMBER', addNumber1)
     console.log('SECOND NUMBER', addNumber2)
     console.log('SUM', sum)
     
}         
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(subtnumber1, subtnumber2) {
    const  subt= subtnumber1 - subtnumber2
    return subt
}
function subtractNumbers(){
  const subtractNumber1= Number(document.querySelector('#subtract1').value)
  const subtractNumber2= Number(document.querySelector('#subtract2').value)
   const subt = subtract(subtractNumber1,subtractNumber2)
 document.querySelector('#difference').value = subt
     console.log('FIRST NUMBER', subtractNumber1)
     console.log('SECOND NUMBER', subtractNumber2)
     console.log('DIFFERENCE', subt)
     
}         
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
   function multiply(multnumber1, multnumber2){
      const mult = multnumber1 * multnumber2
    return mult}

 function multiplyNumbers(){
   multiplyNumber1= Number(document.querySelector('#factor1').value)
   multiplyNumber2= Number(document.querySelector('#factor2').value)
    mult = multiply(multiplyNumber1,multiplyNumber2)
 document.querySelector('#product').value = mult
     console.log('FIRST NUMBER', multiplyNumber1)
     console.log('SECOND NUMBER', multiplyNumber2)
     console.log('PRODUCT', mult)
     
}         
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)


/* Open Function Use - Divide Numbers */
function divide(divnumber1, divnumber2) {
    const  div= divnumber1 - divnumber2
    return div
}
function divideNumbers(){
  const divideNumber1= Number(document.querySelector('#dividend').value)
  const divideNumber2= Number(document.querySelector('#divisor').value)
   const div = divide(divideNumber1,divideNumber2)
 document.querySelector('#quotient').value = div
     console.log('FIRST NUMBER', divideNumber1)
     console.log('SECOND NUMBER', divideNumber2)
     console.log('QUOTIENT', div)
}         
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)


/* Decision Structure */
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
document.querySelector('#year').innerHTML = currentYear;
/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
document.querySelector('#array').innerHTML = numbersArray
document.querySelector('#odds').innerHTML = numbersArray.filter(n => n%2)
/* Output Source Array */
document.querySelector('#evens').innerHTML = odds = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);
document.querySelector('#sumOfMultiplied').innerHTML  = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number)
console.log(odds)