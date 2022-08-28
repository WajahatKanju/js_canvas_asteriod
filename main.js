import { draw_grid, draw_asteroid } from "./drawing.js";

const canvas = document.getElementsByTagName("canvas")[0];
const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

draw_grid(canvas, context);

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

let segments = 16, noise = 0.2;
let shape = [];
for (let i = 0; i < segments; i++) {
  shape.push(2 * (Math.random() - 0.45));
}

function draw(noise, angle) {
  for (let y = 0.1; y < 1; y += 0.2) {
    for (let x = 0.1; x < 1; x += 0.2) {
      context.save();
      context.translate(context.canvas.width * x,
        context.canvas.height * y);
      context.rotate(angle);
      draw_asteroid(canvas, context, context.canvas.width / 16, shape,
        { noise: noise, guide: true });
      context.restore();
      noise += 0.015;
    }
  }
}
let deg  = 0;
function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  draw_grid(canvas, context);
  requestAnimationFrame(animate);
  draw(noise, deg * Math.PI);
  deg += 0.005;
}

animate();