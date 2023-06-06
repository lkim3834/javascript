 
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
// first element with class color is returned
const color = document.querySelector(".color");
// listen to the click event on the buttonß
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);
  // document.body.style.backgroundColor = colors[2];

  // refers to the body element in document, style is to access the css styles of the element. backgroundColor is the css property
  document.body.style.backgroundColor = colors[randomNumber];
  // textContent is the text inside the tag
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  // Math.random() gives a random number between 0 and 1  0.3 , 0.5, 0.9
  return  Math.floor(Math.random() * colors.length);
}