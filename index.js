const board = document.querySelector("#board");
const colors = [
  "#CD5C5C",
  "#FFA07A",
  "#FFC0CB",
  "#FF1493",
  "#FF6347",
  "#FF7F50",
  "#FFA500",
  "#FFFF00",
  "#FFD700",
  "#F0E68C",
  "#E6E6FA",
  "#7B68EE",
  "#ADFF2F",
  "#006400",
  "#00FF00",
  "#008080",
  "#00FFFF",
  "#87CEFA",
  "#1E90FF",
  "#0000FF",
  "#FFE4C4",
  "#F0FFF0",
];
const SQUARES_NUMBER = 980;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRondomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRondomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
