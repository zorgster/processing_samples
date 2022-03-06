let center_x = 300; let center_y = 300;
let points_x = [];
let points_y = [];
let num_points = 100;
let radius = 280;
let point_r = 10;
let grade = 3;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  for (i=0; i<num_points; i++){
    points_x[i] = center_x + radius*sin(i*360/num_points);
    points_y[i] = center_x - radius*cos(i*360/num_points);
  }
}

function draw() {
  background(220);
  
  fill(255);
  circle(center_x, center_y, radius*2);

  for (i=0; i<100; i++){
    let s = i % num_points;
    let e = (i*grade) % num_points;
    line(points_x[s], points_y[s], points_x[e], points_y[e]);
  }

  fill(255,0,0);
  for (i=0; i<num_points; i++){
    let x_e = 10; let y_e = 20;
    circle(points_x[i], points_y[i], point_r);
    if (points_x[i] > center_x) { x_e = 10} else if(points_x[i]<center_x){ x_e = -10 } else { x_e = 0};
    if (points_y[i] > center_y) { y_e = 10} else if(points_y[i]<center_y){ y_e = -10 } else { y_e = 0 };
    text(i+1, points_x[i] + x_e, points_y[i] + y_e);
  }

  fill(255);
  rect(center_x - 25, center_y - 10, 50, 20);
  fill(255,0,0);
  text(grade, center_x, center_y);

  grade = floor(map(mouseX, 0, width, 1, 5256));
}
