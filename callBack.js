// Setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 0;

let startCounter = function () {
  intervalID = setInterval(function () {
    // Increment the counter
    counter++;
    // Output the counter value to the console
    console.log(counter);
  }, 1000);
};

function stopCounter() {
  // Stop the counter by clearing the interval
  clearInterval(intervalID);
}

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

// Add event listeners with callback functions
startButton.addEventListener("click", startCounter);
stopButton.addEventListener("click", stopCounter);
