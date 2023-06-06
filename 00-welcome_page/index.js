// get the button by passing id name inside the argument
const button = document.getElementById("submit");

// add an event listener for when the button is clicked

// first argument is the event, which generate when the action comes: 
// types of event: mouseover, click, mouseout 
button.addEventListener("click", function() {
    alert("submit!");
});
