// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hideModal = () => document.getElementById("modal").classList.add("hidden");
hideModal();
const likeGlyph = document.getElementsByClassName("like");
console.log(likeGlyph)

for (let element of likeGlyph){element.addEventListener("click", (e) => {
  console.log(e)
  console.log(mimicServerCall()
  .then(data => {
    console.log(data),
    console.log(element.classList)
      if(element.classList[1] !== "activated-heart"){
      element.classList.add("activated-heart")
    }
      else if(element.classList[1] === "activated-heart"){
      element.classList.remove("activated-heart")
      }
  })
  .catch(error => {
    document.getElementById("modal").classList.remove("hidden");
    document.getElementById("modal-message").innerText = `${error}`;
    setTimeout(hideModal, 3000);
  })
  )
  // return fetch("http://mimicServer.example.com")
  // .then(response => response.json)
  // .then(data => console.log(data))
  
} )
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
