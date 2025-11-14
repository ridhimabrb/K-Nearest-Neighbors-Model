class Point {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.class = floor(Math.random() * 2);
  }

  display() {
    stroke(0);
    strokeWeight(2);

    if (this.class == 1) {
      fill(200, 120, 230);
    } else {
      fill(0, 200, 200);
    }

    ellipse(this.x, this.y, 20, 20);
  }
}

var points = [];

function setup() {
  createCanvas(300, 300);

  for (var i = 0; i < 20; i++) {
    points.push(new Point());
  }
}

function draw() {
  background(240);

  for (var i = 0; i < points.length; i++) {
    points[i].display();
  }
  classifyMouse();
}

function classifyMouse() {
  let distances = [];

  for (var i = 0; i < points.length; i++) {
    let distance = dist(points[i].x, points[i].y, mouseX, mouseY);
    distances.push([distance, points[i].class]);
  }
  
  distances.sort((a, b) => a[0] - b[0]);
  
  let numZero = 0;
  let numOne = 0;

  for (var i = 0; i < 3; i++) {
    if (distances[i][1] == 1) {
      numOne++;
    } else {
      numZero++;
    }
  }

  noStroke();
  if (numOne > numZero) {
    fill(200, 120, 230);
  } else {
    fill(0, 200, 200);
  }

  ellipse(mouseX, mouseY, 10, 10);
}
