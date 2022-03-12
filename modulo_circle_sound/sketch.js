let center_x = 300; let center_y = 300;
let points_x = [];
let points_y = [];
let num_points = 100;
let radius = 280;
let point_r = 10;
let grade = 3;

function setup() {
  frameRate(10);
  colorMode(HSB,100);
  angleMode(DEGREES);

  createCanvas(windowWidth,windowHeight);
  center_x = windowWidth/2;
  center_y = windowHeight/2;
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  amplitude = new p5.Amplitude();

  textAlign(CENTER, CENTER);
  for (i=0; i<num_points; i++){
    points_x[i] = center_x + radius*sin(i*360/num_points);
    points_y[i] = center_y - radius*cos(i*360/num_points);
  }
}

function draw() {
  let spectrum = fft.analyze();
  let freq = floor(map(spectrum[10], 0, 255, 1, 1000));

  background(220);
  
  fill((freq*2)%90,100,100,10);
  circle(center_x, center_y, radius*2);

  stroke((freq*3)%80,100,100,80);
  for (i=0; i<100; i++){
    let s = i % num_points;
    let e = (i*freq) % num_points;
    line(points_x[s], points_y[s], points_x[e], points_y[e]);
  }

  fill((freq*4)%18,100,100,100);
  for (i=0; i<num_points; i++){
    let x_e = 10; let y_e = 20;
    circle(points_x[i], points_y[i], point_r);
    if (points_x[i] > center_x) { x_e = 10} else if(points_x[i]<center_x){ x_e = -10 } else { x_e = 0};
    if (points_y[i] > center_y) { y_e = 10} else if(points_y[i]<center_y){ y_e = -10 } else { y_e = 0 };
  }

}