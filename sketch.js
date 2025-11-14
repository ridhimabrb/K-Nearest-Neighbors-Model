let points = [];
let k = 3;

class Point {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.class = floor(random(2));
  }

  display() {
    stroke(0);
    strokeWeight(2);

    fill(this.class === 1 ? "rgb(200,120,230)" : "rgb(0,200,200)");
    circle(this.x, this.y, 20);
  }
}

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("canvasWrapper");

  generatePoints();

  // UI bindings
  document.getElementById("regenBtn").addEventListener("click", generatePoints);
  document.getElementById("kSlider").addEventListener("input", (event) => {
    k = event.target.value;
    document.getElementById("kValue").innerText = k;
  });
}

function draw() {
  background(245);

  for (let p of points) {
    p.display();
  }

  classifyMouse();
}

// randomize dataset
function generatePoints() {
  points = [];
  for (let i = 0; i < 25; i++) {
    points.push(new Point());
  }
}

function classifyMouse() {
  let distances = [];

  for (let p of points) {
    let d = dist(p.x, p.y, mouseX, mouseY);
    distances.push([d, p.class]);
  }

  distances.sort((a,b) => a[0] - b[0]);

  let count0 = 0, count1 = 0;
  for (let i = 0; i < k; i++) {
    distances[i][1] === 1 ? count1++ : count0++;
  }

  noStroke();
  fill(count1 > count0 ? "rgb(200,120,230)" : "rgb(0,200,200)");
  circle(mouseX, mouseY, 12);
}
