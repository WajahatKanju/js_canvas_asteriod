import { draw_grid, draw_asteroid } from "./drawing.js";

const canvas = document.getElementsByTagName("canvas")[0];
const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


let radius = 300;

// let segments = 1;
// for (let x = 0.25; x < 1; x += 0.5) {
//   for (let y = 0.25; y < 1; y += 0.5) {
//     segments += 2;
//     context.save();
//     context.translate(context.canvas.width * x, context.canvas.height * y);
//     draw_asteroid(canvas, context, 60, segments, { guide: true });
//     context.restore();
//   }
// }

context.save();
context.beginPath();
context.strokeStyle = '#FFF';
// context.moveTo(100, 100);
context.translate(context.canvas.width * 0.25, context.canvas.height * 0.25);
context.moveTo(0, 80);
context.rotate(Math.PI * 0.5 / 4);
context.lineTo(0, 80);

context.rotate(Math.PI * 0.5 / 4);
context.lineTo(0, 80);

context.rotate(Math.PI * 0.5 / 4);
context.lineTo(0, 80);

context.rotate(Math.PI * 0.5 / 4);
context.lineTo(0, 80);


context.rotate(Math.PI * 0.5 / 4);
context.lineTo(0, 80);

context.rotate(Math.PI * 0.5 / 4);
context.lineTo(0, 80);


context.rotate(Math.PI * 0.5 / 4);
context.lineTo(0, 80);

context.rotate(Math.PI * 0.5 / 4);
context.lineTo(0, 80);

context.rotate(Math.PI * 0.5 / 4);
context.lineTo(0, 80);

context.rotate(Math.PI * 0.5 / 4);
context.lineTo(0, 80);

context.rotate(Math.PI * 0.5 / 4);
context.lineTo(0, 80);

context.rotate(Math.PI * 0.5 / 4);
context.lineTo(0, 80);

context.rotate(Math.PI * 0.5 / 4);
context.lineTo(0, 80);

context.rotate(Math.PI * 0.5 / 4);
context.lineTo(0, 80);

context.rotate(Math.PI * 0.5 / 4);
context.lineTo(0, 80);

context.rotate(Math.PI * 0.5 / 4);
context.lineTo(0, 80);

// context.lineTo(50, 0);
// context.rotate(Math.PI * 2 /5);
// context.lineTo(50, 0);
// context.rotate(Math.PI * 2 /5);
// context.lineTo(50, 0);
// context.rotate(Math.PI * 2 /5);
// context.lineTo(50, 0);
// context.rotate(Math.PI * 2 /5);
// context.lineTo(50, 0);
context.stroke();
// for (let i = 0; i < 4; i++) {
//   context.rotate((2 * Math.PI) / 4);
//   context.lineTo(30, 0);
// }
context.restore();