'use strict';
function getDogImage(breed) {
    
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson =>{if(responseJson.status === 'success'){
      displayResults(responseJson, breed);
    } else {
      displayErrorMessage(responseJson);
    }})
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson, breed) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $('h2').text(`Check out this ${breed}!`);
  $('.results').removeClass('hidden');
}
function displayErrorMessage(responseJson){
  $('h2').text(`${responseJson.message}`);
  $('.results').addClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const dogBreed = $("#breed")
      .val()
      .toLowerCase()
      .split(' ')
      .reverse()
      .join('/');
    console.log(dogBreed);    
   
    getDogImage(dogBreed);
   
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});