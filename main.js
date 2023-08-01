const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const hearts = document.querySelectorAll(".like-glyph");

hearts.forEach(function(heart) {
  heart.addEventListener("click", eventHandler);
});

function eventHandler(event) {
  const error = document.getElementById("modal");

  mimicServerCall()
  .then(()=>{})

  .catch(()=> {

    error.classList.remove("hidden");
    setTimeout(() => {
    error.classList.add("hidden");
  }, 3000);
});

  const target = event.target;
  if (target.classList.contains("activated-heart")) {
    target.classList.remove("activated-heart")
    target.innerText = EMPTY_HEART
  } else {
    target.classList.add("activated-heart")
    target.innerText = FULL_HEART
  }
}


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
