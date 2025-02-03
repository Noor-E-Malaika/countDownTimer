const targetTime = new Date("feb 1, 2025, 12:00:00").getTime();

function updateCountdown () {
  const now = new Date().getTime();
const timeLeft = targetTime - now;

if(timeLeft <= 0){
  document.getElementById("timer").innerHTML= "00:00:00:00"
  clearInterval(timerInterval)
  alert("CountDown Finished")
  return;

}

const days = Math.floor(timeLeft/(1000 * 60 * 60 * 24))
const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ))
const minutes =  Math.floor(timeLeft % (1000 * 60 * 60 ) / (1000 * 60 ))
const seconds =  Math.floor(timeLeft % (1000 * 60 ) / (1000 ))

function formatTime (value){
  return value.toString().padStart(2, "0")
}
document.getElementById("timer").innerHTML =
formatTime(days) + ":" + formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

const timerInterval = setInterval(updateCountdown, 1000)
updateCountdown()
