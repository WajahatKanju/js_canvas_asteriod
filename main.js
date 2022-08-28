import { draw_grid, draw_asteroid } from "./drawing.js";

const canvas = document.getElementsByTagName("canvas")[0];
const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

draw_grid(canvas, context);

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min ) +min);

let radius = context.canvas.width/12;
let noise  = 0.5;

for (let x = 0.10; x < 1; x += 0.20) {
  for (let y = 0.10; y < 1; y += 0.20) {
    let segments = generateRandom(15,25);
    context.save();
    context.translate(context.canvas.width * x, context.canvas.height * y);
    draw_asteroid(canvas, context, radius, segments, { guide: true, noise:noise });
    context.restore();
  }
}
