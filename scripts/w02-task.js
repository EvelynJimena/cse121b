/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Evelyn Espinoza';
let currentYear = '2023';
let profilePicture = 'images/EvelynJimena.png';






/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</Strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute(`alt`, fullName);





/* Step 5 - Array */
const favoritefood = ["Lasaña", "Pizza", "Camarones apanados", "Pasta"];
foodElement.innerHTML += `<br>${favoritefood}`;
const favoritefood1 = ["Ceviche"];
const favoritefood2 = favoritefood.shift;
favoritefood.push(favoritefood1);
foodElement.innerHTML += `<br>${favoritefood}`;
favoritefood.shift();
foodElement.innerHTML += `<br>${favoritefood}`;
favoritefood.pop()
foodElement.innerHTML += `<br>${favoritefood}`;