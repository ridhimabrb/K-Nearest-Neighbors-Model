class Point {
  constructor() {
    this.x = Math.random() * width; // A random value along the x axis
    this.y = Math.random() * height; // A random value along the y axis
    this.class = floor(Math.random() * 2); // A random class: either 0 or 1
  }

  display() {
    stroke(0);
    strokeWeight(2);

    // Coloring the points. 
    if (this.class == 1) {
      fill(200, 120, 230);
    } else {
      fill(0, 200, 200);
    }

    // Drawing a circle 
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
    // TODO... Find the distance between each point and the mouse.
    let distance = dist(points[i].x, points[i].y, mouseX, mouseY);
    distances.push([distance, points[i].class]);
  }
  distances.sort((a, b) => a[0] - b[0]);
  let numZero = 0;
  let numOne = 0;

  // Looping through the 3 nearest neighbors and counting the classes
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





