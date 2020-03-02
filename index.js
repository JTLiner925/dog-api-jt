'use strict';

function getDogImage() {
    
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson, num) {
  console.log(responseJson);
  const pics = $("#number").val();
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}
// function numOfPics(){
//     $(document).on('input', '#number', function(){
//       var pics = $("#number").val();
//       $("#reward").text(pics);
//   })
//   }
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});