/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let t = time.split(':');
  let hrs = parseInt(t[0]);
  if (hrs < 12) {
    return "Good Morning";
  } else if (hrs >= 12 && hrs < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(str) {
  let e = document.getElementById('greeting')
  e.innerText = str
}
