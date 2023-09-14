var random = 0;
/* new hit */

function getNewHit() {
  random = Math.floor(Math.random() * 10);
  document.querySelector("#hit").innerHTML = random;
}

/* score counter */
var scorevar = 0;
function Score() {
  scorevar += 10;
  document.querySelector("#score").textContent = scorevar;
}

document.querySelector("#p-bottom").addEventListener("click", (dets) => {
  var detsdata = Number(dets.target.textContent);
  /* console.log(typeof detsdata);
  typeof detsdata; */
  console.log(detsdata);
  if (timer != 0) {
    if (detsdata === random) {
      Score();
      getNewHit();
      bubblemaker();
    }
  } /* else {
    window.alert("tou are out");
  } */
});

/* timer counter */
var timer = 60;
function countTime() {
  var timeint = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timeint);
      document.querySelector(
        "#p-bottom"
      ).innerHTML = `<h1 class="pbtm-h1">Game Over</h1> <button id="reload-button">Play Again ?</button>`;
      document.getElementById("reload-button").addEventListener("click", () => {
        location.reload();
      });
    }
  }, 1000);
}

/* bubble maker */
function bubblemaker() {
  clutter = "";

  for (var i = 0; i <= 79; i++) {
    var randomizer = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomizer}</div>`;
    console.log(clutter);
  }

  document.querySelector("#p-bottom").innerHTML = clutter;
}

getNewHit();
countTime();
bubblemaker();
