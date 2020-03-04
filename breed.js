'use strict';
function getDogImage(breed) {
    
  fetch(`https://dog.ceo/api/breed/breed_name/sub_breed/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const dogBreed = $("#breed").val().toLowerCase(); 
    console.log(dogBreed);
    const breedChose = `${responseJson.message}.map(dog => ${dog}.includes(${dogBreed}))`;
    
   if(dogBreed === breedChose ){
    getDogImage(dogBreed);
   } else {
       alert('Check your spelling, try again')
   }
    // dogBreedList.map(breed !== dogBreed)
    
    
      
    
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});