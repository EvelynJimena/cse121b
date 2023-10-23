/* LESSON 3 - Programming Tasks */

/* Profile Object  */

const myProfile = {
    name: 'Evelyn Espinoza',
    photo: 'images/EvelynJimena.png',

    favoriteFoods: [
    'Lasaña',
    'Pizza',
    'Camarones apanados',
    'Pasta',
],
     hobbies: [
    'Paint Nails',
    'Play videogames',
    'Go to the beach',
],
    placesLived : []
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Quevedo, Ec',

        length: ' 15 years ',
    },

    {
        place : 'San Clemente, Ec',

        length : ' 4 years ',
    },
    {
        place : 'Portoviejo , Ec',

        length : '4 years'
    }
)


/* DOM Manipulation - Output */
document.querySelector('#name').textContent= myProfile.name;
const photo = document.querySelector('#photo');
photo.setAttribute('src',myProfile.photo);
photo.setAttribute('alt',myProfile.name);
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li)
})
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
})
 myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('place');
    dt.textContent = placeLived.place;
    let dd = document.createElement('length');
    dd.textContent = placeLived.length;
    let dl = document.createElement('dl');
    dl.textContent = placeLived.length
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dl);
    
    
    
})



/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */

