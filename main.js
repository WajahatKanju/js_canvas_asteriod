import { draw_grid, draw_asteroid } from "./drawing.js";

const canvas = document.getElementsByTagName("canvas")[0];
const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

draw_grid(canvas, context);

let radius = 300;

let segments = 1;
for (let x = 0.25; x < 1; x += 0.5) {
  for (let y = 0.25; y < 1; y += 0.5) {
    segments += 2;
    context.save();
    context.translate(context.canvas.width * x, context.canvas.height * y);
    draw_asteroid(canvas, context, 60, segments, { guide: true });
    context.restore();
  }
}
