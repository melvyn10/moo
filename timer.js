var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 15;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    /*
    window.localStorage.setItem('secondLeft'+JSON.stringify(secondsLeft),JSON.stringify(secondsLeft));
    */
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 100);
}

function sendMessage() {
  timeEl.textContent = " ";

  mainEl.textContent = "Game Over";

  /* write to local storage */
  localStorage.setItem("allScores", "aaa" + JSON.stringify(secondsLeft));

  var btn = document.createElement("BUTTON");
  btn.innerHTML = "highscore";
  document.body.appendChild(btn);

  document.getElementById("btn").addEventListener("click", myFunction);

  function myFunction() {
  document.getElementById("btn").innerHTML = "YOU CLICKED ME!";
}
  
  location.replace("./highscore.html");
  /*
  <button onclick="location.href='highscore.html'">highscore</button>;
  */
}

setTime();