'use strict';

function getDogImage(num) {  
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);

  // .replaceWith(
  //   `<img src="${responseJson.message}" class="results-img">`);  
  responseJson.message
  .map(img => $('.results-img').append(`<li class='image'><img src=${img}></li>`));

  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const pics = $("#number").val();
    console.log(pics);
    if(pics > 50 || pics < 1){
      alert('You can view between 1 and 50 images at a time');
    }else{
      getDogImage(pics);
  }
});
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});