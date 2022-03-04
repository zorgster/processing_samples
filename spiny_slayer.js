c_x = 600; c_y = 350;
rand_dn = -10; rand_up = 10;
c_x_1 = [600, 200, 400, 300, 250, 220, 500, 200, 400, 300, 250, 220, 500];
c_y_1 = [350, 200, 100, 50, 450, 300, 120, 100, 50, 450, 100, 50, 450];
c_x_col = [];
n_items = 13;

function setup() {
  createCanvas(800, 600);
  
  for (x=0;x<n_items;x++){
    c_x_col[x] = color(random(0,255),random(0,255),random(0,255));
  }
}

function draw() {
  background(240);
  for (i=0; i<800; i=i+50) {
    for (j=0; j<600; j=j+50) {
      point(i,j);
    }
  }
  
  //line(0,300,800,300);
  
  for (x=0;x<n_items;x++){
    line(450,250,c_x_1[x],c_y_1[x]);
    fill(c_x_col[x]);
    circle(c_x_1[x],c_y_1[x],20);
    if (c_x_1[x] < 750 && c_x_1[x] > 50) {
      c_x_1[x] = c_x_1[x] + random(rand_dn,rand_up);
    } else {
      if (c_x_1[x] > 750){
        c_x_1[x] = c_x_1[x] + rand_dn;
      }
      if (c_x_1[x] < 50){
        c_x_1[x] = c_x_1[x] + rand_up;    
      }
    }

    if (c_y_1[x] < 550 && c_y_1[x] > 50) {
      c_y_1[x] = c_y_1[x] + random(rand_dn,rand_up);
    } else {
      if (c_y_1[x] > 550){
        c_y_1[x] = c_y_1[x] + rand_dn;
      }
      if (c_y_1[x] < 50){
        c_y_1[x] = c_y_1[x] + rand_up;
      }
    }

  }
  
}
