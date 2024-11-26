/**
 * Setup and Draw. 
 * 
 * The code inside the draw() function runs continuously
 * from top to bottom until the program is stopped.  
 */

let y = 350; let y1 = 100;
let lipid_dia = 30;
let lipid_l1 = 17; let lipid_l1a = 3; let lipid_l2 = 10;
let lipid_spacing = 5; let layer_spacing = 3;
let pore_start = 400; let pore_width = 200;

// The statements in the setup() function 
// execute once when the program begins
function setup() {
  createCanvas(1000, 800);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  size(1000, 800);  // Size must be the first statement
  stroke(0);     // Set line drawing color to white
  background(255);
}

// The statements in draw() are executed until the 
// program is stopped. Each statement is executed in 
// sequence and after the last line is read, the first 
// line is executed again.
function draw() { 
  //  background(0);   // Clear the screen with a black background

  // draw membrane left of the pore (pore_start)
  for (let x = 0; x < pore_start; x = x + lipid_dia + lipid_spacing) {
    circle(x, y, lipid_dia);
    line(x - 1, y + lipid_dia / 2, x - 2, y + lipid_dia / 2 + lipid_l1);
    line(x - 2, y + lipid_dia / 2 + lipid_l1, x - 5, y + lipid_dia / 2 + lipid_l1 + lipid_l1a);
    line(x + 2, y + lipid_dia / 2, x + 3, y + lipid_dia / 2 + lipid_l2);

    line(x + 5, y + lipid_dia / 2 + lipid_l1 + lipid_l1a + layer_spacing, x + 2, y + lipid_dia / 2 + lipid_l1 + lipid_l1a * 2 + layer_spacing);
    line(x + 2, y + lipid_dia / 2 + lipid_l1 + 2 * lipid_l1a + layer_spacing, x + 1, y + lipid_dia / 2 + lipid_l1 * 2 + lipid_l1a * 2 + layer_spacing);
    line(x - 3, y + lipid_dia / 2 + lipid_l1 * 2 + lipid_l1a * 2 - lipid_l2 + layer_spacing, x - 2, y + lipid_dia / 2 + lipid_l1 * 2 + lipid_l1a * 2 + layer_spacing);
    circle(x, y + lipid_dia + lipid_l1 * 2 + lipid_l1a * 2 + layer_spacing, lipid_dia);
  }

  // draw membrane right of the pore
  for (let x = pore_start + pore_width; x < width; x = x + lipid_dia + lipid_spacing) {
    circle(x, y, lipid_dia);
    line(x - 1, y + lipid_dia / 2, x - 2, y + lipid_dia / 2 + lipid_l1);
    line(x - 2, y + lipid_dia / 2 + lipid_l1, x - 5, y + lipid_dia / 2 + lipid_l1 + lipid_l1a);
    line(x + 2, y + lipid_dia / 2, x + 3, y + lipid_dia / 2 + lipid_l2);

    line(x + 5, y + lipid_dia / 2 + lipid_l1 + lipid_l1a + layer_spacing, x + 2, y + lipid_dia / 2 + lipid_l1 + lipid_l1a * 2 + layer_spacing);
    line(x + 2, y + lipid_dia / 2 + lipid_l1 + 2 * lipid_l1a + layer_spacing, x + 1, y + lipid_dia / 2 + lipid_l1 * 2 + lipid_l1a * 2 + layer_spacing);
    line(x - 3, y + lipid_dia / 2 + lipid_l1 * 2 + lipid_l1a * 2 - lipid_l2 + layer_spacing, x - 2, y + lipid_dia / 2 + lipid_l1 * 2 + lipid_l1a * 2 + layer_spacing);
    circle(x, y + lipid_dia + lipid_l1 * 2 + lipid_l1a * 2 + layer_spacing, lipid_dia);
  }
  stop();
} 
