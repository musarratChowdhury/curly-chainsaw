import anime from "animejs";

// Get canvas and context
const gameCanvas = document.getElementById("game-canvas") as HTMLCanvasElement;
const ctx = gameCanvas.getContext("2d");

// Initial circle properties
const circle = {
  x: gameCanvas.width / 4,
  y: gameCanvas.height / 4,
  radius: 0, // Initial radius
};

// Function to draw the circle
function drawCircle() {
  ctx?.clearRect(0, 0, gameCanvas.width, gameCanvas.height); // Clear canvas
  ctx?.beginPath();
  ctx?.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx!.fillStyle = "green";
  ctx?.fill();
}

// Anime.js animation to increase radius
anime({
  targets: circle,
  radius: 150, // Target radius
  duration: 2000, // Animation duration in milliseconds
  easing: "easeInOutQuad",
  update: drawCircle, // Redraw circle on each animation frame
});
