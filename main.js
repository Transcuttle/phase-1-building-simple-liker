// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function init(){
  
  const hearts = document.querySelectorAll('span.like-glyph');
  for (let heart of hearts){
    heart.addEventListener('click', clickHandler);
  }
}

function clickHandler(event){
  
  if(!event.target.classList.contains('activated-heart')){
    mimicServerCall()
    .then(() => {
      event.target.textContent = FULL_HEART;
      event.target.classList.add('activated-heart');
    })
    .catch(error => appendError(error))
  }else{
    event.target.textContent = EMPTY_HEART;
    event.target.classList.remove('activated-heart');
  }
}

function appendError(error){
  document.querySelector('#modal').classList.remove('hidden');

  document.querySelector('#modal-message').textContent = error;
  setTimeout(() => document.querySelector('#modal').classList.add('hidden'), 3000);
}

init();

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
