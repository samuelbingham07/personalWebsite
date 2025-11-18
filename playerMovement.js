const player = document.getElementById("player");
const gameArea = document.getElementById("game-area");

let x = 100;     // starting x position (matches CSS)
let y = 100;     // starting y position (matches CSS)
const speed = 4; // movement speed in pixels per frame

const keys = {};

document.addEventListener("keydown", (e) => {
keys[e.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (e) => {
keys[e.key.toLowerCase()] = false;
});

function update() {
const areaRect = gameArea.getBoundingClientRect();
const size = player.offsetWidth; // or 40 if you prefer

// Left (ArrowLeft or A)
if (keys["arrowleft"] || keys["a"]) {
  x -= speed;
}
// Right (ArrowRight or D)
if (keys["arrowright"] || keys["d"]) {
  x += speed;
}
// Up (ArrowUp or W)
if (keys["arrowup"] || keys["w"]) {
  y -= speed;
}
// Down (ArrowDown or S)
if (keys["arrowdown"] || keys["s"]) {
  y += speed;
}

// Keep player inside game area
x = Math.max(0, Math.min(x, areaRect.width - size));
y = Math.max(0, Math.min(y, areaRect.height - size));

player.style.left = x + "px";
player.style.top = y + "px";

requestAnimationFrame(update);
}

update();