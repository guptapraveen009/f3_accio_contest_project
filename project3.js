document.getElementById("add-timer-btn").addEventListener("click", addTimer);
let timerContainer=document.getElementById("timers-container");


function addTimer() {
  const timerContainer = document.getElementById("timers-container");

  
  const timerDiv = document.createElement("div");
  timerDiv.classList.add("timer");

  const timeDisplay = document.createElement("div");
  timeDisplay.classList.add("time");
  timeDisplay.textContent = "00:00:00";

  const controlsDiv = document.createElement("div");
  controlsDiv.classList.add("controls");

  const startBtn = document.createElement("button");
  startBtn.textContent = "Start";



  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("Delete");

  controlsDiv.append(startBtn,  deleteBtn );
  timerDiv.append(timeDisplay, controlsDiv);
  timerContainer.appendChild(timerDiv);

  let timerInterval;
  let elapsedSeconds = 0;

  
  startBtn.addEventListener("click", () => {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
      elapsedSeconds++;
      timeDisplay.textContent = formatTime(elapsedSeconds);
    }, 1000);
  });

  deleteBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedSeconds = 0;
    timerDiv.remove();
});

}


// Format time in HH:MM:SS
function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}
