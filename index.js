const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};

refs.startBtn.addEventListener("click", setRandomColors);
refs.stopBtn.addEventListener("click", stopRandomColors);

let intervalColor = undefined;

function setRandomColors() {
  intervalColor = setInterval(() => {
    const randomColors = colors[randomIntegerFromInterval(0, colors.length)];
    console.log(randomColors);
    refs.body.style.background = randomColors;
  }, 1000);

  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function stopRandomColors() {
  clearInterval(intervalColor);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}
