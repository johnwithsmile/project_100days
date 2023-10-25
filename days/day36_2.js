// Events

// User clicks on some element
// User types some text into an input field
// User scrolls to a certain part of the page

// Event to which we might want to react - to then excute JavaScript code

// someElement.addEventListener('<EVENT>', ..)

let paragraphElement = document.body.querySelector("p");

function changeParagraphText(event) {
  paragraphElement.textContent = "Clicked!";
  // console.log("clicked");
  console.log(event);
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.body.querySelector("input");

function getUserInput(event) {
  // let enteredText = inputElement.value;
  let enteredText = event.target.value;
  // let enteredText = event.data;  // <= this is different
  console.log(enteredText);
  // console.log(event);
}

inputElement.addEventListener("input", getUserInput);

const spanElement = document.getElementById("remaining-chars");
