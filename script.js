let [ms, s, m, h] = [0, 0, 0, 0];
let timer = null;

function updateDisplay() {
  const formattedTime = 
    `${String(h).padStart(2, '0')}:` +
    `${String(m).padStart(2, '0')}:` +
    `${String(s).padStart(2, '0')}:` +
    `${String(ms).padStart(2, '0')}`;
    
  document.getElementById("display").innerText = formattedTime;
}

function stopwatch() {
  ms += 1;
  if (ms === 100) {
    ms = 0;
    s++;
  }
  if (s === 60) {
    s = 0;
    m++;
  }
  if (m === 60) {
    m = 0;
    h++;
  }
  updateDisplay();
}

function start() {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 10);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  [ms, s, m, h] = [0, 0, 0, 0];
  updateDisplay();
  timer = null;
}
