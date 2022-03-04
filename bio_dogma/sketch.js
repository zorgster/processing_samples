var start_x = 50; var start_y = 50;
var box_w = 100; var box_h = 100;
var arrow_w = 50;
var rna_shift = 180;

function setup() {
  createCanvas(600, 200);
}

function draw() {
  background(240);
  drawBox(start_x, "DNA", box_w, true)
  drawBox(start_x + rna_shift, "RNA", box_w, true)
  drawBox(start_x + rna_shift*2, "Protein", box_w*1.5, false)
  stop();
}

function drawBox(start_x, box_label, box_w, add_pointer){
  let box_col = color(200,220,255);
  textAlign(CENTER, CENTER);
  
  fill(box_col);
  noStroke();

  rect(start_x, start_y, box_w, box_h);
  
  if (add_pointer){
    triangle(start_x + box_w, start_y, start_x + box_w, start_y + box_h, start_x + box_w + arrow_w, start_y + box_h/2);
  }

  fill(0);
  stroke(0);
  line(start_x,start_y,start_x + box_w, start_y);
  line(start_x,start_y, start_x, start_y + box_h);
  line(start_x,start_y + box_h, start_x + box_w ,start_y + box_h);
  if (add_pointer){
    line(start_x + box_w, start_y, start_x + box_w + arrow_w, start_y + box_h/2);
    line(start_x + box_w, start_y + box_h, start_x + box_w + arrow_w, start_y + box_h/2);
  } else {
    line(start_x + box_w, start_y, start_x + box_w, start_y + box_h);
  }
  textSize(30);
  text(box_label, start_x + box_w/2, start_y + box_h/2);

}