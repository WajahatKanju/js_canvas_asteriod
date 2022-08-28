import { draw_grid, draw_asteroid } from "./drawing.js";

const canvas = document.getElementsByTagName("canvas")[0];
const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

draw_grid(canvas, context);

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

let segments = 15, noise = 0.2;
let shape = [];
for (let i = 0; i < segments; i++) {
  shape.push(2 * (Math.random() - 0.45));
}
for (let y = 0.1; y < 1; y += 0.2) {
  for (let x = 0.1; x < 1; x += 0.2) {
    context.save();
    context.translate(context.canvas.width * x,
      context.canvas.height * y);
    draw_asteroid(canvas, context, context.canvas.width / 16, shape,
      { noise: noise, guide: true });
    context.restore();
    noise += 0.015;
  }
}