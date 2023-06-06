// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
console.log(btns);

// https://www.w3schools.com/jsref/jsref_foreach.asps
// for each calls a function for each element in fruits

btns.forEach(function (btn) {
  console.log(btn);
});
btns.forEach(function (btn) {
  // add event object
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget);
    const styles = e.currentTarget.classList;
    console.log(styles);
    // contains is the method of the classlist object
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    // we use the three equal signs to check if the value and type are the same
    if (count === 0) {
      value.style.color = "#222";
    }
    
    value.textContent = count;
  });
});
