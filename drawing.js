export const draw_grid = (
  canvas,
  context,
  stroke = "#00FF00",
  fill = "#00AA00",
  minor = 10,
  major = 50,
  lineMin = 0.3,
  lineMax = 0.6
) => {
  context.save();
  context.strokeStyle = stroke;
  context.fillStyle = fill;
  for (let x = 0; x < canvas.width; x += minor) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.lineWidth = x % major === 0 ? lineMax : lineMin;
    if (x % major === 0) {
      context.fillText(`${x}`, x, 10);
      context.fill();
    }
    context.stroke();
  }
  for (let y = 0; y < canvas.height; y += minor) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.lineWidth = y % major === 0 ? lineMax : lineMin;
    if (y % major === 0) {
      context.fillText(`${y}`, 0, y + minor);
      context.fill();
    }
    context.stroke();
  }

  context.restore();
};

export const draw_asteroid = (canvas, context, radius, segments, options) => {
  options = options || {noise: 0.5};
  context.strokeStyle = options.stroke || "white";
  context.fillStyle = options.fill || "black";
  context.save();
  context.beginPath();
  for (let i = 0; i < segments; i++) {
    context.rotate((2 * Math.PI) / segments);
    context.lineTo(radius + radius * options.noise * (Math.random() - 0.75), 0);
  }
  context.closePath();
  context.fill();
  context.stroke();
  if (options.guide) {
    context.lineWidth = 0.5;
    context.beginPath();
    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.stroke();
  }
  context.restore();
};
