'use strict';
function getBreedList(){
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(responseJson => 
      console.log(responseJson))
    .catch(error => alert('Please check your spelling and try again.'));
}

function getDogImage(breed) {
    
  fetch(`https://dog.ceo/api/breeds/${breed}/images`)
    .then(res => res.json())
    .then(resJson => 
      displayResults(resJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(resJson) {
  console.log(resJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${resJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
     
    // if(dogBreed !== ){
    //     alert('')
    const dogBreed = $("#breed").val(); 
    const dogBreedList = getBreedList();
    console.log(dogBreed);
   
    // dogBreedList.map(breed !== dogBreed)
    for(let i = 0; i< dogBreedList; i++){
      const listOfBreeds = dogBreedList[i];
      if(dogBreed !== listOfBreeds){
        alert('Oops! maybe it was misspelled...');
      } else {
        getDogImage(dogBreed);
      }
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});